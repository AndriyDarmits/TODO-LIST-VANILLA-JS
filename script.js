

const input = document.querySelector(".input");
const ulList = document.querySelector("#todo-list");

const deleteItem = document.querySelectorAll(".item-delete");
const lists = document.querySelectorAll("li")
const submitButton = document.querySelector(".submitButton");
const deleteSpanList = document.querySelectorAll(".item-delete")
const doneSpanList = document.querySelectorAll("item-cross-out")
const addCheckedClass = document.querySelector(".related-to-hover");
console.log(addCheckedClass);



function createTodoItem() {
    const li = document.createElement("li");
    li.classList.add("related-to-hover");

    const spanDone = document.createElement("span")

    spanDone.classList.add("item-cross-out");

    const doneIcon = document.createElement("i");
    doneIcon.classList.add("far", "fa-check-circle");

    spanDone.appendChild(doneIcon);
    //--------------

    const spanText = document.createElement("span");
    spanText.classList.add("todo-text");

    let todoTetxt = input.value;
    spanText.innerText = todoTetxt;


    const spanDelete = document.createElement("span");
    spanDelete.classList.add("item-delete");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-times");

    spanDelete.appendChild(deleteIcon);

    ulList.appendChild(li).append(spanDone, spanText, spanDelete);



    input.value = ""; //  clear input area


}




// delete function
ulList.addEventListener("click", function (event) {
    if (event.target.className == "fas fa-times") {


        event.target.parentElement.parentElement.remove();
    }
});

// cross-out todo item
ulList.addEventListener("click", function (event) {
    if (event.target.className === "far fa-check-circle") {
        let temp = event.target.parentElement.parentElement;
        temp.classList.add("checked");
        if (temp.classList.contains("checked")) {
            setTimeout(() => {
                temp.remove();
            }, 3000)
        }
    }

})


/* function deleteTodoItem() {
    for (let span of deleteSpanList) {
        console.log(span);
        span.addEventListener("click", function (event) {
            span.parentElement.remove();
        })
    }
}

deleteTodoItem(); */




/* input.addEventListener("keypress", function (event) {
    const ENTER = "Enter"

    if (event.code === ENTER && input.value !== "") {
        createTodoItem();
    } else {
        return;
    }


}); */




submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value !== "") {
        createTodoItem();
    } else {
        alert("Please type some text")

    }
});

const clearAllItem = document.querySelector('.clear-all');



clearAllItem.addEventListener('click', event => {
    /* 
        for (let del of ulList.children) {
    
            del.remove();
        } */

    ulList.innerHTML = '';


})













