# Aplicativo Mobile Educacional Para LTP IV

Este documento apresenta três etapas detalhados, cada um correspondendo a uma fase do desenvolvimento de um aplicativo mobile educacional. 

## Etapa 1: Montando Recursos Iniciais

**Objetivo:** Definir a estrutura visual e os elementos de design fundamentais do aplicativo, garantindo uma experiência de usuário coesa e intuitiva para iniciantes. Utilize a biblioteca gluestack para a organização dos componentes visuais. A documentação da gluestack está no seguinte link https://gluestack.io/ui/docs/home/overview/quick-start

**Detalhes:**

1. **Estrutura de Telas (Wireframes Conceituais):**
  - **Tela Inicial (Home):** Deve apresentar uma visão geral dos módulos disponíveis (ex: "Introdução ao Kotlin", "Fundamentos de UI", "Lógica de Programação"). Pode incluir um cabeçalho com o título do aplicativo e uma breve descrição.
  - **Tela de Módulos:** Lista os tópicos dentro de um módulo selecionado (ex: para "Introdução ao Kotlin", listar "Variáveis", "Tipos de Dados", "Estruturas de Controle").
  - **Tela de Conteúdo/Exemplo:** Exibe o conceito de programação, uma explicação clara e um exemplo de código interativo ou estático. Deve ter um layout limpo para facilitar a leitura.
  - **Tela "Sobre":** Informações básicas sobre o aplicativo e seus criadores.

1. **Tema e Estilo Visual:**
  - **Público-alvo:** Iniciantes em programação, o que sugere um design amigável, claro e sem complexidade visual excessiva.
  - **Estilo:** Moderno, limpo e minimalista. Priorizar a legibilidade do texto e do código.
  - Use *gluestack* para todos os componentes visuais.

1. **Paleta de Cores:**
  - **Cores Primárias:** Escolher 2-3 cores principais que transmitam confiança e facilidade de aprendizado (ex: tons de azul, verde ou laranja). Uma cor principal para elementos de destaque (botões, ícones) e uma secundária para fundos ou elementos menos proeminentes.
  - **Cores Neutras:** Utilizar tons de cinza, branco e preto para texto, fundos e separadores, garantindo contraste e legibilidade.
  - **Cores de Feedback:** Definir cores para sucesso (verde), erro (vermelho) e aviso (amarelo), caso sejam necessárias em futuras interações.

1. **Tipografia:**
  - **Fontes:** Selecionar uma fonte primária para títulos e uma secundária para o corpo do texto e exemplos de código. As fontes devem ser de fácil leitura em dispositivos móveis.
  - **Hierarquia:** Definir tamanhos e pesos de fonte para títulos (H1, H2), subtítulos e corpo de texto, garantindo uma hierarquia visual clara.
  - **Fonte para Código:** Escolher uma fonte monoespaçada para os blocos de código, que melhore a leitura e a identificação de caracteres.

1. **Ícones e Ilustrações (Opcional):**
  - Definir um estilo para ícones (ex: lineares, preenchidos) que complemente o tema geral.
  - Use o *react native icon vectors*.

## Etapa 2: Construindo Interfaces das Telas

**Objetivo:** Desenvolver as interfaces de usuário (UI) para as telas definidas na fase anterior, aplicando os recursos visuais (tema, cores, fontes) e garantindo uma experiência de usuário (UX) fluida e responsiva.

**Detalhes:**

1. **Layout e Componentes:**
  - **Tela Inicial (Home):** Implementar um layout que exiba os módulos de forma clara, possivelmente usando cards ou listas com ícones e títulos. Deve ser fácil de navegar.
  - **Tela de Módulos:** Criar uma lista rolável de tópicos, com cada item clicável para levar à tela de conteúdo. Incluir um botão de "Voltar" ou navegação intuitiva para a tela anterior.
    - **Tela de Conteúdo/Exemplo:** Desenvolver um layout com:
      - Título do tópico.
      - Área para texto explicativo (parágrafos).
      - Bloco de código formatado (com destaque de sintaxe, se possível).
      - Botões de navegação para "Próximo Tópico" e "Tópico Anterior" (ou similar).
      - (Opcional) Área para saída de código ou pequena interação.
  - **Tela "Sobre":** Layout simples com texto informativo.

1. **Responsividade:**
  - Garantir que todas as telas se adaptem bem a diferentes tamanhos e orientações de tela (retrato e paisagem) de dispositivos móveis.

1. **Acessibilidade (Básico):**
  - Garantir contraste suficiente entre texto e fundo.
  - Utilizar tamanhos de fonte legíveis.
  - Considerar a ordem de foco para navegação por teclado (se aplicável).

1. **Navegação:**
  - Implementar um sistema de navegação claro entre as telas (ex: `StackNavigator` ou `BottomTabNavigator` se houver mais seções principais).
  - Garantir que o fluxo do usuário seja lógico e fácil de entender para um iniciante.

1. **Feedback Visual:**
  - Adicionar estados visuais para elementos interativos (ex: botões mudam de cor ao serem pressionados).
  - Considerar animações sutis para transições de tela ou carregamento de conteúdo.

## Etapa 3: Construindo Funcionalidades com Requisitos Detalhados

**Objetivo:** Implementar a lógica de negócios e as interações do aplicativo, garantindo que os conceitos de programação sejam apresentados de forma eficaz e que o aplicativo seja funcional e fácil de usar.

**Detalhes:**

1. **Gerenciamento de Conteúdo:**
  - **Estrutura de Dados:** Definir como os módulos, tópicos e seus respectivos conteúdos (texto explicativo, exemplos de código) serão armazenados e acessados. Pode ser um arquivo JSON local, um banco de dados SQLite embarcado ou objetos JavaScript/Kotlin/Swift simples.
  - **Carregamento de Conteúdo:** Implementar a lógica para carregar dinamicamente o conteúdo de cada tópico quando o usuário o seleciona.

1. **Interatividade (Exemplos de Código):**
  - **Exibição de Código:** Garantir que os blocos de código sejam exibidos de forma formatada e legível. Se possível, integrar uma biblioteca de destaque de sintaxe.
  - **Copiar Código:** Adicionar um botão ou funcionalidade para copiar o exemplo de código para a área de transferência do dispositivo.
  - **(Opcional) Execução Simples:** Para exemplos muito básicos, considerar uma funcionalidade de "executar" que mostre uma saída pré-definida ou simule uma execução simples (sem um compilador real embarcado, apenas para fins demonstrativos).

1. **Navegação e Estado:**
  - **Fluxo de Módulos/Tópicos:** Gerenciar o estado de navegação para que o usuário possa progredir sequencialmente pelos tópicos de um módulo e retornar facilmente.
  - **Persistência (Opcional):** Se houver progresso do usuário (ex: tópicos concluídos), implementar uma forma simples de persistir esse estado localmente (ex: `SharedPreferences` no Android, `UserDefaults` no iOS, `AsyncStorage` no React Native).

1. **Pesquisa (Opcional):**
  - Adicionar uma funcionalidade de pesquisa simples que permita aos usuários encontrar tópicos ou módulos por palavras-chave.

1. **Configurações (Básico):**
  - **Tema Escuro/Claro:** Implementar a opção de alternar entre tema claro e escuro, se o design inicial permitir.
  - **Tamanho da Fonte:** Permitir que o usuário ajuste o tamanho da fonte do texto explicativo e do código para melhor acessibilidade.

1. **Sem Login:**
  - Garantir que nenhuma funcionalidade de autenticação ou gerenciamento de conta seja implementada, conforme o requisito inicial. O aplicativo deve ser totalmente acessível sem a necessidade de login.