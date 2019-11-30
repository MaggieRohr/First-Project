




class ToDo{
	constructor(value, id){
		this.mVal = value;
		this.mId = id;
	}
}

var todos = []
var counter = 0;
var ul = document.querySelector("ul");
document.querySelector('#newInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    	var newTodo = new ToDo(this.value, counter);
    	todos.push(newTodo);
    	counter++;
    	render();
	  	this.value = " " ;
    }
});


function render(){
	ul.innerHTML = "";
	for (i in todos){

	  	var li = document.createElement("li");

	  	var spanElement = document.createElement("span");

	  	var newTodoListItem = todos[i].mVal;

	  	spanElement.innerHTML = `<i id="${todos[i].mId}" onclick="del(${todos[i].mId})" class="material-icons">delete</i>`;

	  	ul.appendChild(li).append(spanElement,newTodoListItem);
	}


};


function del(id){
	for (i in todos){
		if(todos[i].mId == id){
			todos.splice(i, 1);
		}
	}
	render();
}
