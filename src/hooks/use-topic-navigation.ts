/**
 * Hook para navegação entre tópicos
 * Adaptador React para o serviço de conteúdo (getTopicNavigation).
 */
import { getTopicNavigation } from '@/services';
import { useMemo } from 'react';

export function useTopicNavigation(contentId?: string) {
  return useMemo(() => getTopicNavigation(contentId), [contentId]);
}
