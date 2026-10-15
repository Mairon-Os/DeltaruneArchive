$(document).ready(function(){





$("input, textarea").focus(function(){

$(this).select();
});
 
 $("#mensagem").keyup(function () {
    var letras = $(this).val().length;
  $("#contador").text(letras + " / 500");
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