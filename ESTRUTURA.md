# Estrutura de Componentes e Telas do LTP-edu

## 📁 Estrutura de Pastas

```
src/
├── app/                    # Telas e navegação (expo-router)
│   ├── _layout.tsx        # Layout raiz com Stack navigation
│   ├── index.tsx          # Tela Home (lista de módulos)
│   ├── about.tsx          # Tela Sobre
│   ├── modules/
│   │   └── [moduleId].tsx # Tela de módulo (lista de tópicos)
│   └── content/
│       └── [contentId].tsx # Tela de conteúdo (explicação + código)
│
├── components/             # Componentes reutilizáveis
│   ├── AppWrapper.tsx      # Provider do GlueStack
│   ├── Header.tsx          # Cabeçalho padrão
│   ├── Card.tsx            # Card com suporte a variantes
│   ├── CodeBlock.tsx       # Bloco de código com sintaxe
│   └── Button.tsx          # Botão customizado
│
├── config/
│   └── theme.ts            # Sistema de design (cores, tipografia, etc)
│
├── constants/
│   ├── theme.ts            # Temas e estilos (existente)
│   └── data.ts             # Dados fictícios (módulos, tópicos, conteúdo)
│
├── hooks/                  # Custom hooks (existentes)
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme.ts
│
└── global.ts               # Configurações globais

```

## 🎨 Sistema de Design

### Paleta de Cores

**Primária (Azul - Confiança e Aprendizado):**
- `primary.600`: `#208AEF` - Cor principal
- `primary.50`: `#EFF6FE` - Fundo claro

**Secundária (Verde - Sucesso e Progresso):**
- `secondary.600`: `#3DAE7F` - Cor secundária
- `secondary.50`: `#F0F9F5` - Fundo claro

**Feedback:**
- Success: `#10B981` (Verde)
- Warning: `#F59E0B` (Amarelo)
- Error: `#EF4444` (Vermelho)
- Info: `#3B82F6` (Azul)

**Neutras:**
- White: `#FFFFFF`
- Black: `#000000`
- Grays: `50` a `900`

### Tipografia

**Fontes:**
- Primária: Segoe UI, -apple-system, BlinkMacSystemFont
- Secundária: Inter
- Monoespacial: Fira Code (para código)

**Hierarquia:**
- H1: 36px, 700
- H2: 30px, 700
- H3: 24px, 600
- H4: 20px, 600
- Body: 16px, 400
- Code: 13px, 500 (monoespacial)

### Espaçamento

```
xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px
2xl: 48px, 3xl: 64px
```

### Componentes

1. **Header**: Cabeçalho com título e subtítulo
2. **Card**: Container para módulos/tópicos com variantes (default, elevated, outlined)
3. **CodeBlock**: Exibe código com destaque de linguagem
4. **Button**: Botão com variantes e tamanhos
5. **AppWrapper**: Provider do GlueStack

## 📱 Telas

### 1. Home (index.tsx)
- Título e subtítulo do app
- Card de boas-vindas
- Lista de módulos com ícones
- FAB (Floating Action Button) para "Sobre"

### 2. Módulos (modules/[moduleId].tsx)
- Cabeçalho com informações do módulo
- Badge com contagem de tópicos
- Lista de tópicos com números sequenciais
- Navegação para tela de conteúdo

### 3. Conteúdo (content/[contentId].tsx)
- Explicação detalhada do conceito
- Pontos-chave em lista
- Bloco de código com exemplo prático
- Dicas de próximos passos

### 4. Sobre (about.tsx)
- Informações do app e versão
- Descrição e recursos
- Dados dos criadores
- Links de contato (email, website)
- Modal para fácil fechamento

## 🔀 Navegação (Expo Router)

```
/                          → Home (lista de módulos)
/modules/[moduleId]        → Tela de módulo (lista de tópicos)
/content/[contentId]       → Tela de conteúdo (explicação + código)
/about                     → Tela Sobre (modal)
```

## 📊 Dados Estruturados

### Módulos
```typescript
{
  id: string
  title: string
  description: string
  icon: string
  color: string
  topics: Topic[]
}
```

### Tópicos
```typescript
{
  id: string
  title: string
  description: string
}
```

### Conteúdo
```typescript
{
  id: string
  moduleId: string
  topicId: string
  title: string
  description: string
  explanation: string
  codeExample: string
  codeLanguage: string
  keyPoints: string[]
}
```

## ✨ Recursos Implementados

- ✅ Sistema de tema customizado
- ✅ Componentes reutilizáveis
- ✅ 4 telas principais
- ✅ Navegação dinâmica com expo-router
- ✅ Dados estruturados (4 módulos, 13 tópicos)
- ✅ Exemplos de código para 6 tópicos
- ✅ Interface amigável para iniciantes
- ✅ Ícones com @expo/vector-icons
- ✅ Cards com variantes (default, elevated, outlined)
- ✅ Blocos de código com destaque de linguagem

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar o app
npm start

# Ou para plataformas específicas
npm run android
npm run ios
npm run web
```

## 📝 Próximas Melhorias

- [ ] Adicionar mais módulos e conteúdos
- [ ] Implementar persistência de progresso
- [ ] Adicionar busca de tópicos
- [ ] Implementar quiz/exercícios
- [ ] Modo escuro
- [ ] Animações de transição
- [ ] Autenticação de usuários
- [ ] Sistema de badges/achievements
