let formRows;
let formCollums;

const formMain = document.querySelector(".main-form")
const formCheckbox = document.querySelector("#highlight-diagonals")


//Preenche com TR e TDS e gerando valores referente as linhas e colunas dela
function generateMatrix(table, collums, rows) {
    //Verifica se a quantidade de linhas é menor do que a do parâmetro, e cria até ter o mesmo valor
    for (let indexRow = 0; indexRow < rows; indexRow++) {
        table.insertRow(table.rows.lenght)
        //Dentro da linha criada, irá criar a quantidade de colunas  de acordo com o parâmetro.
        for (let indexCollum = 0; indexCollum < collums; indexCollum++) {
            table.rows[indexRow].insertCell(indexCollum)
            //Está pegando a array-like da linha e transformando em uma array e criando o conteúdo de texto dela de acordo com a linha e coluna que está inserida. Foi adicionado + 1 para o primeiro valor retornar como 1.
            for (let collums = 0; collums < indexCollum + 1; collums++) {
                Array.from(table.rows)[indexRow].cells[collums].innerText = `${indexRow + 1} ${collums + 1}`
            }
        }
    }
}

//As diagonais da matriz tem o mesmo valor representando tanto a linha quanto a coluna. Irá verificar quais são diagonais, as diagonais receberão uma cor primária selecionada no formulário, e as não diagonais receberação a cor secundaria
function addTagDiagonalsMatrix(table) {
    for (let indexRow = 0; indexRow < table.rows.length; indexRow++) {
        Array.from(table.rows[indexRow].cells).forEach((e) => {
            if ((e.innerHTML.split(' ')[0] == e.innerHTML.split(' ')[1])) {
                e.classList.add('diagonals')
            } else {
                e.classList.add('no-diagonals')
            }
        })
    }
}

//Usado como callback. Verifica qual cor foi editado, e atualiza a tag de acordo.
function updateBackgroundColor(e) {
    if (e.target.id === 'form-color-main') {
        document.querySelectorAll('.diagonals').forEach((el) => {
            el.style.backgroundColor = e.target.value
        })
    } else if (e.target.id === 'form-color-second') {
        document.querySelectorAll('.no-diagonals').forEach((el) => {
            el.style.backgroundColor = e.target.value
        })
    }
}



//Execução



//Verifica se os valores de linha e coluna são iguais, se sim exibe a área do checkbox, se não gera a matriz
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


