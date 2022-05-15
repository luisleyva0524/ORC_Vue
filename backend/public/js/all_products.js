function getAllProducts() {
    let url = 'http://localhost:3000/orc/v1/products/all';
    fetch(url)
        .then(response => response.json())
        .then(data => viewData(data))
        .catch( error => console.log(error));
    
    const viewData = (data) => {
        console.log(data);
        let body = '';
        for (var i = 0; i < data.length; i++) {
            body += `<tr>    
            <td>${data[i].idProducto}</td>
            <td>${data[i].nombre}</td>
            <td>${data[i].categoria}</td>
            <td>$ ${data[i].precio}</td>
            <td><button onclick="">Delete</button></td>
            </tr>`;
        }
        document.getElementById('data').innerHTML = body;
    };
}

const click = document.getElementById('btnCagar');
click.onclick(()=>{
    getAllProducts();
});