var list = document.getElementById('list')

function addTodo(){
var todo_item = document.getElementById('todo-item');
var li = document.createElement('li')
var liText = document.createTextNode(todo_item.value)
li.appendChild(liText)

var delBtn = document.createElement('button');
var delText = document.createTextNode('Delete')
delBtn.setAttribute('class','btn')
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)

var editBtn = document.createElement('button');
var editBtnText = document.createTextNode('Edit')
editBtn.setAttribute("onclick","editBtn(this)")
editBtn.appendChild(editBtnText)

li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li)
todo_item.value = ""
}

function deleteItem(e){
e.parentNode.remove()

}

function editBtn(e){

    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Student Details","Student Class")
    e.parentNode.firstChild.nodeValue = editValue
    val = editValue

}