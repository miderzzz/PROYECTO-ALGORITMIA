import { calcularPedidos } from './util.js';

const btnRegistrar = document.getElementById('registrar');
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');

btnRegistrar.addEventListener('click', mostrarResultado);

function mostrarResultado() {
    const resultadoCalculo = calcularPedidos(entrada.value);
    let res = "";
    for (const nombre in resultadoCalculo) {
        const cliente = resultadoCalculo[nombre];
        const categorias = cliente.categorias
            .map(c => c.nombre + ": $" + c.gasto.toFixed(2))
            .join(', ');
        res += nombre + " - Total gastado: $" + cliente.totalGastado.toFixed(2) + " - Categorías: " + categorias + "\n";
    }
    resultado.value = res;
}