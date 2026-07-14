/**
 * Serviço de Conteúdo
 * Centraliza o acesso aos dados do curso, oferecendo buscas indexadas (O(1)),
 * cálculo de navegação entre tópicos e cálculo de progresso.
 *
 * Esta é a única camada que conhece a estrutura de @/data/course-data.
 */
import { aboutData, contents, modules } from '@/data/course-data';
import type { AboutData, Content, Module, TopicNavigation } from '@/types';

/** Separador usado para compor o identificador de conteúdo a partir de módulo + tópico. */
const CONTENT_ID_SEPARATOR = '__';

// Índices para acesso O(1) (evita .find() repetido em O(n)).
const moduleById = new Map<string, Module>(modules.map((m) => [m.id, m]));
const contentByTopicId = new Map<string, Content>(
  contents.map((c) => [c.topicId, c])
);

/** Retorna todos os módulos do curso. */
export function getAllModules(): Module[] {
  return modules;
}

/** Retorna os dados institucionais do aplicativo. */
export function getAboutData(): AboutData {
  return aboutData;
}

/** Total de tópicos somando todos os módulos. */
export function getTotalTopicsCount(): number {
  return modules.reduce((acc, m) => acc + m.topics.length, 0);
}

/** Busca um módulo pelo id. */
export function getModuleById(moduleId?: string): Module | null {
  if (!moduleId) return null;
  return moduleById.get(moduleId) ?? null;
}

/** Compõe o identificador de conteúdo (usado como parâmetro de rota). */
export function buildContentId(moduleId: string, topicId: string): string {
  return `${moduleId}${CONTENT_ID_SEPARATOR}${topicId}`;
}

/**
 * Decompõe um contentId em módulo e tópico.
 * Mantém compatibilidade com o formato legado (separador simples "-")
 * fazendo fallback pela busca do tópico.
 */
export function parseContentId(
  contentId?: string
): { moduleId: string; topicId: string } | null {
  if (!contentId) return null;

  const separatorIndex = contentId.indexOf(CONTENT_ID_SEPARATOR);
  if (separatorIndex !== -1) {
    return {
      moduleId: contentId.slice(0, separatorIndex),
      topicId: contentId.slice(separatorIndex + CONTENT_ID_SEPARATOR.length),
    };
  }

  // Fallback para o formato antigo `${moduleId}-${topicId}`.
  const legacy = contents.find((c) => contentId.includes(c.topicId));
  return legacy ? { moduleId: legacy.moduleId, topicId: legacy.topicId } : null;
}

/** Retorna o conteúdo associado a um contentId, ou null se não existir. */
export function getContentByContentId(contentId?: string): Content | null {
  const parsed = parseContentId(contentId);
  if (!parsed) return null;
  return contentByTopicId.get(parsed.topicId) ?? null;
}

/**
 * Calcula a navegação (anterior/próximo) para o tópico de um contentId.
 * Retorna null se o contentId não puder ser resolvido em um módulo/tópico válido.
 */
export function getTopicNavigation(
  contentId?: string
): TopicNavigation | null {
  const parsed = parseContentId(contentId);
  if (!parsed) return null;

  const currentModule = moduleById.get(parsed.moduleId);
  if (!currentModule) return null;

  const topicIndex = currentModule.topics.findIndex(
    (t) => t.id === parsed.topicId
  );
  if (topicIndex === -1) return null;

  const previousTopic =
    topicIndex > 0 ? currentModule.topics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < currentModule.topics.length - 1
      ? currentModule.topics[topicIndex + 1]
      : null;

  return {
    currentModule,
    currentTopic: currentModule.topics[topicIndex],
    previousTopic,
    previousContentId: previousTopic
      ? buildContentId(currentModule.id, previousTopic.id)
      : null,
    nextTopic,
    nextContentId: nextTopic
      ? buildContentId(currentModule.id, nextTopic.id)
      : null,
    isFirst: topicIndex === 0,
    isLast: topicIndex === currentModule.topics.length - 1,
    topicNumber: topicIndex + 1,
    totalTopics: currentModule.topics.length,
  };
}

/**
 * Percentual de tópicos concluídos (0–100) de um módulo,
 * dado o conjunto de tópicos concluídos pelo usuário.
 */
export function getModuleProgress(
  moduleId: string,
  completedTopics: ReadonlySet<string>
): number {
  const module = moduleById.get(moduleId);
  if (!module || module.topics.length === 0) return 0;

  const completed = module.topics.filter((t) =>
    completedTopics.has(t.id)
  ).length;

  return Math.round((completed / module.topics.length) * 100);
}
