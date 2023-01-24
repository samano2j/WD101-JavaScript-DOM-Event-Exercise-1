//Adding a note

document.getElementById("add-btn").addEventListener("click", (e) => {
    var list = document.getElementById("list");
    var note = document.getElementById("add-input").value;

    const newItem = document.createElement("li");

    const noteItem = document.createElement("p");
    noteItem.innerText = note;

    const iconItems = document.createElement("p");

    const icon1 = document.createElement("i");
    icon1.classList.add("fa");
    icon1.classList.add("fa-pencil-square-o");

    const icon2 = document.createElement("i");
    icon2.classList.add("fa");
    icon2.classList.add("fa-times");

    const editNote = document.createElement("input");
    editNote.setAttribute('type','text');
    editNote.classList.add("edit-note");

    iconItems.appendChild(icon1);
    iconItems.appendChild(icon2);

    newItem.appendChild(noteItem);
    newItem.appendChild(iconItems);
    newItem.appendChild(editNote);
    list.appendChild(newItem);
    document.getElementById("add-input").value = "";

    event.preventDefault();
});
  