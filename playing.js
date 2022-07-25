$(document).ready(function() {
    var tasks = $("#novaTarefa");
    var can = "<i class='fa-solid fa-trash-can'></i>"

    $(tasks).on("click", "#add", function() {
        var newTask = '<li> '+ $("#input")[0].value + ' <button class="delete" value="X">' + can + '</button> </li>'
        $(this).ready(function() {
            $("ul")
                .append(newTask)           
        })
        $("#input").val('')
    })
    
    $("#listaDeTarefas").on("click", ".delete", function () {
        $(this).parent().fadeOut(150)
    })
})















































// $(function () {

//     let newTask = $(".inputNovaTarefa").val();
//     $(".taskList").val(newTask)

        
//     }



// )



















































// function add() {
//     const novoItem = document.createElement('li');
//     novoItem.textContent = document.getElementById('inputNovaTarefa').value
//     novoItem.setAttribute('id', [i])
//     document.getElementsByTagName('ul')[0].appendChild(novoItem);
// }

// function remove() {
//     let delItem = document.getElementById('delTxt')
//     delItem.textContent = element.remove()
// }

// const tarefas = [
//     {    
//         id: 1,
//         nome : "Estudar JavaScript",
//     }
// ]




// let litaDeTarefas = document.createElement('li');
// listaDeTarefas.setAttribute('id', [i]);
// listaDeTarefas.setAttribute('nome', getElementById;
// document.body.appendChild(galeriaDeProdutos)