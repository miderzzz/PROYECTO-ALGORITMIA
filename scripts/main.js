import { calcularPedidos } from './util.js';


const btnRegistrar = document.getElementById('registrar');
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');
resultado.readOnly = true;


btnRegistrar.addEventListener('click', mostrarResultado);

function mostrarResultado() {
    const resultadoCalculo = calcularPedidos(entrada.value);
    const listaClientes = [];
    let res = "";
    for (const nombre in resultadoCalculo) {
        const cliente = resultadoCalculo[nombre];
        cliente.nombre = nombre;
        listaClientes.push(cliente);
    }

listaClientes.sort((a, b) =>{ 
    if (b.totalGastado !== a.totalGastado) return b.totalGastado - a.totalGastado;
    if (b.categoriaFavorita !== a.categoriaFavorita) return b.categoriaFavorita.localeCompare(a.categoriaFavorita)
    return a.nombre.localeCompare(b.nombre);
});

for (let i = 0; i < listaClientes.length; i++) {
    const cliente = listaClientes[i];
    const categorias = cliente.categorias.map(c => c.nombre + ": $" + c.gasto.toFixed(2)).join(', ');
    res += cliente.nombre + " - Total Gastado: $" + cliente.totalGastado.toFixed(2) + " - Categoría favorita: " + cliente.categoriaFavorita + "\n";
}
    resultado.value = res;
}