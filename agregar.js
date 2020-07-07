$(document).ready(function() {
$('#Enviar').click(function(){
	var Nombre=document.getElementById('nombre').value;	
	var Descripcion=document.getElementById('description').value;
	var conten ="";
	$.ajax({
		url: "http://localhost:8080/CategoryRestService/Add"
	
	});
});