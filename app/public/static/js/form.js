$(document).ready(function() {
		// validate the comment form when it is submitted
		$("form").validate({
      messages: {
        nome: "Preencha seu nome",
        sobrenome:  "Preencha seu sobre-nome",
        email:  "Preencha seu e-mail",
        telefone: "Preencha seu telefone",
        
      }
    });

    $("form input").focus(function() {

      $(this).prev('.label-input').addClass('active-label-input')

    }).blur(function() {

      $(this).prev('.label-input').removeClass('active-label-input')

    })
})
