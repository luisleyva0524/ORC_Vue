const sendSignUp = document.getElementById('data-form-orders');

sendSignUp.addEventListener('submit',(e) =>{ 
    e.preventDefault();
    const idOrden = document.getElementById('idOrden').value;
    const cliente = document.getElementById('cliente').value;
    const mesero = document.getElementById('mesero').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const total = document.getElementById('total').value;
    const estado = document.getElementById('estado').value;

    if(idOrden == '' || cliente == '' || mesero == '' || cantidad == '' || fecha == '' || hora == '' || total == '' || estado == ''){
        alert('Todos los campos son obligatorios');
        window.location.href = '../public/order_register.html';
    } else {

        const dataJson = {
            idOrden: idOrden,
            cliente: cliente,
            mesero: mesero,
            cantidad: cantidad,
            fecha: fecha,
            hora: hora,
            total: total,
            estado: estado
        };
    
        const convertObject = JSON.stringify(dataJson);
        fetch('http://localhost:3000/orc/v1/orders/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: convertObject,
        })
            .then(response => response.json())
            .then((data) =>{
                if(data != null){
                    window.location.href = '../public/orders.html';
                }
            })
            .catch(error => console.log(error));
    }
});
