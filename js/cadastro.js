const button = document.getElementById('login');


  

async function criarConta() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const Confirmsenha = document.getElementById('senha2').value;

    if (nome == '' || email == '' || senha == '' || Confirmsenha == '') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'por favor preencha os campos corretamente',
            confirmButtonColor: '#d33',
          });

    }else{
        if (Confirmsenha != senha) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Senhas informadas não são iguais',
                confirmButtonColor: '#d33',
              });
        }else{

            // let validaCadastro = '';

            // try {
            //     const novoUsuario = {
            //         nomeFuncionario: nome,
            //         senhaFuncionario: senha,
            //         emailFuncionario: email,
            //     }
            //     let resultAPI = await fetch('http://localhost:8080/v1/lanchonete/funcionario', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(novoUsuario)
            //     })

            //     validaCadastro = await resultAPI.json()
            //     console.log(novoUsuario)

            // } catch (error) {
            //     console.log(error)
            // }

            if (nome === "fulano" && email === "Fulano.deTown@gmail.com" && senha === "12345") {
                Swal.fire({
                    icon: 'success',
                    title: 'cadastro realizado!',
                    text: 'Bem-Vindo(a) ao Orbis',timer: 2000, 
                    timerProgressBar: true,
                    showConfirmButton: false, 
                }).then(() => {
                   
                    window.location.href = '../html/paginaInicial.html';
                })
            } else {
                Swal.fire({
                     icon: 'error',
                     title: 'Erro!',
                     text: 'erro no servidor',
                     confirmButtonColor: '#d33',
                   });
            }

            // if (validaCadastro.status_code == 201) {
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'cadastro realizado!',
            //         text: 'Bem-Vindo(a) ao Orbis',timer: 2000, 
            //         timerProgressBar: true,
            //         showConfirmButton: false, 
            //     }).then(() => {
                   
            //         window.location.href = '../html/paginaInicial.html';
            //     })
            // } else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Erro!',
            //         text: 'erro no servidor',
            //         confirmButtonColor: '#d33',
            //       });
            // }

        }
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

const eyeIcon2 = document.getElementById('eyeIcon2')
let senhaVisivel2 = false
eyeIcon2.addEventListener('click',()=>{
    if(senhaVisivel2){
        document.getElementById('senha2').setAttribute('type','password')
        eyeIcon2.src='../img/eye.png'
        senhaVisivel2 = false
    } else {
        document.getElementById('senha2').setAttribute('type','text')
        eyeIcon2.src='../img/view.png'
        senhaVisivel2 = true
    }
})