class App {

	constructor(){
		this.joc = new Joc();
		this.rellenar();
		
	}

	/**
	 * Funcion rellenar, tal y como indica el nombre, esta funcion rellena todos los eventos necesarios al iniciar el juego.
	 * rellena los botones de cerrar de los tres modal, rellena el botón de reiniciar partida e indica quien va a iniciar la
	 * partida.
	*/
	rellenar() {
		console.log("rellenar");
		document.getElementById("btnCerrarModal").addEventListener("click", () => {this.joc.comprovarNoms(document.getElementById("player1Input").value, document.getElementById("player2Input").value)});
		document.getElementsByClassName('reiniciar')[0].addEventListener("click", () => {this.joc.reiniciarPartida()});
		document.getElementById("btnCerrarModalWin").addEventListener("click", () => {this.joc.cerrarModalVictoria()});
		document.getElementById("btnCerrarModalNoMove").addEventListener("click", () => {this.joc.cerrarModalNoVe()});
	}
	
}