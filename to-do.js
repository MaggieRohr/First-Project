//Creating a new to-do when clicking the enter button
var ul = document.querySelector("ul");
document.querySelector('#newInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      var li = document.createElement("li");
      var spanElement = document.createElement("span");
      var icon = document.createElement("i");

      var newTodoListItem = this.value;
      this.value = " " ;
      ul.appendChild(li).append(spanElement,newTodoListItem);
    }
});

//Click on the trash can icons to close out the items entered
