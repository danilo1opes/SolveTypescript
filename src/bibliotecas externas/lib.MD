# Integração do Player Vimeo

## Estrutura HTML

```html
<iframe
  id="vimeo"
  src="https://player.vimeo.com/video/76979871?h=8272103f6e"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script src="./plugins/jquery-3.6.1.min.js"></script>
<script src="./plugins/lodash.min.js"></script>
<script type="module" src="./dist/script.js"></script>
```

## Dependências TypeScript

```bash
# Comandos do terminal para dependências de desenvolvimento
npm install --save-dev @types/jquery
npm install --save-dev @types/lodash
```

## Código JavaScript/TypeScript

```typescript
// Uso do jQuery
const body = $('body');
body.addClass('ativo');

// Uso do Lodash
_.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]);

// API do Player Vimeo
declare const Vimeo: any;
const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);
```

## Componentes Principais

### Player Vimeo

- **ID do Vídeo**: `76979871`
- **Hash**: `8272103f6e`
- **Dimensões**: 640x360
- **Recursos**: Tela cheia habilitada, autoplay e mídia criptografada permitidos

### Dependências

- **API do Player Vimeo**: API oficial JavaScript do player Vimeo
- **jQuery 3.6.1**: Biblioteca para manipulação do DOM
- **Lodash**: Biblioteca utilitária para JavaScript
- **Script Personalizado**: Script baseado em módulos em `./dist/script.js`

### Funcionalidades

- Adiciona a classe 'ativo' ao elemento body
- Usa o método intersection do Lodash em dois arrays
- Inicializa uma instância do player Vimeo para controle via API
