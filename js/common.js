$(document).ready(function(){





$("input, textarea").focus(function(){

$(this).select();
});
 
 $("#mensagem").keyup(function () {
    var letras = $(this).val().length;      // a variável com o número
  $("#contador").text(letras + " / 500"); // escreve a frase
});

$("figcaption").hide();
$("figure").each(function(){
$(this).hover(function(){
$(this).find("figcaption").slideDown('medium');
},function(){
$(this).find("figcaption").slideUp('medium');
});
});

});