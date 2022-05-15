function getAllOrders() {
    let url = 'http://localhost:3000/orc/v1/orders/all';
    fetch(url)
        .then(response => response.json())
        .then(data => viewData(data))
        .catch( error => console.log(error));
    
    const viewData = (data) => {
        console.log(data);
        let body = '';
        for (var i = 0; i < data.length; i++) {
            body += `<tr>    
            <td>${data[i].idOrden}</td>
            <td>${data[i].cliente}</td>
            <td>${data[i].mesero}</td>
            <td>${data[i].cantidad}</td>
            <td>${data[i].fecha}</td>
            <td>${data[i].hora}</td>
            <td>$ ${data[i].total}</td>
            <td>${data[i].estado}</td>
            </tr>`;
        }
        document.getElementById('data').innerHTML = body;
    };
}

const click = document.getElementById('btnCagar');
click.onclick(()=>{
    getAllOrders();
});