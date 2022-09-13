// Funções
const mostraIdade = () => {
    let span = document.getElementById('txt-idade')
    let campoIdade = document.getElementById('idade')
    span.innerText = campoIdade.value
}

var dataAtual = new Date()

const mostraData = () => {
    let dia = dataAtual.getDay()
    let mes = dataAtual.getMonth() + 1
    let ano = dataAtual.getFullYear()
    let hora = dataAtual.getHours()
    let valor = dia + '/' + mes + '/' + ano + '-' + hora 

    document.getElementById('dt-cadastro').value = valor
}

// Preenche o select "estado" com os estados da API do IBGE
const getEstados = () => {
    let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    let select = document.getElementById('estado')

    // Lê a API através do fetch(), 1º then captura dos dados, 2º then trata os dados
    fetch(api).then(resposta => resposta.json()).then(json => {
        let options = '<option>Selecione</option>'
        
        select.innerHTML = options
    })
}


// Eventos e execuções automáticas
mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)

mostraData()

getEstados()

// Inicializa animações scroll do AOS 
AOS.init();

// Impede o envio do formulário quando os campos estão inválidos
(function () {
    'use strict'

    // Variável que captura as tags <form> que contém a classe "needs-validation"
    var forms = document.querySelectorAll('.needs-validation')

    // Executa para cada formulário da variável forms
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                // Se houver campos inválidos, interrompe o SUBMIT
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
