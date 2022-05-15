function getAllUsers() {
    let url = 'http://localhost:3000/orc/v1/users';
    fetch(url)
        .then(response => response.json())
        .then(data => viewData(data))
        .catch( error => console.log(error));
    
    const viewData = (data) => {
        console.log(data);
        let body = '';
        for (var i = 0; i < data.length; i++) {
            body += `<tr>    
            <td>${data[i].idUsuario}</td>
            <td>${data[i].rol}</td>
            <td>${data[i].correo}</td>
            </tr>`;
        }
        document.getElementById('data').innerHTML = body;
    };
}

const click = document.getElementById('btnCagar');
click.onclick(()=>{
    getAllUsers();
});