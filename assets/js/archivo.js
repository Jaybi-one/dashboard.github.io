window.addEventListener('load', function () { 

  var imprimir = document.getElementById('imprimir');
  imprimir.addEventListener('click', function(){
      imprimir = window.print();
  });

  function resolucion(){
      var altura = document.getElementById('altura').innerHTML = 'la altura es: '+screen.height;  
      var ancho = document.getElementById('ancho').innerHTML = 'el ancho es: '+screen.width;
      var color = document.getElementById('color').innerHTML = 'el color es: '+screen.colorDepth;
      var resolucion = document.getElementById('resolucion').innerHTML = 'la resolucion es: '+screen.pixelDepth;  
      var alto_disponible = document.getElementById('alto_disponible').innerHTML = 'el alto disponibles es: '+screen.availHeight;
      var ancho_disponible = document.getElementById('ancho_disponible').innerHTML = 'el ancho disponible es: '+screen.availWidth;    
  }
  resolucion();
});
