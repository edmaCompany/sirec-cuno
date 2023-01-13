
//this part of the code is from the index 
function login (){
    var user,pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrasena").value;

    if(user == "202031438" && pass == "13e41867"){
        window.location = "SIRECA - CUNOC - HOME.html";
    }else{
        window.location = "index.html";
    }
}

//this part of the code is from the page home, page notas and nota
function go_to_home(){
    window.location = "SIRECA - CUNOC - HOME.html";
}

function go_to_next(){
    window.location = "SIRECA - CUNOC - NOTAS.html";
}

function sign_out(){
    window.location = "index.html";
}

function sireca_pdf(){

  window.location =  "https://sireca.cunoc.edu.gt/RYCA-ASIGAUTOM22021.pdf"
}

function view_notes(){
    window.location = "SIRECA - CUNOC - NOTA.html";
}