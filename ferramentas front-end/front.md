# Guia Vite com TypeScript

## O que é Vite

Vite é uma ferramenta de automação Front End. Com ela podemos gerar bundles, iniciar um live server, otimizar o código para produção e mais.

## Criando um Projeto

```bash
npm create vite@latest
# Selecione: vanilla / typescript
```

## Comandos Básicos

```bash
# Dentro da pasta do projeto
npm install
npm run dev
npm run build
```

## Configurações TypeScript

Você pode mudar as configurações do TypeScript no arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

## Bibliotecas Externas

Instale bibliotecas externas diretamente via `npm install`. Se a definição de tipo não for instalada junto com a mesma, instale ela para poder utilizar a biblioteca.

### Instalação de Bibliotecas

```bash
# Biblioteca que precisa de tipos separados
npm install lodash
npm install --save-dev @types/lodash

# Biblioteca que já vem com os tipos
npm install clipboard
```

### Uso das Bibliotecas

```typescript
// Importando e usando Lodash
import _ from 'lodash';
_.difference([2, 1], [2, 3]);

// Importando e usando Clipboard.js
import ClipboardJS from 'clipboard';
const button = new ClipboardJS('button');

function handleSuccess(event: ClipboardJS.Event) {
  console.log('Texto copiado.');
  console.log(event.action);
}

button.on('success', handleSuccess);
```

## Resumo dos Recursos

- **Live Server**: Desenvolvimento com hot reload
- **Bundle Generation**: Geração otimizada de arquivos para produção  
- **TypeScript Support**: Suporte nativo ao TypeScript
- **External Libraries**: Fácil integração com bibliotecas NPM
- **Type Definitions**: Suporte completo a definições de tipos