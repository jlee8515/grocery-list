  //List of Global variables
  var enterButton = document.getElementById("addBtn");
  var ul = document.querySelector("ul");
  var input = document.getElementById("userInput");

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  //Everything outside of function is to be used within function..see below

  //function to add list items
  function addItems() {
    var input = document.getElementById("userInput");
    var li = document.createElement("li"); // creates an element "li"

    //If nothing is entered into input
      if (input.value === '') {
       alert("Please enter item!");
       document.getElementById('li').style.display = "none"; //this makes sure an empty input field does not create an empty li
      } else { //Adding items to list
       li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
       ul.appendChild(li); //adds li to ul
       input.value = ""; //Reset text input field
       /*saveList();*/
     }
     //So Far items are being added as list items but no delete button

     //localStorage function
     function saveList() {
      localStorage.storedList = document.getElementById("myList").innerHTML;
    }

     //Need to add a delete button
  	var dBtn = document.createElement("button");
  	dBtn.appendChild(document.createTextNode("X"));
  	li.appendChild(dBtn);

    //Added a delete button to every list item
    dBtn.addEventListener("click", deleteListItem); //eventlistner for delete button to delete li
    //delete item function
    function deleteListItem() {
      li.classList.add("delete"); //Created a CSS delete class and set it to display none to delete item
    }
  }

    //if enter button is used on keyboard to create li instead of addbutton
    input.addEventListener("keypress", addListAfterKeypress);

    function addListAfterKeypress(event) {
      if (event.keyCode ===13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        addItems();
      }
    }

    if (localStorage.storedList) {

    }