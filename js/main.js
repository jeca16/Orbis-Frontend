const button = document.getElementById('login');



async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let logado = false

    try {

        if (email === "Fulano.deTown@gmail.com" && senha === "12345") {
            logado = true
            Swal.fire({
                icon: 'success',
                title: 'Login realizado!',
                text: 'Você entrou com sucesso.',timer: 2000, 
                timerProgressBar: true,
                showConfirmButton: false, 
            }).then(() => {
               
                window.location.href = '../html/paginaInicial.html';
            })
            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'E-mail ou senha incorretos.',
                confirmButtonColor: '#d33',
              });
        }
        // const users = await fetch('http://localhost:8080/v1/lanchonete/funcionarios')
        // const listUsers = await users.json()
        // console.log(listUsers)
        // listUsers.nomeFuncionario.forEach((user) => {
        //     if (email === user.emailFuncionario && senha === user.senhaFuncionario) {
        //         logado = true
        //         localStorage.setItem("idusuario", user.id)
        //         window.location.href = './pages/estoque.html'
        //     }
        //     console.log(user.email)
        //     console.log(user.senha)
        //     console.log(user.id)
        // })

        // if (!logado) {
        //     alert('login inválido')
        // }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'erro no servidor :(',
            confirmButtonColor: '#d33'
          });
    }

}

const eyeIcon = document.getElementById('eyeIcon')
let senhaVisivel = false
eyeIcon.addEventListener('click',()=>{
    if(senhaVisivel){
        document.getElementById('senha').setAttribute('type','password')
        eyeIcon.src='../img/eye.png'
        senhaVisivel = false
    } else {
        document.getElementById('senha').setAttribute('type','text')
        eyeIcon.src='../img/view.png'
        senhaVisivel = true
    }
})