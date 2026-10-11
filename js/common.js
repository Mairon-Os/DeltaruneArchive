$(document).ready(function(){





$("input, textarea").focus(function(){

$(this).select();
});
  var $mensagem = $("#mensagem");
  var $contador = $("#contador");
 
 $("#mensagem").keyup(function () {
  $("#contador").text($(this).val().length + " / 500");
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