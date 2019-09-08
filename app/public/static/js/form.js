$(document).ready(function() {
			$(function() {

				jQuery.validator.addMethod("cellphone", function (value, element) {
						value = value.replace("(", "");
						value = value.replace(")", "");
						value = value.replace("-", "");
						value = value.replace(" ", "");

						console.log(this.optional(element) || /[0-9]{11}/.test(value))
						return this.optional(element) || /[0-9]{11}/.test(value);
				}, "Por favor, um telefone válido");


				$("#contact-form").validate({
					rules: {
						telefone: {
							cellphone: true,
							required: true
						},
				    field: {
				      required: true,
				      email: true
				    }
				  },
			    messages: {
			      nome: "Preencha seu nome",
			      sobrenome:  "Preencha seu sobre-nome",
			      email:  "Preencha seu e-mail",
			      telefone: "Preencha seu telefone",
						accpetTerms: "É preciso aceitar os termos e condições da Sansumg"
			    }
			  });

			});

	    $("form input").focus(function() {

	      $(this).prev('.label-input').addClass('active-label-input')

	    }).blur(function() {
	      if ($(this).val().length == 0) {

	        $(this).prev('.label-input').removeClass('active-label-input')
	      }
	    })

			var maskBehavior = function(val) {

	      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';

	    }, options = {

	        onKeyPress: function(val, e, field, options) {

	          field.mask(maskBehavior.apply({}, arguments), options);

	        }

	    };

	    $('#telefone').mask(maskBehavior, options);


})
