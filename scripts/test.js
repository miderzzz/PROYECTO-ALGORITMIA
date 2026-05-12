import { calcularPedidos } from './util.js';
import { readFileSync } from 'fs';

const entrada = readFileSync('./scripts/datos.txt', 'utf-8').trim();
console.time('proceso');
const resultado = calcularPedidos(entrada);
console.timeEnd('proceso');
console.log(resultado);