let sim = document.getElementById('sim');

// FLEX DIRECTION
function flexDir(x){
    sim.style.flexDirection = x;
}

// JUSTIFY CONTENT
function jc(x){
    sim.style.justifyContent = x;
}


// ALIGN ITEMS
function ai(x){
    sim.style.alignItems = x;
}


// GAP
function changegap(){
    let g = document.getElementById("gap-input").value;
    sim.style.gap = g + "px";
}

// FLEX GROW
function b1grow(){
    let gr = document.getElementById('box1grow').value;
    document.getElementById('one').style.flexGrow = gr;
}

function b2grow(){
    let gr = document.getElementById('box2grow').value;
    document.getElementById('two').style.flexGrow = gr;
}

function b3grow(){
    let gr = document.getElementById('box3grow').value;
    document.getElementById('three').style.flexGrow = gr;
}

function resetgrow(x){
    document.getElementById('one').style.flexGrow = x;
    document.getElementById('two').style.flexGrow = x;
    document.getElementById('three').style.flexGrow = x;
    document.getElementById('box1grow').value = x;
    document.getElementById('box2grow').value = x;
    document.getElementById('box3grow').value = x;
}

function growall(){
    // GET VALUE
    let one = document.getElementById('box1grow').value;
    let two = document.getElementById('box2grow').value;
    let three = document.getElementById('box3grow').value;
    
    // ADD VALUE TO THE FLEX
    document.getElementById('one').style.flexGrow++;
    document.getElementById('two').style.flexGrow++;
    document.getElementById('three').style.flexGrow++;

    one++;
    two++;
    three++;

    //DISPLAY
    document.getElementById('box1grow').value = one;
    document.getElementById('box2grow').value = two;
    document.getElementById('box3grow').value = three;
}

// RESET FLEXBOX
function resetbox(){
    sim.style.flexDirection = "";
    sim.style.justifyContent = "";
    sim.style.alignItems = "";
    sim.style.gap = 0 + "px";
    document.getElementById('gap-input').value = 0;
    document.getElementById('box1grow').value = 0;
    document.getElementById('box2grow').value = 0;
    document.getElementById('box3grow').value = 0;
    document.getElementById('one').style.flexGrow = 0;
    document.getElementById('two').style.flexGrow = 0;
    document.getElementById('three').style.flexGrow = 0;
    sim.style.flexWrap = "";
    sim.style.resize= "none";
    sim.style.width= "500px"; 
    sim.style.overflow= "none";
    document.getElementById('flexwrap').checked = false;
}

function fwrap() {
    let checkBox = document.getElementById('flexwrap');
  
    if (checkBox.checked == true){
      sim.style.flexWrap= "wrap";
      sim.style.resize= "horizontal";
      sim.style.overflow="auto";
    }else{
        sim.style.flexWrap = "";
        sim.style.resize= "none";
        sim.style.width= "500px"; 
        sim.style.overflow= "none";
    }
}