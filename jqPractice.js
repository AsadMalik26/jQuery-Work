$(function () {
  // jQuery will execute this function after the page load
  // So, do all bindings here
  $("#addBtn").click(handleBtnClick);
  // $("#todos li").click(removeMe); Now, we are going to simplify on single binding here, which is reducing our duplication too.
  $("#todos").on("click", "li", removeMe);
  // bind #todos, when user click on #todos("consider click on", "li element", "and initialize removeMe function to it. i.e. li element");
  // now we reduced the duplication, as it was duplicated in handleBtnClick() function too.

  // time to edit the a element
  $("#editMe").click(edit);
  $("#todos").on("click", "li", editWithJQ);
});

function handleBtnClick() {
  /*alert("Button Clicked"); // Just for check */
  var newTodo = $("#newTodo");
  console.log(typeof document.getElementById("newTodo").innerHTML);
  console.log(
    (document.getElementById("newTodo").innerHTML =
      "Abcdefghijklmnopqrstuvwxyz")
  );
  console.log(typeof document.getElementById("newTodo").innerHTML);
  newTodo = newTodo.val(); //read value from input
  if (!newTodo) {
    $("#newTodo").addClass("error");
    return;
  }
  $("#newTodo").removeClass("error");

  $("#newTodo").val(""); //reset input to empty
  $("#todos").append("<li>" + newTodo + "</li>"); //append input value in list item
  // $("#todos li").click(removeMe); 1st: read below line, 2nd: we can also handle it in bindings area only by binding just #todo insted of its list items. Now go to bindings area.
  //first see the removeMe() function, now,we are binding this remove event to the new/appended list items.
}

function removeMe() {
  $(this).fadeOut(); //remove with a fade effect
  // $(this).remove(); //simple remove()
  //this is not working for new appended list items, the reason is that it is not binded to the new/appended list items.
  // so, we have to bind it to the new list items in the handleBtnClick() function
}

function edit() {
  // in this function try to edit the values
  var edit = $("#editMe").val(); //not success full yet, but by DOM element, it is changed the inner HTML text and also nested elements
  console.log(document.getElementById("editMe").innerHTML);
  document.getElementById("editMe").innerHTML =
    "Trying to change inner HTML? Lets see it effect the nested elements too or not <button>Yes! Button also effected</button>";
  console.log(document.getElementById("editMe").innerHTML);
}

function editWithJQ() {
    //set contentEditable = true for editing a content
    //contentEditable is a attribute in html
}
