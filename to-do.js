//Creating a new to-do when clicking on the add button


//Click on the trash can icons to close out the items entered
var delete = document.getElementsByClassName("material-icons");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Creating a strike-through when clicking on an list item elements
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);
