/**
 * Hook para navegação entre tópicos
 * Gerencia lógica de próximo/anterior tópico
 */
import { contents, modules } from '@/constants/data';
import { useMemo } from 'react';

export function useTopicNavigation(contentId?: string) {
  return useMemo(() => {
    if (!contentId) return null;

    // Encontrar o conteúdo atual
    const currentContent = contents.find((c) =>
      contentId.includes(c.topicId)
    );

    if (!currentContent) return null;

    // Encontrar o módulo
    const currentModule = modules.find((m) => m.id === currentContent.moduleId);

    if (!currentModule) return null;

    // Encontrar índice do tópico atual
    const topicIndex = currentModule.topics.findIndex(
      (t) => t.id === currentContent.topicId
    );

    if (topicIndex === -1) return null;

    // Tópico anterior
    const previousTopic =
      topicIndex > 0 ? currentModule.topics[topicIndex - 1] : null;
    const previousContentId = previousTopic
      ? `${currentModule.id}-${previousTopic.id}`
      : null;

    // Próximo tópico
    const nextTopic =
      topicIndex < currentModule.topics.length - 1
        ? currentModule.topics[topicIndex + 1]
        : null;
    const nextContentId = nextTopic
      ? `${currentModule.id}-${nextTopic.id}`
      : null;

    return {
      currentModule,
      currentTopic: currentModule.topics[topicIndex],
      previousTopic,
      previousContentId,
      nextTopic,
      nextContentId,
      isFirst: topicIndex === 0,
      isLast: topicIndex === currentModule.topics.length - 1,
      topicNumber: topicIndex + 1,
      totalTopics: currentModule.topics.length,
    };
  }, [contentId]);
}
