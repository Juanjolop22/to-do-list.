// hi
const button = document.getElementById('addButton'),
      inputText = document.getElementById('inputTask'),
      taskList = document.getElementById('taskList');
const list = button.addEventListener('click', () =>{
    if(inputText.value !== ''){
        let create = document.createElement('li');
        create.textContent = inputText.value;
        taskList.append(create);
        create.classList.add('eachList')

        let editButton = document.createElement('button');
        editButton.classList.add('buttonEdit');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('buttonDelete')

        deleteButton.innerText = 'delete';
        editButton.innerText = 'edit';
        create.append(editButton, deleteButton);

        editButton.addEventListener('click', () =>{
            let inputEdit = document.createElement('input');
            inputEdit.type = 'text';
            inputEdit.value = create.firstChild.textContent;
            create.innerHTML = '';
            create.append(inputEdit);
            
            let saveButton = document.createElement('button');
            saveButton.classList.add('buttonSave')
            saveButton.innerText = 'save';
            create.append(saveButton);
            
            saveButton.addEventListener('click',() =>{
                create.firstChild.textContent = inputEdit.value;
                create.removeChild(saveButton);
                create.append(editButton);
                create.append(deleteButton);
            })
        })
        deleteButton.addEventListener('click', () =>{
            create.remove();

        });
        inputText.value = ''; 
    }
})
console.log(list);
