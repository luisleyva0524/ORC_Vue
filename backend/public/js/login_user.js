
const sendLogin= document.getElementById('form_login');

sendLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('password').value;

    let data_login = {
        correo: correo,
        contraseña: contraseña
    };

    const dataJson = JSON.stringify(data_login);
    fetch('http://localhost:3000/orc/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: dataJson
    })
        .then(res => res.json())
        .then(() => {
            window.location.href = '../public/users.html';
        })
        .catch(err => console.log(err));
});
    


