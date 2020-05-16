$(document).ready(function() {
  $('a.scroll-top').click(function() {
    $('html, body').animate({ scrollTop: 0}, 600); //Llega a su destino con el tiempo deseado
    return false;
  });
});

$(document).ready(function() {
  $('a.scroll-bot').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top }, 600); //Llega a su destino con el tiempo deseado
    return false;
  });
});
