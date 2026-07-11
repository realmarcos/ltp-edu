/**
 * Contexto de Progresso
 * Gerencia o progresso do usuário (tópicos concluídos, etc)
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ProgressContextType {
  completedTopics: Set<string>;
  isTopicCompleted: (topicId: string) => boolean;
  markTopicAsCompleted: (topicId: string) => void;
  unmarkTopicAsCompleted: (topicId: string) => void;
  getProgressPercentage: (moduleId: string) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadProgress = useCallback(async () => {
    try {
      const saved = await AsyncStorage.getItem('@app_completed_topics');
      if (saved) {
        const topics = JSON.parse(saved) as string[];
        setCompletedTopics(new Set(topics));
      }
    } catch (error) {
      console.warn('Erro ao carregar progresso:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProgress();
  }, [loadProgress]);

  const saveProgress = async (topics: Set<string>) => {
    try {
      await AsyncStorage.setItem(
        '@app_completed_topics',
        JSON.stringify(Array.from(topics))
      );
    } catch (error) {
      console.warn('Erro ao salvar progresso:', error);
    }
  };

  const isTopicCompleted = (topicId: string) => {
    return completedTopics.has(topicId);
  };

  const markTopicAsCompleted = async (topicId: string) => {
    const updated = new Set(completedTopics);
    updated.add(topicId);
    setCompletedTopics(updated);
    await saveProgress(updated);
  };

  const unmarkTopicAsCompleted = async (topicId: string) => {
    const updated = new Set(completedTopics);
    updated.delete(topicId);
    setCompletedTopics(updated);
    await saveProgress(updated);
  };

  const getProgressPercentage = (moduleId: string): number => {
    return 0;
  };

  if (isLoading) {
    return null;
  }

  return (
    <ProgressContext.Provider
      value={{
        completedTopics,
        isTopicCompleted,
        markTopicAsCompleted,
        unmarkTopicAsCompleted,
        getProgressPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error(
      'useProgress deve ser usado dentro de ProgressProvider'
    );
  }
  return context;
}
