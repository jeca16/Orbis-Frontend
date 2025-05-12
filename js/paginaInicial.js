let darkModeAtivo = false;

function Exclusao() {
    Swal.fire({
        title: "Você tem certeza?",
        text: "Tem certeza que quer excluir essa tarefa?",
        icon: "warning",
        background: darkModeAtivo ? "#0F1E2B" : "#FFFFFF",
        color: darkModeAtivo ? "#FFFFFF" : "#0F1E2B",
        showCancelButton: true,
        confirmButtonText: "Sim, quero deletar!",
        cancelButtonText: "Não, cancele!",
        confirmButtonColor: "#EBC76A", // amarelo dourado
        cancelButtonColor: "#0F1E2B",  // azul escuro
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deletada!",
                text: "Tarefa deletada com sucesso",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Cancelada",
                text: "Sua tarefa continuará ativa :3",
                icon: "error",
                background: darkModeAtivo ? "#0F1E2B" : "#FFFFFF",
                color: darkModeAtivo ? "#FFFFFF" : "#0F1E2B",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        }
    });
}

let hoje = new Date();

function abrirPopupTarefa() {
    Swal.fire({
        html: `
        <div class="editPopUp">
                <div class="formulario">
                    <div>
                        <label for="">Título da tarefa</label><br>
                        <input type="text" placeholder="Digite o título da tarefa">
                    </div>
                    <div>
                        <label for="">Descrição da tarefa</label><br>
                        <textarea placeholder="Descrição da tarefa"></textarea>
                    </div>

                    <div class="date">
                        <div>
                            <label for="">Início da tarefa</label><br>
                            <input type="text" id="dataInicio" placeholder="Data de início">
                        </div><br>

                        <div>
                            <label for="">Final da tarefa</label><br>
                            <input type="text" id="dataFinal" placeholder="Data final">
                        </div><br>
                    </div>
                    <select id="categoria" class="swal2-select">
                        <option value="saude">💚 Saúde</option>
                        <option value="estudo">📘 Estudo</option>
                        <option value="trabalho">💼 Trabalho</option>
                    </select>

                </div>
            </div>
      `,
        showCancelButton: true,
        confirmButtonText: "Criar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: 'swal2-confirm btn-confirmar',
            cancelButton: 'swal2-cancel btn-cancelar'
        },
        didOpen: () => {
            flatpickr("#dataInicio", {
                dateFormat: "d/m/Y",
                minDate: hoje
            })

            flatpickr("#dataFinal", {
                dateFormat: "d/m/Y",
                minDate: hoje
            });

        },
        customClass: {
            popup: 'editPopUp',
        }
    })
}


document.addEventListener('DOMContentLoaded', function () {
    const checkpoints = document.querySelectorAll('.checkpoint');

    checkpoints.forEach(checkpoint => {
        checkpoint.addEventListener('click', function () {
            const tarefa = this.closest('.tarefa');

            // já concluída? então ignora
            if (tarefa.classList.contains('concluida')) return;

            // marca como concluída
            tarefa.classList.add('concluida');

            // move para o final do container
            const container = document.querySelector('.lista-tarefas');
            container.appendChild(tarefa);
        });
    });
    
});


let hoje2 = new Date();

function editPopupTarefa() {
    Swal.fire({
        html: `
        <div class="editPopUp">
                <div class="formulario">
                    <div>
                        <label for="">Título da tarefa</label><br>
                        <input type="text" placeholder="Digite o título da tarefa">
                    </div>
                    <div>
                        <label for="">Descrição da tarefa</label><br>
                        <textarea placeholder="Descrição da tarefa"></textarea>
                    </div>

                    <div class="date">
                        <div>
                            <label for="">Início da tarefa</label><br>
                            <input type="text" id="dataInicio" placeholder="Data de início" readonly>
                        </div><br>

                        <div>
                            <label for="">Final da tarefa</label><br>
                            <input type="text" id="dataFinal" placeholder="Data final">
                        </div><br>
                    </div>
                    <select id="categoria" class="swal2-select">
                        <option value="saude">💚 Saúde</option>
                        <option value="estudo">📘 Estudo</option>
                        <option value="trabalho">💼 Trabalho</option>
                    </select>

                </div>
            </div>
      `,
       
        showCancelButton: true,
        confirmButtonText: "Salvar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: 'swal2-confirm btn-confirmar',
            cancelButton: 'swal2-cancel btn-cancelar'
        },
        didOpen: () => {
            flatpickr("#dataInicio", {
                defaultDate: hoje,
                enable: [hoje],
                clickOpens: false,
            })

            flatpickr("#dataFinal", {
                dateFormat: "d/m/Y",
                minDate: hoje
            });

        },
        customClass: {
            popup: 'editPopUp',
        }
    })
}

