/**
 * Tipos centralizados da aplicação
 * Fonte única de verdade para os modelos de domínio e configurações
 */

export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export interface Content {
  id: string;
  moduleId: string;
  topicId: string;
  title: string;
  description: string;
  explanation: string;
  codeExample: string;
  codeLanguage: string;
  keyPoints: string[];
}

export interface Creator {
  name: string;
  role: string;
}

export interface AboutData {
  appName: string;
  version: string;
  description: string;
  creators: Creator[];
  features: string[];
  contact: {
    email: string;
    website: string;
  };
}

/**
 * Resultado do cálculo de navegação entre tópicos de um módulo.
 */
export interface TopicNavigation {
  currentModule: Module;
  currentTopic: Topic;
  previousTopic: Topic | null;
  previousContentId: string | null;
  nextTopic: Topic | null;
  nextContentId: string | null;
  isFirst: boolean;
  isLast: boolean;
  topicNumber: number;
  totalTopics: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export type FontSizeMode = 'sm' | 'md' | 'lg' | 'xl';
