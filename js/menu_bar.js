var apple = "Apple";

function menu_open(){
    document.body.style.backgroundColor = "#C4C4C4";
    document.getElementById("menu_sidebar").style.display = "block";
    var content = document.getElementsByClassName("content");
    content[0].style.pointerEvents = "none";
}

function menu_close(){
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("menu_sidebar").style.display = "none";
    var content = document.getElementsByClassName("content");
    content[0].style.pointerEvents = "all";
}

function fill_in_seed(tmpSeed){
    if (tmpSeed === ''){
        tmpSeed = "Seed X";
    }
    document.getElementById("seed_text").value = tmpSeed;
    
    menu_close();
}