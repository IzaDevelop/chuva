// sidebar 
$(document).ready(function(){
	$('.closebtn').on('click', function(){
    	$('.menu').toggle();
    });
});

$(document).ready(function(){
	$('.openbtn').on('click', function(){
    	$('.menu').toggle();
    });
});

// esconder conteudo discussões
$(document).ready(function(){
	$('#botao').on('click', function(){
    	$('#conteudo').toggle();
    });
});

// mostrar form discussões
$(document).ready(function(){
	$('#botao').on('click', function(){
    	$('#formulario').toggle();
    });
});

// mostrar atualizacoes discussões
$(document).ready(function(){
	$('#enviar').on('click', function(){
    	$('#atualizar').toggle();
    });
});

// mostrar novo tópico discussões
 $(document).ready(function(){
	$('#enviar').on('click', function(){
    	$('#formulario').toggle();
    });
});

 $(document).ready(function(){
	$('#btnAtualizar').on('click', function(){
    	$('#atualizar').toggle();
    });
});

 $(document).ready(function(){
	$('#btnAtualizar').on('click', function(){
    	$('#formulario').toggle();
    });
});