function getAllWaiters() {
    let url = 'http://localhost:3000/orc/v1/waiters/all';
    fetch(url)
        .then(response => response.json())
        .then(data => viewData(data))
        .catch( error => console.log(error));
    
    const viewData = (data) => {
        console.log(data);
        let body = '';
        for (var i = 0; i < data.length; i++) {
            body += `<tr>    
            <td>${data[i].idMesero}</td>
            <td>${data[i].turno}</td>
            <td><button onclick="">Delete</button></td>
            </tr>`;
        }
        document.getElementById('data').innerHTML = body;
    };
}

const click = document.getElementById('btnCagar');
click.onclick(()=>{
    getAllWaiters();
});