const inputArea = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaDeTareas');

//Añadir una nueva tarea
botonAgregar.addEventListener('click',()=>{
    const textoTarea = inputArea.value; //Obtener el valor del input

    if(textoTarea.trim() !== ''){

        const nuevaTarea = document.createElement('li');

        nuevaTarea.textContent = textoTarea;
        listaTareas.appendChild(nuevaTarea);

        // nuevaTarea.addEventListener('click',()=>{
        //     nuevaTarea.remove();
        // })

        nuevaTarea.addEventListener('dblclick',()=>{
            nuevaTarea.style.textDecoration = 'line-through';
        })

        inputArea.value='';

    }else{
        alert('Debes escribir algo en el campo de texto');
    }
    

})