export function calcularPedidos(entrada) {
    const separar = entrada.split("--");
    const pedidos = separar[1].split(';');
    const clientes = {};
    for (let i = 0; i < pedidos.length; i++) {
        const pedido = pedidos[i].split(" ");
        const cliente = pedido[0];
        const producto = pedido[1];
        const categoria = pedido[2];
        const precio = parseFloat(pedido[3]);
        const cantidad = parseInt(pedido[4]);
        const timestamp = parseFloat(pedido[5]);

        if (!clientes[cliente]) {
            clientes[cliente] = {
                totalGastado: 0,
                categorias: []
            };
        }

        clientes[cliente].totalGastado += precio * cantidad;

        const catExistente = clientes[cliente].categorias.find(c => c.nombre === categoria);

        if (catExistente) {
            catExistente.gasto += precio * cantidad;
        } else {
            clientes[cliente].categorias.push({ nombre: categoria, gasto: precio * cantidad });
        }
    }

for (const cliente in clientes) {
    let max = clientes[cliente].categorias[0];
    for (let i = 1; i < clientes[cliente].categorias.length; i++) {
        if (clientes[cliente].categorias[i].gasto > max.gasto) {
            max = clientes[cliente].categorias[i];
        }
    }
    clientes[cliente].categoriaFavorita = max.nombre;
}

    return clientes;
}