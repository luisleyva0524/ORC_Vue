const registerProduct = document.getElementById('data-form-products');

registerProduct.addEventListener('submit', (e) =>{
    e.preventDefault();

    const idProducto = document.getElementById('idProducto').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;


    const dataJson = {
        idProducto: idProducto,
        nombre: nombre,
        categoria: categoria,
        precio: precio
    };

    const convertObject = JSON.stringify(dataJson);
    console.log(convertObject);
    fetch('http://localhost:3000/orc/v1/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: convertObject,
    })
        .then(response => response.json())
        .then((data) =>{
            if(data != null){
                window.location.href = '../public/products.html';
            }
        })
        .catch(error => console.log(error));

});