window.addEventListener("load",function(){
	var tablero = document.getElementById('tablero');
	var boton = document.getElementById("boton");
	var lista = document.getElementById("lista");
	var caja = document.getElementById("caja")
	var texto = document.getElementById("texto");
	var boton = document.getElementById("boton");

	tablero.addEventListener("click",function(x){
		x.preventDefault();
		mostrarBoton();

	});

	function mostrarBoton(){
		boton.style.cssText = "display:block";
		tablero.style.cssText = "display:none";
		lista.style.cssText = "display:block";
		caja.style.cssText = "display:block"
	}
	
	
});

var span = document.getElementById("span");
	
	var texto = document.getElementById("texto");
	var box = document.getElementById("box");
	var form = document.getElementById("form");
	var contenedor = document.getElementById("contenedor");



	span.addEventListener("click",function(e){
		e.preventDefault();
		mostrarFormulario();
	});

	boton.addEventListener("click",function(e){
		e.preventDefault();
		mostrarLista();
		texto.value = "";
	});

	function mostrarFormulario(){
		box.style.display = "inline-block";
		span.style.display = "none";
		form.style.display = "inline-block";
	}
	function mostrarLista(){
		box.style.display = "none";
		span.style.display = "inline-block";
		var lista = document.createElement("div");
		var nodo = document.createTextNode(texto.value);
		lista.classList.add("textBold");
		lista.appendChild(nodo);
		lista.classList.add("lista");
		contenedor.insertBefore(lista,span.previousSibling);
		lista.style.display = "inline-block";
		lista.style.cssFloat = "left";

		var nuevaTarjeta = document.createElement("a");
		nuevaTarjeta.href= "#";
		var nodoTarjeta =document.createTextNode("Añadir una tarjeta ...")
		nuevaTarjeta.appendChild(nodoTarjeta);
		lista.appendChild(nuevaTarjeta);
		nuevaTarjeta.classList.add("tarjeta");
	}
});