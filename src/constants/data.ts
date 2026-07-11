/**
 * Dados fictícios dos módulos e conteúdos
 * Estrutura de dados para a aplicação
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
  topics: Topic[];
  color: string;
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

export const modules: Module[] = [
  {
    id: 'kotlin-intro',
    title: 'Introdução ao Kotlin',
    description: 'Aprenda os conceitos fundamentais da linguagem Kotlin',
    icon: 'code',
    color: '#5A99F5',
    topics: [
      {
        id: 'kotlin-what-is',
        title: 'O que é Kotlin?',
        description: 'Entenda por que Kotlin é importante',
      },
      {
        id: 'kotlin-setup',
        title: 'Configurando o Ambiente',
        description: 'Configure seu ambiente de desenvolvimento',
      },
      {
        id: 'kotlin-first-program',
        title: 'Seu Primeiro Programa',
        description: 'Escreva seu primeiro programa em Kotlin',
      },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Fundamentos de Programação',
    description: 'Conceitos essenciais para começar a programar',
    icon: 'book-open',
    color: '#10B981',
    topics: [
      {
        id: 'variables',
        title: 'Variáveis',
        description: 'Aprenda sobre variáveis e tipos de dados',
      },
      {
        id: 'data-types',
        title: 'Tipos de Dados',
        description: 'Explore os diferentes tipos de dados',
      },
      {
        id: 'operators',
        title: 'Operadores',
        description: 'Conheça os operadores da linguagem',
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Estruturas de Controle',
    description: 'Domine as estruturas de controle de fluxo',
    icon: 'git-branch',
    color: '#F59E0B',
    topics: [
      {
        id: 'if-else',
        title: 'Condicionais (if/else)',
        description: 'Controle o fluxo com condições',
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repita ações com loops (for, while)',
      },
      {
        id: 'when',
        title: 'Quando (when)',
        description: 'Use when para múltiplas condições',
      },
    ],
  },
  {
    id: 'functions',
    title: 'Funções',
    description: 'Aprenda a criar e usar funções eficientemente',
    icon: 'zap',
    color: '#EF4444',
    topics: [
      {
        id: 'function-basics',
        title: 'Básicos de Funções',
        description: 'Crie suas primeiras funções',
      },
      {
        id: 'parameters-return',
        title: 'Parâmetros e Retorno',
        description: 'Trabalhe com parâmetros e valores de retorno',
      },
      {
        id: 'lambda-functions',
        title: 'Funções Lambda',
        description: 'Use funções anônimas com eficiência',
      },
    ],
  },
];

export const contents: Content[] = [
  // Conteúdos de Introdução ao Kotlin
  {
    id: 'kotlin-what-is-content',
    moduleId: 'kotlin-intro',
    topicId: 'kotlin-what-is',
    title: 'O que é Kotlin?',
    description: 'Uma linguagem moderna para desenvolvimento',
    explanation:
      'Kotlin é uma linguagem de programação moderna e segura que roda na Java Virtual Machine (JVM). Foi criada pela JetBrains, a empresa por trás do popular IDE IntelliJ IDEA. Kotlin combina características de programação orientada a objetos e programação funcional, tornando-a poderosa e expressiva.',
    codeExample: `// Hello World em Kotlin
fun main() {
    println("Olá, Kotlin!")
}`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'Kotlin roda na JVM',
      'Totalmente compatível com Java',
      'Sintaxe concisa e segura',
      'Oficial para desenvolvimento Android',
    ],
  },

  // Conteúdos de Fundamentos
  {
    id: 'variables-content',
    moduleId: 'fundamentals',
    topicId: 'variables',
    title: 'Variáveis',
    description: 'Armazene dados de forma segura',
    explanation:
      'Variáveis são espaços na memória onde você armazena dados. Em Kotlin, você pode declarar variáveis de duas formas: "val" para valores imutáveis (que não podem ser alterados) e "var" para variáveis que podem ser modificadas. O compilador do Kotlin pode inferir o tipo automaticamente.',
    codeExample: `// Declarando variáveis
val idade = 25          // val - imutável
var nome = "João"       // var - mutável
nome = "Maria"          // OK

// Com tipos explícitos
val pi: Double = 3.14
var contador: Int = 0`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'val = imutável (preferido)',
      'var = mutável',
      'Tipo pode ser inferido',
      'Nomes descritivos são importantes',
    ],
  },

  {
    id: 'data-types-content',
    moduleId: 'fundamentals',
    topicId: 'data-types',
    title: 'Tipos de Dados',
    description: 'Conheça os tipos disponíveis',
    explanation:
      'Kotlin oferece vários tipos de dados primitivos e compostos. Os principais são: Int (números inteiros), Double (números decimais), String (texto), Boolean (verdadeiro/falso), Array (coleção de elementos) e List (lista dinâmica). Cada tipo tem um propósito específico.',
    codeExample: `// Tipos de dados básicos
val inteiro: Int = 42
val decimal: Double = 3.14
val texto: String = "Kotlin"
val booleano: Boolean = true

// Tipos compostos
val lista: List<Int> = listOf(1, 2, 3)
val array: IntArray = intArrayOf(1, 2, 3)`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'Int: números inteiros',
      'Double: números decimais',
      'String: texto',
      'Boolean: verdadeiro ou falso',
      'List: coleção dinâmica',
    ],
  },

  // Conteúdos de Estruturas de Controle
  {
    id: 'if-else-content',
    moduleId: 'control-flow',
    topicId: 'if-else',
    title: 'Condicionais (if/else)',
    description: 'Tome decisões no seu código',
    explanation:
      'As estruturas condicionais if/else permitem que seu programa execute diferentes ações baseado em condições. Se a condição for verdadeira, um bloco de código é executado; se for falsa, outro bloco pode ser executado. Em Kotlin, if também pode retornar um valor, funcionando como uma expressão.',
    codeExample: `// if/else simples
val idade = 18
if (idade >= 18) {
    println("Maior de idade")
} else {
    println("Menor de idade")
}

// if como expressão
val status = if (idade >= 18) "Adulto" else "Menor"`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'if executa se condição for verdadeira',
      'else executa se for falsa',
      'if pode retornar um valor',
      'Use operadores de comparação: ==, !=, <, >, <=, >=',
    ],
  },

  {
    id: 'loops-content',
    moduleId: 'control-flow',
    topicId: 'loops',
    title: 'Loops (Repetições)',
    description: 'Repita ações de forma eficiente',
    explanation:
      'Loops permitem executar um bloco de código várias vezes. O loop for é ideal para iterar sobre coleções, enquanto while é útil quando você não sabe quantas vezes precisa repetir. O loop do-while sempre executa pelo menos uma vez.',
    codeExample: `// Loop for
for (i in 1..5) {
    println("Contagem: $i")
}

// Loop while
var contador = 0
while (contador < 5) {
    println("Contador: $contador")
    contador++
}

// Loop for em lista
val nomes = listOf("Ana", "Bruno", "Carla")
for (nome in nomes) {
    println(nome)
}`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'for: itera sobre coleções',
      'while: repete enquanto condição for verdadeira',
      'Range (1..5): cria sequências',
      'break: sai do loop',
      'continue: pula iteração',
    ],
  },

  // Conteúdos de Funções
  {
    id: 'function-basics-content',
    moduleId: 'functions',
    topicId: 'function-basics',
    title: 'Básicos de Funções',
    description: 'Crie código reutilizável',
    explanation:
      'Uma função é um bloco de código que realiza uma tarefa específica. Funções tornam o código mais organizado, reutilizável e fácil de manter. Em Kotlin, você define funções com a palavra-chave "fun" seguida do nome, parâmetros e tipo de retorno.',
    codeExample: `// Função simples
fun saudar() {
    println("Olá!")
}

// Função com parâmetro
fun saudar(nome: String) {
    println("Olá, $nome!")
}

// Função com retorno
fun somar(a: Int, b: Int): Int {
    return a + b
}

// Chamando funções
saudar()
saudar("João")
val resultado = somar(2, 3)`,
    codeLanguage: 'kotlin',
    keyPoints: [
      'fun: palavra-chave para definir funções',
      'Parâmetros: dados que a função recebe',
      'Tipo de retorno: tipo do valor que retorna',
      'Sem retorno: deixe em branco ou use Unit',
    ],
  },
];

// Dados sobre o aplicativo
export const aboutData = {
  appName: 'LTP-edu',
  version: '1.0.0',
  description:
    'LTP-edu é uma plataforma educacional interativa para iniciantes em programação. O aplicativo oferece módulos estruturados de aprendizado com exemplos práticos de código em Kotlin.',
  creators: [
    {
      name: 'Instituto Federal do Tocantins (IFTO)',
      role: 'Instituição Educacional',
    },
    {
      name: 'Equipe de Desenvolvimento',
      role: 'Desenvolvimento e Design',
    },
  ],
  features: [
    'Módulos estruturados e progressivos',
    'Exemplos de código interativos',
    'Interface amigável para iniciantes',
    'Disponível em Android, iOS e Web',
    'Sem publicidade ou distrações',
  ],
  contact: {
    email: 'suporte@ltp-edu.com',
    website: 'https://ltp-edu.com',
  },
};
