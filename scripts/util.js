export function calcularPedidos(entrada) {
    const pedidos = entrada.split(';');
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
    return clientes;
}