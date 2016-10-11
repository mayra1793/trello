window.addEventListener("load",function(){
	var entrar = document.getElementById("entrar");//span
	var boton = document.getElementById("boton");//button
	var lista = document.getElementById("lista");//input
	var caja = document.getElementById("caja");//div
	var formulario = document.getElementById("formulario");
	var contenedor = document.getElementById("contenedor");
	
	entrar.addEventListener("click",function(e){
		e.preventDefault();
		mostrarFormulario();
	});

	boton.addEventListener("click",function(e){
		e.preventDefault();
		mostrarLista();
		texto.value = "";
	});

	function mostrarFormulario(){
		caja.style.display = "inline-block";
		entrar.style.display = "none";
		formulario.style.display = "inline-block";
	}
	function mostrarLista(){
		caja.style.display = "none";
		entrar.style.display = "inline-block";
		var lista = document.createElement("div");
		lista.classList.add("textBold");
		lista.appendChild();
		lista.classList.add("lista");
		contenedor.insertBefore(lista,entrar.previousSibling);
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