let url = 'api/loginReciever.php'
function getRolePassword() {
    let role = document.getElementById('role').value;
    let password = document.getElementById('password').value;
    verifyData(role, password)
}

async function verifyData(role, password) {
    if (role != '' && password != '') {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    role: role,
                    password: password
                })
            })

        } catch (error) {
            console.log(error)
        }
    }
}