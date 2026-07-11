# 🎓 LTP-edu - Guia de Estilo e Design

## Visão Geral

O LTP-edu é uma plataforma educacional mobile para iniciantes em programação. Este guia define os padrões visuais, componentes e prática de design da aplicação.

## 📋 Índice

1. [Filosofia de Design](#filosofia-de-design)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Componentes](#componentes)
5. [Espaçamento e Layout](#espaçamento-e-layout)
6. [Ícones](#ícones)
7. [Padrões de Interface](#padrões-de-interface)

---

## 🎨 Filosofia de Design

### Princípios

1. **Simplicidade**: Interface clara e sem distrações visuais desnecessárias
2. **Clareza**: Tipografia legível e hierarquia visual bem definida
3. **Acessibilidade**: Contraste adequado e tamanhos de toque adequados
4. **Consistência**: Padrões visuais e comportamentais reutilizáveis
5. **Progressão**: Estrutura que guia o aprendizado do iniciante

### Público-Alvo

- **Iniciantes em programação** (sem experiência prévia)
- **Estudantes** de instituições educacionais
- **Autodidata** buscando aprender independentemente
- **Idade**: 13+

### Considerações

- Texto grande e legível (mínimo 16px para corpo de texto)
- Ícones claros e intuitivos
- Não assustar com muita informação
- Foco em aprendizado prático

---

## 🎨 Paleta de Cores

### Cores Primárias

**Azul** - Transmite confiança, segurança e aprendizado

```
primary-50:   #EFF6FE  (Fundo claro)
primary-100:  #E0ECFD
primary-200:  #C1D9FB
primary-300:  #A2C7F9
primary-400:  #83B4F7
primary-500:  #5A99F5
primary-600:  #208AEF  (Cor primária - botões, ênfase)
primary-700:  #1A6BB9
primary-800:  #144C83
primary-900:  #0E2D4D
```

**Uso:** Botões primários, cabeçalhos, ícones de ênfase, links

---

### Cores Secundárias

**Verde** - Indica progresso, sucesso, conquistas

```
secondary-50:   #F0F9F5  (Fundo claro)
secondary-100:  #E0F3EB
secondary-200:  #C1E7D7
secondary-300:  #A2DCC3
secondary-400:  #83D0AF
secondary-500:  #5AC198
secondary-600:  #3DAE7F  (Cor secundária - ações alternativas)
secondary-700:  #2E8A64
secondary-800:  #1E5C45
secondary-900:  #0E2E26
```

**Uso:** Botões secundários, badges de sucesso, FABs

---

### Cores de Feedback

Feedback imediato sobre ações

```
Success (Verde):    #10B981  - Conclusão, validação
Warning (Amarelo):  #F59E0B  - Atenção, cuidado
Error (Vermelho):   #EF4444  - Erro, validação falhou
Info (Azul):        #3B82F6  - Informação, dica
```

---

### Cores Neutras

Para backgrounds, textos e estrutura

```
Branco:       #FFFFFF   (Backgrounds principais)
Preto:        #000000   (Textos muito escuros)
Surface:      #F9FAFB   (Backgrounds secundários)
Border:       #E5E7EB   (Divisores, linhas)

Textos:
  Primário:   #111827   (Títulos, textos principais)
  Secundário: #4B5563   (Descrições, textos auxiliares)
  Muted:      #9CA3AF   (Desabilitado, informação tertária)
  Inverso:    #FFFFFF   (Sobre backgrounds escuros)

Grays:
  50:  #F9FAFB  90:  #F3F4F6  100: #E5E7EB
  200: #D1D5DB  300: #9CA3AF  400: #6B7280
  500: #4B5563  600: #374151  700: #1F2937  800: #111827
```

---

## 📝 Tipografia

### Fontes

```typescript
// Primária - Títulos e destaque
fontFamily: "Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif"

// Secundária - Corpo de texto
fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"

// Monoespacial - Código
fontFamily: "Fira Code, Courier New, monospace"
```

### Tamanhos e Pesos

```
H1 - Títulos Principais
  Tamanho:    36px
  Peso:       700 (Bold)
  Linha:      1.2
  Espaço:     -0.5px
  Uso:        Títulos de páginas principais

H2 - Subtítulos
  Tamanho:    30px
  Peso:       700 (Bold)
  Linha:      1.3
  Espaço:     -0.3px
  Uso:        Seções principais

H3 - Cabeçalhos de Seção
  Tamanho:    24px
  Peso:       600 (Semibold)
  Linha:      1.4
  Uso:        Títulos de módulos, cards

H4 - Subseções
  Tamanho:    20px
  Peso:       600 (Semibold)
  Linha:      1.4
  Uso:        Subtítulos, cabeçalhos de lista

Body - Texto Principal
  Tamanho:    16px
  Peso:       400 (Normal)
  Linha:      1.5
  Uso:        Explicações, descrições

Body Small
  Tamanho:    14px
  Peso:       400 (Normal)
  Linha:      1.5
  Uso:        Texto auxiliar, legenda

Code
  Tamanho:    13px
  Peso:       500 (Medium)
  Linha:      1.6
  Família:    Monoespacial
  Uso:        Blocos de código
```

### Hierarquia em Exemplos

```
┌─────────────────────────────────┐
│  Introdução ao Kotlin     (H2)   │  ← 30px, Bold
│  Aprenda os conceitos     (Body) │  ← 16px, Normal
├─────────────────────────────────┤
│ O que é Kotlin?           (H3)   │  ← 24px, Semibold
│ Uma linguagem moderna...  (Body) │  ← 16px, Normal
│                                   │
│ fun main() { }            (Code) │  ← 13px, Monoespacial
└─────────────────────────────────┘
```

---

## 🧩 Componentes

### 1. Header

Cabeçalho fixo no topo de cada tela

```typescript
<Header
  title="Título da Página"
  subtitle="Descrição opcional"
/>
```

**Especificações:**
- Padding: 24px horizontal, 16px vertical
- Border-bottom: 1px, cor `border`
- Title: H2, cor `text.primary`
- Subtitle: Body, cor `text.secondary`

---

### 2. Card

Container reutilizável para módulos, tópicos e conteúdo

```typescript
<Card
  title="Título"
  description="Descrição"
  icon={<Icon />}
  onPress={() => {}}
  variant="elevated"  // ou "default", "outlined"
/>
```

**Variantes:**

| Variante | Uso | Estilo |
|----------|-----|--------|
| `default` | Cards padrão | Borda 1px, sem sombra |
| `elevated` | Destaque, interativo | Sombra 8px |
| `outlined` | Seleção, primário | Borda 2px primária |

**Especificações:**
- Padding: 24px
- Border-radius: 12px
- Espaçamento entre cards: 16px

---

### 3. Button

Botão para ações principais

```typescript
<Button
  label="Enviar"
  onPress={() => {}}
  variant="primary"   // ou "secondary", "outline"
  size="md"          // ou "sm", "lg"
  disabled={false}
/>
```

**Variantes:**

| Variante | Cor | Uso |
|----------|-----|-----|
| `primary` | Azul | Ações principais |
| `secondary` | Verde | Ações alternativas |
| `outline` | Azul (contorno) | Ações terciárias |

**Tamanhos:**

| Tamanho | Padding | Uso |
|---------|---------|-----|
| `sm` | 8px v, 16px h | Botões pequenos, inline |
| `md` | 16px v, 24px h | Padrão em cards |
| `lg` | 24px v, 32px h | CTAs principais, full-width |

---

### 4. CodeBlock

Exibe blocos de código com destaque de linguagem

```typescript
<CodeBlock
  code="fun main() { println(\"Olá\") }"
  language="kotlin"
  title="Função Principal"
/>
```

**Especificações:**
- Fundo: `neutral-900` (#111827)
- Texto: `neutral-100` (#F3F4F6)
- Monoespacial: 13px, 500
- Linha: 1.6
- Padding: 16px

---

### 5. AppWrapper

Provider do GlueStack e configurações globais

```typescript
<AppWrapper>
  <YourApp />
</AppWrapper>
```

---

## 📏 Espaçamento e Layout

### Escala de Espaçamento

```
xs:   4px   (micro-espaçamento)
sm:   8px   (pequeno)
md:   16px  (médio - padrão)
lg:   24px  (grande)
xl:   32px  (extra grande)
2xl:  48px  (duplo)
3xl:  64px  (triplo)
```

### Layout Padrão

```
Topo:          16px (safe area)
Lateral:       24px (padding)
Seções:        24px (entre seções)
Cards:         16px (entre cards)
Interno:       16px (padding dentro de cards)
```

### Responsividade

```
Breakpoints:
  xs:   320px  (extra pequeno)
  sm:   480px  (pequeno)
  md:   768px  (médio)
  lg:   1024px (grande)
  xl:   1280px (extra grande)
```

---

## 🎯 Ícones

Usamos **@expo/vector-icons** (MaterialIcons)

### Padrões

- **Tamanho**: 24px (padrão), 32px (ênfase), 18px (pequeno)
- **Cores**: Respeitar paleta do tema
- **Estilo**: Preenchido ou contorno, consistente

### Exemplos

```typescript
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/config/theme';

// Ícone primário
<MaterialIcons
  name="code"
  size={24}
  color={theme.colors.primary[600]}
/>

// Ícone de sucesso
<MaterialIcons
  name="check-circle"
  size={24}
  color={theme.colors.success}
/>
```

---

## 🎪 Padrões de Interface

### Navegação

```
Home
├─ Módulos (lista principal)
├─ módulos/[id]
│  └─ Tópicos
│     └─ content/[id]
│        └─ Conteúdo com código
└─ About (modal)
```

### Cards de Módulos

- Ícone colorido à esquerda
- Título em H3
- Descrição em Body small
- Variante: `elevated`
- Clicável

### Estrutura de Tela de Conteúdo

```
┌─────────────────────────┐
│ Header com título       │
├─────────────────────────┤
│                         │
│ Seção: Conceito         │ ← H3
│ Explicação longa...     │ ← Body
│                         │
│ Seção: Pontos Chave     │ ← H3
│ • Ponto 1               │
│ • Ponto 2               │
│                         │
│ Seção: Exemplo Prático  │ ← H3
│ [CodeBlock]             │
│                         │
│ Seção: Próximos Passos  │ ← H3
│ Dica de prática...      │
│                         │
└─────────────────────────┘
```

### Densidade de Conteúdo

- **Denso**: Para listas (módulos, tópicos)
- **Espaçado**: Para conteúdo editorial (explicações)
- **Misto**: Para cards com múltiplos elementos

---

## ✅ Checklist de Implementação

Ao adicionar novos componentes/telas:

- [ ] Usar cores da paleta definida
- [ ] Respeitar hierarquia tipográfica
- [ ] Aplicar espaçamento correto
- [ ] Usar componentes reutilizáveis
- [ ] Garantir contraste adequado (WCAG AA)
- [ ] Testar em múltiplos tamanhos de tela
- [ ] Documentar novos componentes
- [ ] Revisar com padrões de UX

---

## 📚 Recursos Adicionais

- **Documentação Gluestack**: https://gluestack.io/ui/docs
- **Cores em Produção**: Usar `theme.colors.*`
- **Fonts em React Native**: Usar família definida
- **Ícones**: https://icons.expo.fyi/

---

## 📞 Contato

Para questões sobre design, consulte a documentação ou abra uma issue no repositório.

**Última atualização**: 2024  
**Versão**: 1.0
