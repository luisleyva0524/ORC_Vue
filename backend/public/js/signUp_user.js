const sendSignUp = document.getElementById('data-form-register');

sendSignUp.addEventListener('submit',(e) => { 
    e.preventDefault();
    const idUsuario = document.getElementById('idUsuario').value;
    const rol = document.getElementById('rol').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('password').value;

    const dataJson = {
        idUsuario: idUsuario,
        rol: rol,
        correo: correo,
        contraseña: contraseña
    };

    const convertObject = JSON.stringify(dataJson);
    console.log(convertObject);
    fetch('http://localhost:3000/orc/v1/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: convertObject
    })
        .then(response => response.json())
        .then((data) =>{
            if(data != null){
                window.location.href = '../public/users.html';
            }
        })
        .catch(error => console.log(error));    
});

