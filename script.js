let formRows;
let formCollums;

const formMain = document.querySelector(".main-form")
const formCheckbox = document.querySelector("#highlight-diagonals")


//Verifica se os valores de linha e coluna são iguais, se sim exibe a área do checkbox
formMain.addEventListener('submit', (e) => {
    // Impede que a página recarregada ao realizar um submit
    e.preventDefault()


    formRows = document.querySelector("#row").value;
    formCollums = document.querySelector("#collums").value

    const checkBoxField = document.querySelector('.form-checkbox-field')

    formRows === formCollums ? checkBoxField.classList.toggle('hide') : checkBoxField.classList.add('hide')
})

//Verifica se a checkbox está marcada, se estiver abrirá um novo campo para preencher as cores das diagonais.
formCheckbox.addEventListener('click', (e) => {
    const checkBox = e.target
    document.querySelector(".form-color-selector").classList.toggle('hide')
})


