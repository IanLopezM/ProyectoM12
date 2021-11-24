class Joc {

	/**
	 * En el constructor se encuentran todas las variables inicializadas en los valores necesarios
	 */
	constructor() {
			
		this._cNoms = false;
		this._fiPartida = false;
		this._cMoure = false;
		this._cMatar = false;
		this._cMatarFitxa = false;
		this._cMoureFitxa = false;
		this._cOrigen = false;
		this._cDesti = false;
		this._cTornarMatar = false;
		this._cFinalTauler = false;
		this._cFitxes = false;
		this._equipActual = false;
		this._esperantOrigen = true;
		this._chivato = false;

		this._matar = 0;
		this._avancar = 0;

		this._nomEquip1 = "";
		this._nomEquip2 = "";

		this._quantFitxes1 = 12;
		this._quantFitxes2 = 12;
		this._origenX = 0;
		this._origenY = 0;
		this._destiX = 0;
		this._destiY = 0;

		this._tauler = new Tauler();
		this._tauler.rellenar();
	}

	/**
	 * Getter del tauler utilizado para hacer pruebas
	 */

	get tauler() {
		return this._tauler;
	}

	/**
	 * Comprueba que los dos nombres pasados por parametro no esten en blanco, en el caso de que no lo esten, cierra
	 * el modal y llama a las funciones, mostrarTauler, omplirTauler, omplirDades y startGame, en el caso de que los
	 * dos nombres esten vacios, cambia el color de fondo del input, dando a entender que tienes que rellenarlos.
	 * 
	 * @param {*} nomEquip1 
	 * @param {*} nomEquip2 
	 */
	comprovarNoms(nomEquip1, nomEquip2) {
		if((nomEquip1 !== "") && (nomEquip2 !== "")) {

  			$("#staticBackdrop").modal('hide');
  			$('body').removeClass('modal-open');
 			$('.modal-backdrop').remove();

			this.mostrarTauler();
			this.omplirTauler();
			this.omplirDades(nomEquip1, nomEquip2, this._quantFitxes1, this._quantFitxes2);
			this.startGame();
		} else {
			console.log("Estan vacio");
			if (nomEquip1 === "") {
				document.getElementById("player1Input").style.backgroundColor = "#b00b69";
			} else {
				document.getElementById("player1Input").style.backgroundColor = "white";
			}
			if (nomEquip2 === "") {
				document.getElementById("player2Input").style.backgroundColor = "b00b69";
			} else {
				document.getElementById("player2Input").style.backgroundColor = "white";
			}
		}
	}

	/**
	 * Rellena el div chess con otros divs, estos divs nuevamente creados son los que actuarán de celdas, cada una de
	 * las celdas creadas tendran un id con la estructura ricj donde r significa row, c c significa columna, i es la
	 * fila en la que se encuentran y j es la columna en la que se encuentran.
	 */
	mostrarTauler() {
		var cols = 8;
		var rows = 8;

		for (var i = 0; i < cols; i++) {
			for (var j = 0; j < rows; j++) {
				if (i%2 !== 0) {
					if (j%2 !== 0) {
						document.getElementById("chess").innerHTML += "<div class='celda c_rosas' id='r" + i + "c" + j + "'><div>";
					} else {
						document.getElementById("chess").innerHTML += "<div class='celda c_blancas' id='r" + i + "c" + j + "'><div>";
					}
				} else {
					if (j%2 !== 0) {
						document.getElementById("chess").innerHTML += "<div class='celda c_blancas' id='r" + i + "c" + j + "'><div>";
					} else {
						document.getElementById("chess").innerHTML += "<div class='celda c_rosas' id='r" + i + "c" + j + "'><div>";
						
					}
				}
			}
		}
	}

	/**
	 * Rellena los nuevos divs creados en la función anterior, con las clases token2 o token1, segun la fila y la 
	 * columna.
	 */
	omplirTauler() {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 8; j++) {
				if (i%2 !== 0) {
					if (j%2 !== 0) {
						var element = document.getElementById("r" + i + "c" + j);
						element.className += " token2";
					}
				} else {
					if (j%2 === 0) {
						var element = document.getElementById("r" + i + "c" + j);
						element.className += " token2";
					}
				}
			}
		} 


		for (var i = 5; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				if (i%2 !== 0) {
					if (j%2 !== 0) {
						var element = document.getElementById("r" + i + "c" + j);
						element.className += " token1";
					}
				} else {
					if (j%2 === 0) {
						var element = document.getElementById("r" + i + "c" + j);
						element.className += " token1";
					}
				}
			}
		} 
	}

	/**
	 * Rellena las variables y los elementos del html con los parametros que recibe.
	 * 
	 * @param {*} nomEquip1 
	 * @param {*} nomEquip2 
	 * @param {*} quantFitxes1 
	 * @param {*} quantFitxes2 
	 */
	omplirDades(nomEquip1, nomEquip2, quantFitxes1, quantFitxes2) {
		var player1 = document.getElementById("player1");
		player1.innerHTML = nomEquip1;

		var cantidadF1 = document.getElementById("cantidadF1");
		cantidadF1.innerHTML = quantFitxes1;

		var player2 = document.getElementById("player2");
		player2.innerHTML = nomEquip2;

		var cantidadF2 = document.getElementById("cantidadF2");
		cantidadF2.innerHTML = quantFitxes2;

		this._quantFitxes2 = quantFitxes2;
		this._quantFitxes1 = quantFitxes1;

		this._nomEquip1 = nomEquip1;
		this._nomEquip2 = nomEquip2;
	}

	/**
	 * Coge todas las celdas que tienen la clase celda y les pone el evento, el accionador es un click y se le pasa la
	 * funcion onclicklistener.
	 */
	startGame() {
		var celles = document.getElementsByClassName("celda");

		for (var i = 0; i < celles.length; i++) {

			celles[i].addEventListener("click", () => {this.onClickListener(event)});

		}
	}

	/**
	 * Coge todas las celdas que tienen la clase celda y les quita el evento que se ha asignado en la funcion anterior.
	 */
	finishGame() {
		var celles = document.getElementsByClassName("celda");

		for (var i = 0; i < celles.length; i++) {
			console.log("se quita");
			celles[i].removeEventListener("click", this.onClickListener);

		}
	}

	/**
	 * Muestra el modal de victoria con la informacion pasada por parametro.
	 * 
	 * @param {*} equip 
	 */
	mostrarModalVictoria(equip) {
		setTimeout(() => {
			document.getElementById("winner").innerHTML = "HA GANADO EL EQUIPO " + equip.toUpperCase();
			$( document ).ready(function() {
    		$('#infoWin').modal('show')
			});
		}, 500);
		
	}

	/**
	 * Cierra el modal de victoria.
	 */
	cerrarModalVictoria() {
		$("#infoWin").modal('hide');
  		$('body').removeClass('modal-open');
 		$('.modal-backdrop').remove();
	}

	/**
	 * Muestra el modal de no movimientos segun el equipo actual.
	 */
	mostrarModalNoMove(equip) {
		setTimeout(() => {
			if (this._equipActual === false) {
				document.getElementById("nomove").innerHTML = "SE HA QUEDADO SIN MOVIMIENTOS EL EQUIPO " + equip.toUpperCase();
			} else {
				document.getElementById("nomove").innerHTML = "SE HA QUEDADO SIN MOVIMIENTOS EL EQUIPO " + equip.toUpperCase();
			}
			$( document ).ready(function() {
    		$('#infoNoMove').modal('show')
			});


		}, 500);
		
	}

	/**
	 * Cierra el modal de no movimientos.
	 */
	cerrarModalNoVe() {
		$("#infoNoMove").modal('hide');
  		$('body').removeClass('modal-open');
 		$('.modal-backdrop').remove();
	}

	/**
	 * Lo primero que hace esta funcion, es recoger el id del elemento que ha sido clicado a traves del evento,
	 * coprueba que el jugador no se haya quedado con las fichas ahogadas, si se encuentra esperando el origen,
	 * las variables de origen recibiran un nuevo valor, en caso de que no este esperando el origen si no que 
	 * este esperando el destino, las variables de destino recibiran un nuevo valor.
	 * 
	 * Una vez asignado uno de los dos valores, volvemos a mirar si esta esperando origen o destino, en el caso
	 * que este esperando origen, haremos lo siguiente:
	 * Comprobaremos si el origen es una casilla valida, es decir que es una ficha que corresponde al jugador del
	 * turno, acto seguido, comprobaremos si esa ficha puede matar o mover, en caso de que pueda matar, el gesto
	 * de poder mover queda prohibido, por lo que esa ficha solo podra matar.
	 * Si el origen es un lugar valido, se llama a la funcion mostrarCorrecte y se cambia el boolean de origen, 
	 * para saber que ya no espera un origen si no que el siguiente click deberia de ser el destino. En caso de 
	 * que el origen sea incorrecto, se llama a la funcion mostrarIncorrecte y el boolean sigue esperando el 
	 * origen.
	 * 
	 * En el caso de que este esperando el destino, haremos lo siguiente:
	 * Comprobaremos si el destino es una casilla valida, es decir el lugar donde se ha clicado, es apto respecto
	 * al lugar del primer click.
	 * Si el destino es correcto, se llama a la funcion mostrarCorrecte, despues se mira si el boolean que se
	 * encarga de saber si se puede matar es true, si se puede matar mata, y resta uno a la cantidad de fichas y
	 * lo muestra por pantalla cambiando el HTML. En caso de que no pueda matar, la ficha avanzara.
	 * Despues de matar o avanzar, comprueba si la ficha movida ha llegado al final del tablero 
	 * dependiendo del equipo al que le toque, si ha llegado al final, la ficha pasara a ser reina.
	 * Tras el movimiento y la comprobacion de final de tablero, mira si el equipo que acaba de
	 * mover ha acabado con todas las fichas del equipo rival, en caso afirmativo, saldra por pantalla el modal
	 * del equipo ganador y dara fin a la partida.
	 * Acto seguido a la comprobacion de ganador, compruebo si al equipo que le tocaba mover ficha, se ha quedado
	 * sin movimientos, tanto mover como matar, si es cierto, le da la victoria al otro equipo, despues de esta
	 * comprobacion, hago exactamente lo mismo pero con el otro equipo, para ver si al mover, ha dejado al equipo
	 * rival sin movimientos.
	 * 
	 * En el caso de que el destino sea incorrecto, se pedira que vuelva a escoger tanto el origen como el destino.
	 * 
	 * @param {*} e 
	 */
	onClickListener(e) {
		console.log(this._nomEquip1 + this._nomEquip2);
		var id = e.target.id;
		//reasigna las variables segun el turno
		if (!this._cFitxes) {
			if (this._esperantOrigen === true) {
				this._origenX = id.charAt(1);
				this._origenY = id.charAt(3);
			} else {
				this._destiX = id.charAt(1);
				this._destiY = id.charAt(3);
			}

			if (this._esperantOrigen) {
				this._cOrigen = this._tauler.comprovarOrigen(this._equipActual, this._origenX, this._origenY);
				console.log("Esta es la comprobacion de origen " + this._cOrigen);
				this._matar = this._tauler.comprovarMatarFitxa(this._equipActual, this._origenX, this._origenY);
				this._moure = this._tauler.comprovarMoureFitxa(this._equipActual, this._origenX, this._origenY);
				console.log("Esta es la comprobacion de matar " + this._matar);
				console.log("Esta es la comprobacion de moure " + this._moure);
				if (this._matar) {
					this._moure = false;
				}
				if (this._cOrigen) {
					console.log(this._origenX +  " " + this._origenY);
					this.mostrarCorrecte();
					this.canviarOrigen();
				} else {
					this.mostrarIncorrecte();
				}
			} else {
				this._cDesti = this._tauler.comprovarDesti(this._matar, this._equipActual, this._origenX, this._origenY, this._destiX, this._destiY);
				console.log("Esta es la comprobacion de destino " + this._cDesti);

				if(this._cDesti) {
					this.mostrarCorrecte();
					console.log(this._destiX +  " " + this._destiY);
					if (this._matar) {
						this._tauler.matar(this._equipActual, this._origenX, this._origenY, this._destiX, this._destiY);
						if (this._equipActual === false) {
							this._quantFitxes1--;
							document.getElementById("cantidadF1").innerHTML = this._quantFitxes1;
						} else {
							this._quantFitxes2--;
							document.getElementById("cantidadF2").innerHTML = this._quantFitxes2;
						}
					} else {
						this._tauler.avancar(this._equipActual, this._origenX, this._origenY, this._destiX, this._destiY);
					}

					this._cFinalTauler = this._tauler.comprovarFinal(this._equipActual, this._destiX);
					console.log("Lo que le paso a comprovarFinal es "+ this._equipActual + " y " + this._destiX);
					console.log("Esta es la comprobacion de final Tabler " + this._cFinalTauler);
					if (this._cFinalTauler) {
						this._tauler.tornarReina(this._equipActual, this._destiX, this._destiY);
					}
					this._cFitxes = this._tauler.comprovarFitxes(this._equipActual, this._quantFitxes1, this._quantFitxes2);
					if (this._cFitxes) {
						if (this._equipActual) {
							this.mostrarModalVictoria(this._nomEquip1);
						} else {
							this.mostrarModalVictoria(this._nomEquip2);
						}
						this.finishGame();
					}
					this._cMoure = this._tauler.comprovarMoure(this._equipActual);
					this._cMatar = this._tauler.comprovarMatar(this._equipActual);

					if ((!this._cMoure && !this._cMatar)  && !this._cFitxes) {
						if (this._equipActual === false) {
							this.mostrarModalNoMove(this._nomEquip2);
						} else {
							this.mostrarModalNoMove(this._nomEquip1);
						}
						
						this.finishGame();
					}
					

					this.canviarOrigen();
					this.canviarEquip();
					this._cMoure = this._tauler.comprovarMoure(this._equipActual);
					this._cMatar = this._tauler.comprovarMatar(this._equipActual);

					if ((!this._cMoure && !this._cMatar)  && !this._cFitxes) {
						if (this._equipActual === false) {
							this.mostrarModalNoMove(this._nomEquip2);
						} else {
							this.mostrarModalNoMove(this._nomEquip1);
						}
						this.finishGame();
					}

				} else {
					this.mostrarIncorrecte();
					this.canviarOrigen();
				}
			}
		}
		
	}

	/**
	 * Cambia el equipo actual a justo el contrario, también cambia en el html el indicador de quien es el turno.
	 */
	canviarEquip() {
		this._equipActual = !this._equipActual;
		if (this._equipActual === false) {
			document.getElementById("turnoRosas").innerHTML = "";
			document.getElementById("turnoBlancas").innerHTML = "Turno blancas";
		} else {
			document.getElementById("turnoRosas").innerHTML = "Turno rosas";
			document.getElementById("turnoBlancas").innerHTML = "";
		}
	}

	/**
	 * Cambia el boolean para finalizar la partida.
	 */
	finalitzarPartida() {
		this._fiPartida = !this._fiPartida;
	}

	/**
	 * Cambia el boolean para saber si espera el origen o el destino.
	 */
	canviarOrigen() {
		this._esperantOrigen = !this._esperantOrigen;
	}

	/**
	 * Cambia el color del body a verde.
	 */
	mostrarCorrecte() {
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "green";
		this.cridarTimer();
	}

	/**
	 * Cambia el color del body a rojo.
	 */
	mostrarIncorrecte() {
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
		this.cridarTimer();
	}

	/**
	 * Vuelve a poner el color del body al original.
	 */
	cridarTimer() {
		setTimeout(() => {
			document.getElementsByTagName("BODY")[0].style.backgroundColor = "mediumpurple";
		}, 1000);
	}

	/**
	 * Vuelve a lanzar el juego desde el principio, para ello, borra todas las celdas y las vuelve a crear
	 * llamando a las funciones necesarias creadas anteriormente.
	 * Resetea el valor de las variables necesarias, cambia a quien le toca el turno en el html.
	 */
	reiniciarPartida() {
		this.startGame();
		this._cFitxes = false;

		console.log("reiniciado");
		const e = document.getElementById("chess"),
      	deleted = [];
		Array.from(e.childNodes).forEach( child => {e.removeChild(child); deleted.push(child.tagName);});
		this._tauler.rellenar();

		this._fiPartida = false;
		this._equipActual = false;
		document.getElementById("turnoRosas").innerHTML = "";
		document.getElementById("turnoBlancas").innerHTML = "Turno blancas";

		this._quantFitxes1 = 12;
		this._quantFitxes2 = 12;
		document.getElementById("cantidadF1").innerHTML = this._quantFitxes1;
		document.getElementById("cantidadF2").innerHTML = this._quantFitxes2;

		this.mostrarTauler();
		this.omplirTauler();
		this.startGame();
	}
}