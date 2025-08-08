// // terminal
// npm install --save-dev @types/jquery
// npm install --save-dev @types/lodash

const body = $('body');
body.addClass('ativo');

_.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]);

declare const Vimeo: any;
const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);