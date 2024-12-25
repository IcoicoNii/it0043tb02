let choco = document.getElementById("chocolate");
let note = document.getElementById("notepad");
let note2 = document.getElementById("notepad2");

function Reveal(){
    note.style.opacity = 100;
    choco.style.opacity = 0;
}

function Close(){
    choco.style.opacity = 100;
    note.style.display = "inline"
    note2.style.display = "none";
    note.style.opacity = 0;
    note2.style.opacity = 0;
}

function Ginger(){
    note.style.display = "none"
    note2.style.display = "inline";
    note2.style.opacity = 100;
}

function Choco(){
    note.style.display = "inline"
    note2.style.display = "none";
    note1.style.opacity = 100;

}