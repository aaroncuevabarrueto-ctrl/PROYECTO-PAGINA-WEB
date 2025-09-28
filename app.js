// ARRAY para almacenar productos en el carrito
let carrito = [];
let total = 0;

// FUNCIÓN para agregar productos al carrito
function agregarAlCarrito(idProducto) {
    // Buscar el producto por su ID
    const productoElement = document.getElementById(`producto-${idProducto}`);
    
    // Extraer información del producto
    const nombre = productoElement.querySelector('h3').textContent;
    const precioTexto = productoElement.querySelector('.precio').textContent;
    const precio = parseInt(precioTexto.replace('$', '').replace('.', ''));
    
    // Agregar al array carrito
    carrito.push({
        id: idProducto,
        nombre: nombre,
        precio: precio
    });
    
    // Actualizar la visualización
    actualizarCarrito();
    
    // Mostrar mensaje de confirmación
    alert(`✅ ${nombre} agregado al carrito!`);
}

// FUNCIÓN para actualizar el carrito en pantalla
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    
    // Limpiar lista anterior
    listaCarrito.innerHTML = '';
    total = 0;
    
    // Recorrer cada producto en el carrito
    carrito.forEach(producto => {
        // Crear elemento de lista
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio.toLocaleString()}`;
        listaCarrito.appendChild(item);
        
        // Sumar al total
        total += producto.precio;
    });
    
    // Actualizar total
    totalElement.textContent = total.toLocaleString();
}

// FUNCIÓN para vaciar el carrito (la agregaremos después)
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    alert('🛒 Carrito vaciado');
}