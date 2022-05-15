const sendWaiters = document.getElementById('data-form-waiters');

sendWaiters.addEventListener('submit',(e) =>{
    e.preventDefault();

    const idMesero = document.getElementById('idMesero').value;
    const turno = document.getElementById('turno').value;

    if(idMesero == '' || turno == ''){
        alert('Todos los campos son obligatorios');
        window.location.href = '../public/waiters.html';
    }

    const dataJson = {
        idMesero: idMesero,
        turno: turno
    };

    const convertObject = JSON.stringify(dataJson);
    fetch('http://localhost:3000/orc/v1/waiters/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: convertObject,
    })
        .then(response => response.json())
        .then((data) =>{
            if(data != null){
                window.location.href = '../public/waiters.html';
            }
        })
        .catch(error => console.log(error));
});