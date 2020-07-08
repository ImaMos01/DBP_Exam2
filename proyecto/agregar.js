$(document).ready(function(){
	
	$("#submit").click(function(e){
		e.preventDefault();

		var cadena = {"name":$('#name').val(),
						"description":$('#description').val()};
		
		$.ajax({
			url: "http://localhost:8080/CategoryRestService/Add",
			type: 'put',
			headers: {"X-HTTP-Method-Override": "PUT"},
			contentType : "application/json",
			data: JSON.stringify(cadena),
			dataType : 'json',
			
			success: function(){
				alert(" successfully registered");
			},
			error: function(){
				alert("could not save ");
			}
		}).then(function(data){
			console.log(data);
		});
	});

});