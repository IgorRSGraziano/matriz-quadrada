let formRows;
let formCollums;

const formMain = document.querySelector(".main-form")
const formCheckbox = document.querySelector("#highlight-diagonals")


//Verifica se os valores de linha e coluna são iguais, se sim exibe a área do checkbox
formMain.addEventListener('submit', (e) => {
    // Impede que a página recarregada ao realizar um submit
    e.preventDefault()
    const formBtn = document.querySelector("#form-main-submit")

    const formRows = document.querySelector("#form-main-rows").value;
    const formCollums = document.querySelector("#form-main-collums").value

    const checkBoxField = document.querySelector('.form-checkbox-field')

    //Cria uma matriz e se os valores forem iguais, vai exibir o próximo campo
    if (formRows === formCollums) {
        checkBoxField.classList.remove('hide')
        generateMatrix(matrixTable, formCollums, formRows)
        matrixTable.classList.remove('hide')
    } else {
        checkBoxField.classList.add('hide')
        generateMatrix(matrixTable, formCollums, formRows)
        matrixTable.classList.remove('hide')
    }

    //Impede reenvio do formulário
    formBtn.disabled = true;
})

//Verifica se a checkbox está marcada, se estiver abrirá um novo campo para preencher as cores das diagonais.
formCheckbox.addEventListener('click', (e) => {
    const checkBox = e.target
    document.querySelector(".form-color-selector").classList.toggle('hide')
})


