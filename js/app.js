const carrito = document.querySelector('.Header__Car');
const cartWindow = document.querySelector('.ContainerCarrito')
const cartItems = document.querySelector('.Cart-Items')
const productsBtn = document.querySelector('.Products__Button')
const bigContainer = document.querySelector('.bigcontainer')
const vaciarBoton = document.querySelector('.CarritoBoton')

carrito.addEventListener('mouseover', () => {
    cartWindow.classList.toggle('show');
})

// carrito.addEventListener('mouseout', () => {
//     cartWindow.classList.toggle('show')
// })


bigContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('Products__Button')) {
        const productos = e.target.parentElement.parentElement;

        const productoElegido = {
            imagen: productos.querySelector('.Products__Image').src,
            nombre: productos.querySelector('.Products__Class').textContent,

            precio: productos.querySelector('.Price__Sale').textContent,
        }





        const imagen = productoElegido.imagen;
        const nombre = productoElegido.nombre;
        const precio = productoElegido.precio;

        const ul = document.createElement('ul');
        ul.innerHTML = `
        <ul class="CarroUl">
            <li class="CarroLi"><img class="Smaller" src="${imagen}" alt=""></li>
            <li class="CarroLi">${nombre}</li>
            <li class="CarroLi">1</li>
            <li class="CarroLi">${precio}</li>
            <li class="CarroLi"></li>
        </ul>`

        cartItems.appendChild(ul)

    }


})


vaciarBoton.addEventListener('click', () => {
    cartItems.innerHTML = ``;
})