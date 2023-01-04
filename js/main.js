const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-add')
const tarefas = document.querySelector('.tarefa')
    //
function criaLi() {
    const li = document.createElement('li')
    return li
}
//
inputTarefa.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    })
    //
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus();
}
//
function criaTarefa(textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);


}
//



//
btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//

function criaBotaoApagar(li) {
    li.innerText += '';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    console.log(el)
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();

    }
});


//setatribuite

/*function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefa2 of liTarefas) {
        let tarefaTexto = tarefa2.innerText;
        //replace = substituir e trim remove espaço 
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);

    }
    // guardar as tarefas json
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas2', tarefasJSON);
    console.log(tarefasJSON);

}

//
function adicionarTarefasSalvas() {
    const tarefas3 = localStorage.get('tarefas2')
    const listaTarefasSalvas = JSON.parse(tarefas3);
    for (let tarefa4 of listaDeTarefas) {
        criaTarefa(tarefa4)
    }
}
adicionarTarefasSalvas(); */