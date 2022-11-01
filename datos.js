function vacio(inputField){
    if(inputField.type=="checkbox"){
	if(inputField.checked)
	    return false;
	return true;
    }
    if (inputField.value==""){
	return true;
    }
    return false;
}

function remarcar(inputDiv){
  inputDiv.style.backgroundColor="#AA0000";
	inputDiv.parentNode.style.backgroundColor="#AA0000";
	inputDiv.parentNode.style.color="#FFFFFF";
}
function limpiar(inputDiv){
	inputDiv.parentNode.style.backgroundColor="#FFFFFF";
	inputDiv.parentNode.style.color="#000000";
}

window.onload = function(){
    let mainForm = document.getElementById("mainForm");
    let requiredInputs = document.querySelectorAll(".required");
    for (let i=0; i < requiredInputs.length; i++){
	requiredInputs[i].onfocus = function(){
	    this.style.backgroundColor = "#EEEE00";
	}
    }
    mainForm.onsubmit = function(e){
	let requiredInputs = document.querySelectorAll(".required");
	for (let i=0; i < requiredInputs.length; i++){
	    if( vacio(requiredInputs[i]) ){
		e.preventDefault();
		remarcar(requiredInputs[i]);
	    }
	    else{
		limpiar(requiredInputs[i]);
	    }
	}
    }
}
