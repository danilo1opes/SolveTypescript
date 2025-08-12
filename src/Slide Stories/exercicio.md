# Slide Stories - TypeScript Exercicio

Um projeto de slideshow interativo desenvolvido em TypeScript que simula stories de redes sociais, com suporte a imagens e vídeos.

## 📋 Descrição

Este exercicio implementa um sistema de slides estilo "stories" com funcionalidades avançadas como:

- Navegação automática entre slides
- Controles de pausa e continuação
- Barra de progresso animada
- Suporte a imagens e vídeos
- Persistência do slide ativo no localStorage
- Interface responsiva e intuitiva

## 🚀 Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e animações
- **JavaScript ES6+** - Funcionalidades do DOM

#### Construtor

```typescript
constructor(
  container: Element,     // Container principal
  slides: Element[],      // Array de elementos (img/video)
  controls: Element,      // Container dos controles
  time: number = 5000     // Tempo por slide (padrão: 5s)
)
```

#### Métodos Principais

- **`show(index: number)`** - Exibe um slide específico
- **`next()`** - Avança para o próximo slide
- **`prev()`** - Volta para o slide anterior
- **`pause()`** - Pausa a reprodução
- **`continue()`** - Continua a reprodução

#### Funcionalidades Especiais

- **Vídeos automáticos**: Detecta vídeos e ajusta o tempo de exibição
- **Persistência**: Salva o slide atual no localStorage
- **Controles visuais**: Barra de progresso com animação
- **Responsividade**: Interface adaptável a diferentes telas

#### Eventos de Mouse/Touch

- **Click esquerdo**: Slide anterior
- **Click direito**: Próximo slide
- **Pressionar**: Pausar
- **Soltar**: Continuar

## 📄 Licença

Este projeto é livre para uso educacional e desenvolvimento pessoal.

**desenvolvido com ❤️ por danilo1opes**
