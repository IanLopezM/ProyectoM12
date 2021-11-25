 class Tauler{

/** 
 * Constructor con todas las variables que serán necesarias, las posiciones de origen y destino y la matriz de
 * fichas, que está declarada todo con ceros.
 * */

	constructor() {
		this._fitxaM = [[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0]
						];
		this._origenX = 0;
		this._origenY = 0;
		this._destiX = 0;
		this._destiY = 0;
	}

/** 
 * Funcion que rellena todas las posiciones del array con fichas.
 * */
	rellenar() {
		console.log(this._fitxaM);
		this._fitxaM[0][0] = new Fitxa(0, 0, true, true, false);
		this._fitxaM[0][1] = 0;
		this._fitxaM[0][2] = new Fitxa(0, 2, true, true, false);
		this._fitxaM[0][3] = 0;
		this._fitxaM[0][4] = new Fitxa(0, 4, true, true, false);
		this._fitxaM[0][5] = 0;
		this._fitxaM[0][6] = new Fitxa(0, 6, true, true, false);
		this._fitxaM[0][7] = 0;

		this._fitxaM[1][0] = 0;
		this._fitxaM[1][1] = new Fitxa(1, 1, true, true, false);
		this._fitxaM[1][2] = 0;
		this._fitxaM[1][3] = new Fitxa(1, 3, true, true, false);
		this._fitxaM[1][4] = 0;
		this._fitxaM[1][5] = new Fitxa(1, 5, true, true, false);
		this._fitxaM[1][6] = 0;
		this._fitxaM[1][7] = new Fitxa(1, 7, true, true, false);

		this._fitxaM[2][0] = new Fitxa(2, 0, true, true, false);
		this._fitxaM[2][1] = 0;
		this._fitxaM[2][2] = new Fitxa(2, 2, true, true, false);
		this._fitxaM[2][3] = 0;
		this._fitxaM[2][4] = new Fitxa(2, 4, true, true, false);
		this._fitxaM[2][5] = 0;
		this._fitxaM[2][6] = new Fitxa(2, 6, true, true, false);
		this._fitxaM[2][7] = 0;

		this._fitxaM[3][0] = 0;
		this._fitxaM[3][1] = 0;
		this._fitxaM[3][2] = 0;
		this._fitxaM[3][3] = 0;
		this._fitxaM[3][4] = 0;
		this._fitxaM[3][5] = 0;
		this._fitxaM[3][6] = 0;
		this._fitxaM[3][7] = 0;

		this._fitxaM[4][0] = 0;
		this._fitxaM[4][1] = 0;
		this._fitxaM[4][2] = 0;
		this._fitxaM[4][3] = 0;
		this._fitxaM[4][4] = 0;
		this._fitxaM[4][5] = 0;
		this._fitxaM[4][6] = 0;
		this._fitxaM[4][7] = 0;

		this._fitxaM[5][0] = 0;
		this._fitxaM[5][1] = new Fitxa(5, 1, false, true, false);
		this._fitxaM[5][2] = 0;
		this._fitxaM[5][3] = new Fitxa(5, 3, false, true, false);
		this._fitxaM[5][4] = 0;
		this._fitxaM[5][5] = new Fitxa(5, 5, false, true, false);
		this._fitxaM[5][6] = 0;
		this._fitxaM[5][7] = new Fitxa(5, 7, false, true, false);

		this._fitxaM[6][0] = new Fitxa(6, 0, false, true, false);
		this._fitxaM[6][1] = 0;
		this._fitxaM[6][2] = new Fitxa(6, 2, false, true, false);
		this._fitxaM[6][3] = 0;
		this._fitxaM[6][4] = new Fitxa(6, 4, false, true, false);
		this._fitxaM[6][5] = 0;
		this._fitxaM[6][6] = new Fitxa(6, 6, false, true, false);
		this._fitxaM[6][7] = 0;

		this._fitxaM[7][0] = 0;
		this._fitxaM[7][1] = new Fitxa(7, 1, false, true, false);
		this._fitxaM[7][2] = 0;
		this._fitxaM[7][3] = new Fitxa(7, 3, false, true, false);
		this._fitxaM[7][4] = 0;
		this._fitxaM[7][5] = new Fitxa(7, 5, false, true, false);
		this._fitxaM[7][6] = 0;
		this._fitxaM[7][7] = new Fitxa(7, 7, false, true, false);
	}

/** 
 * Esta funcion sirve para comprobar que hay por lo menos una de las fichas en el equipo del turno que puede realizar
 * un movimiento. Para cada equipo, recorre la matriz entera, comprueba que no pase de los limites, si la posicion
 * que esta mirando ahora no es un cero, es decir que esta rellena con una ficha y la ficha es del turno correspondiente,
 * entonces comprueba si uno de los destinos a la hora de mover es valido, con que un destino sea valido, el contador
 * en este caso llamado cont, aumanetara de longitud, lo comprueba tanto como para fichas normales como un pelin mas
 * abajo para las damas. Con que el contador no este a cero al acabar la funcion, devolvera true, en caso de que el 
 * contador este a cero, devolvera false.
 * */
	comprovarMoure(equipActual) {
		var cMoure = false;
		var turnoReina = false;
		var cont = [];
		if (equipActual === false) {
			console.log("equip actual es blanco");
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 8; j++) {
					if (i !== 7) {
						if (this._fitxaM[i][j] !== 0) {
							if (this._fitxaM[i][j].isWhite === true) {
								if(j === 0) {
									if (this._fitxaM[i+1][j+1] === 0) {
										cont.push(1);
									}
								} else if (j === 7) {
									if (this._fitxaM[i+1][j-1] === 0) {
										cont.push(1);
									}
								} else {
									if (this._fitxaM[i+1][j+1] === 0 || this._fitxaM[i+1][j-1] === 0) {
										cont.push(1);
									}
								}
							}
						}
					}
				}
			}
		} else {
			console.log("equip actual es rosa");
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 8; j++) {
					if (i !== 0) {
						if (this._fitxaM[i][j] !== 0) {
							if (this._fitxaM[i][j].isWhite === false) {
								if (j === 0) {
									if (this._fitxaM[i-1][j+1] === 0) {
										cont.push(1);
									}
								} else if (j === 7) {
									if (this._fitxaM[i-1][j-1] === 0) {
										cont.push(1);
									}
								} else {
									if (this._fitxaM[i-1][j+1] === 0 || this._fitxaM[i-1][j-1] === 0) {
										cont.push(1);
									}
								}
							}
						}
					}
				}
			}
		}

		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				if (equipActual === false) {
					if (this._fitxaM[i][j] !== 0) {
						if (this._fitxaM[i][j].isDama === true && this._fitxaM[i][j].isWhite === true) {
							turnoReina = this.comprovarMoureFitxa(equipActual, i, j);
							if (turnoReina === true) {
								cont.push(1);
							}
						}
					}
				} else {
					if (this._fitxaM[i][j] !== 0) {
						if (this._fitxaM[i][j].isDama === true && this._fitxaM[i][j].isWhite === false) {
							turnoReina = this.comprovarMoureFitxa(equipActual, i, j);
							if (turnoReina === true) {
								cont.push(1);
							}
						}
					}
				}
			}
		}

		console.log(cont.length);
		if (cont != 0) {
			cMoure = true;
		}
		return cMoure;
	}

/** 
 * Esta funcion sirve para comprobar que hay por lo menos una de las fichas en el equipo del turno que puede matar. Para
 * cada equipo, recorre la matriz entera, comprueba que no pase de los limites, si la posicion que esta mirando ahora no es 
 * un cero, es decir que esta rellena con una ficha y la ficha es del turno correspondiente, entonces comprueba si una de
 * las (dos si es ficha, cuatro si es dama) direcciones es licita. En caso de que por lo menos unos sea cierto, el 
 * contador se aumentara, si al llegar al final el contador no es cero de devuelve true, si es cero devuelve false.
 * */
	comprovarMatar(equipActual) {
		var cMatar = false;
		var cont = [];
		var turnoReina = false;
		if (equipActual === false) {
			console.log("equip actual es blanco matar");
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 8; j++) {
					if (i !== 7) {
						if (this._fitxaM[i][j] !== 0) {
							if (this._fitxaM[i][j].isWhite === true) {
								if(j === 0) {
									if (this._fitxaM[i+1][j+1] !==0) {
										if ((i-2 < 0 && i+2 > 7) &&( j+2 > 7 || j-2 < 0)) {
											if (this._fitxaM[i+1][j+1].isWhite === false && this._fitxaM[i+2][j+2] === 0) {
												cont.push(1);
											}
										}
									}
								} else if (j === 7) {
									if (this._fitxaM[i+1][j-1] !==0) {
										if (this._fitxaM[i+1][j-1].isWhite === false && this._fitxaM[i+2][j-2] === 0) {
											cont.push(1);
										}
									}
								} else {
									if (this._fitxaM[i+1][j+1] !==0 || this._fitxaM[i+1][j-1] !==0) {
										if ((i-2 < 0 && i+2 > 7) &&( j+2 > 7 || j-2 < 0)) { 
											if ((this._fitxaM[i+1][j+1].isWhite === false && this._fitxaM[i+2][j+2] === 0) || (this._fitxaM[i+1][j-1].isWhite === false && this._fitxaM[i+2][j-2] === 0)) {
												cont.push(1);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		} else {
			console.log("equip actual es rosa matar");
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 8; j++) {
					if (i !== 0) {
						if (this._fitxaM[i][j] !== 0) {
							if (this._fitxaM[i][j].isWhite === false) {
								if(j === 0) {
									if (this._fitxaM[i-1][j+1] !==0) {
										if (this._fitxaM[i-1][j+1].isWhite === true && this._fitxaM[i-2][j+2] === 0) {
											cont.push(1);
										}
									}
								} else if (j === 7) {
									if (this._fitxaM[i-1][j-1] !==0) {
										if ((i-2 < 0 && i+2 > 7) &&( j+2 > 7 || j-2 < 0)) {
											if (this._fitxaM[i-1][j-1].isWhite === true && this._fitxaM[i-2][j-2] === 0) {
												cont.push(1);
											}
										}
									}
								} else {
									if (this._fitxaM[i-1][j+1] !==0 || this._fitxaM[i-1][j-1] !==0) { 
										if ((i-2 < 0 && i+2 > 7) &&( j+2 > 7 || j-2 < 0)) {
											if ((this._fitxaM[i-1][j+1].isWhite === true && this._fitxaM[i-2][j+2] === 0) || (this._fitxaM[i-1][j-1].isWhite === true && this._fitxaM[i-2][j-2] === 0)) {
												cont.push(1);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				if (equipActual === false) {
					if (this._fitxaM[i][j] !== 0) {
						if (this._fitxaM[i][j].isDama === true && this._fitxaM[i][j].isWhite === true) {
							turnoReina = this.comprovarMatarFitxa(equipActual, i, j);
							if (turnoReina === true) {
								cont.push(1);
							}
						}
					}
				} else {
					if (this._fitxaM[i][j] !== 0) {
						if (this._fitxaM[i][j].isDama === true && this._fitxaM[i][j].isWhite === false) {
							turnoReina = this.comprovarMatarFitxa(equipActual, i, j);
							if (turnoReina === true) {
								cont.push(1);
							}
						}
					}
				}
			}
		}

		console.log(cont.length);
		if (cont != 0) {
			cMatar = true;
		}
		return cMatar;
	}

/** 
 * Comprueba si en la celda en la que se ha clicado, pertenece al equipo que esta jugando actualmente.
 * */
	comprovarOrigen(equipActual, origenX, origenY) {
		var cOrigen = false;

		if (origenX < 0 || origenX > 7 || origenY < 0 || origenY > 7) {
			return false;
		}

		if (this._fitxaM[origenX][origenY] != 0) {
			if (equipActual === false) {
				if (this._fitxaM[origenX][origenY].isWhite === true) {
					cOrigen = true;
				}
			} else {
				if (this._fitxaM[origenX][origenY].isWhite === false) {
					cOrigen = true;
				}
			}
		}
		return cOrigen;
	}

/** 
 * Calculo el valor de la x y la y que se encontraria en medio del destino y del origen para saber cual es la casilla
 * que se encuentra en medio. Comprueba si la celda a la que se quiere ir se encuentra vacia, si se encuentra vacia
 * comprueba si es dama para hacer o cuatro o dos comprovaciones. Una vez sabe que tiene un destino disponible, 
 * comprueba que la casilla que se encuentre en medio este ocupada por un enemigo, si se da este caso devolvera true,
 * en caso contrario, de que no encuentre ningun destino licito, devolvera false.
 * */
	comprovarDesti(matarFitxa, equipActual, origenX, origenY, destiX, destiY) {
		var cDesti = false;

		var mediaX = Math.floor((parseInt(origenX) + parseInt(destiX))/2);
		var mediaY = Math.floor((parseInt(origenY) + parseInt(destiY))/2);

		if (this._fitxaM[destiX][destiY] === 0) {
			if (this._fitxaM[origenX][origenY].isDama === true) {
				console.log("la ficha del origen era dama");
				console.log(origenX, origenY, destiX, destiY);
				if ((destiX - origenX == 1 ) && (destiY - origenY == 1 || destiY - origenY == -1) && matarFitxa == false) {
					cDesti = true;
				} else if ((destiX - origenX == 2 ) && (destiY - origenY == 2 || destiY - origenY == -2)) {
					if(this._fitxaM[mediaX][mediaY] != 0) {
						if (matarFitxa == true) {
							cDesti = true;
						}
					}
				} else if ((destiX - origenX == -1 ) && (destiY - origenY == 1 || destiY - origenY == -1) && matarFitxa == false) {
					cDesti = true;
				} else if ((destiX - origenX == -2 ) && (destiY - origenY == 2 || destiY - origenY == -2)) {
					if(this._fitxaM[mediaX][mediaY] != 0) {
						if (matarFitxa == true) {
							cDesti = true;
						}
					}
				}
			} else {
				if (equipActual === false) {
					if ((destiX - origenX == 1 ) && (destiY - origenY == 1 || destiY - origenY == -1) && matarFitxa == false) {
						cDesti = true;
					} else if ((destiX - origenX == 2 ) && (destiY - origenY == 2 || destiY - origenY == -2)) {
						if(this._fitxaM[mediaX][mediaY] != 0) {
							if (matarFitxa == true) {
								cDesti = true;
							}
						}
					}
				} else {
					if ((destiX - origenX == -1 ) && (destiY - origenY == 1 || destiY - origenY == -1) && matarFitxa == false) {
						cDesti = true;
					} else if ((destiX - origenX == -2 ) && (destiY - origenY == 2 || destiY - origenY == -2)) {
						if(this._fitxaM[mediaX][mediaY] != 0) {
							if (matarFitxa == true) {
								cDesti = true;
							}
						}
					}
				}
			}
		}
		
		return cDesti;
	}

/** 
 * Comprueba que el que mata es dama o no, tambien comprueba que el que es asesinado es dama o no, lo elimina tanto
 * de la interficie del HTML como de la matriz. Cambia los fichas del origen, de la media y del destino.
 * */
	matar(equipActual, origenX, origenY, destiX, destiY) {
		var matar = false;

		var mediaX = Math.floor((parseInt(origenX) + parseInt(destiX))/2);
		var mediaY = Math.floor((parseInt(origenY) + parseInt(destiY))/2);


		if (this._fitxaM[origenX][origenY].isDama === true) {
			if (destiX-origenX === 1) {
				matar = true;
			} else {
				if(this._fitxaM[mediaX][mediaY] === 0) {
					matar = true;
				} else {
					console.log(origenX + " " +  origenY);
					console.log(destiX + " " +  destiY);
					console.log(mediaX + " " +  mediaY);
	
					if (equipActual == false) {
						document.getElementById("r"+origenX+"c"+origenY).classList.remove("token2R");
						if (this._fitxaM[mediaX][mediaY] !== 0) {
							if (this.fitxaM[mediaX][mediaY].isDama === true && this.fitxaM[mediaX][mediaY].isWhite === false) {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token1R");
							} else {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token1");
							}
						}
						document.getElementById("r"+destiX+"c"+destiY).classList.add("token2R");
					} else {
						document.getElementById("r"+origenX+"c"+origenY).classList.remove("token1R");
						if (this._fitxaM[mediaX][mediaY] !== 0) {
							if (this.fitxaM[mediaX][mediaY].isDama === true && this.fitxaM[mediaX][mediaY].isWhite === true) {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token2R");
							} else {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token2");
							}
						}
						document.getElementById("r"+destiX+"c"+destiY).classList.add("token1R");
					}

					this._fitxaM[destiX][destiY] = this._fitxaM[origenX][origenY];
					this._fitxaM[mediaX][mediaY] = 0;
					this._fitxaM[origenX][origenY] = 0;
				}
			}
		} else {
			if (destiX-origenX === 1) {
				matar = true;
			} else {
				if(this._fitxaM[mediaX][mediaY] === 0) {
					matar = true;
				} else {
					console.log(origenX + " " +  origenY);
					console.log(destiX + " " +  destiY);
					console.log(mediaX + " " +  mediaY);
	
					if (equipActual == false) {
						document.getElementById("r"+origenX+"c"+origenY).classList.remove("token2");
						if (this._fitxaM[mediaX][mediaY] !== 0) {
							if (this.fitxaM[mediaX][mediaY].isDama === true && this.fitxaM[mediaX][mediaY].isWhite === false) {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token1R");
							} else {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token1");
							}
						}
						document.getElementById("r"+destiX+"c"+destiY).classList.add("token2");
					} else {
						document.getElementById("r"+origenX+"c"+origenY).classList.remove("token1");
						if (this._fitxaM[mediaX][mediaY] !== 0) {
							if (this.fitxaM[mediaX][mediaY].isDama === true && this.fitxaM[mediaX][mediaY].isWhite === true) {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token2R");
							} else {
								document.getElementById("r"+mediaX+"c"+mediaY).classList.remove("token2");
							}
						}
						document.getElementById("r"+destiX+"c"+destiY).classList.add("token1");
					}

					this._fitxaM[destiX][destiY] = this._fitxaM[origenX][origenY];
					this._fitxaM[mediaX][mediaY] = 0;
					this._fitxaM[origenX][origenY] = 0;
				}
			}
		}

		return matar;
	}

/** 
 * Comprueba que el que avanca es dama o no, cambia los valores tanto del HTML como de la matriz en el origen y en 
 * el destino
 * */
	avancar(equipActual, origenX, origenY, destiX, destiY) {
		var avancar = false;

		if (this._fitxaM[destiX][destiY] === 0) {
			if (this._fitxaM[origenX][origenY].isDama === true) {
				console.log("retrocede y es dama" + this._fitxaM[origenX][origenY]);
				if (equipActual == false) {
					document.getElementById("r"+origenX+"c"+origenY).classList.remove("token2R");
	
					document.getElementById("r"+destiX+"c"+destiY).classList.remove("token1");
					document.getElementById("r"+destiX+"c"+destiY).classList.add("token2R");
				} else {
					document.getElementById("r"+origenX+"c"+origenY).classList.remove("token1R");
	
					document.getElementById("r"+destiX+"c"+destiY).classList.remove("token2");
					document.getElementById("r"+destiX+"c"+destiY).classList.add("token1R");
				}
			} else {
				console.log("retrocede y se supone que no es dama" + this._fitxaM[origenX][origenY]);
				if (equipActual == false) {
					document.getElementById("r"+origenX+"c"+origenY).classList.remove("token2");
	
					document.getElementById("r"+destiX+"c"+destiY).classList.remove("token1");
					document.getElementById("r"+destiX+"c"+destiY).classList.add("token2");
				} else {
					document.getElementById("r"+origenX+"c"+origenY).classList.remove("token1");
	
					document.getElementById("r"+destiX+"c"+destiY).classList.remove("token2");
					document.getElementById("r"+destiX+"c"+destiY).classList.add("token1");
				}
			}

			this._fitxaM[destiX][destiY] = this._fitxaM[origenX][origenY];
			this._fitxaM[origenX][origenY] = 0;
			
		} else {
			avancar = true;
		}

		return avancar;
	}

/** 
 * 	Comprueba si la ficha del destino pasado por el parametro ha llegado al final del tablero.
 * */
	comprovarFinal(equipActual, destiX) {
		var cFinal = false;
		destiX = parseInt(destiX);
		console.log(destiX);

		if (equipActual === false) {
			if (destiX === 7) {
				cFinal = true;
			}
		} else {
			if (destiX === 0) {
				cFinal = true;
			}
		}
		return cFinal;
	}

/** 
 * Transforma en reina a la ficha pasada por parametro segun el equipo del turno que se encuentre actualmente.
 * */
	tornarReina(equipActual, destiX, destiY) {
		this._fitxaM[destiX][destiY].isDama = true;

		if (equipActual === false) {
			document.getElementById("r"+destiX+"c"+destiY).classList.remove("token2");
			document.getElementById("r"+destiX+"c"+destiY).classList.add("token2R");
		} else {
			document.getElementById("r"+destiX+"c"+destiY).classList.remove("token1");
			document.getElementById("r"+destiX+"c"+destiY).classList.add("token1R");
		}

	}

/** 
 * Comprueba si al equipo del turno actual le queda alguna ficha viva.
 * */
	comprovarFitxes(equipActual, qf1, qf2){
		var cFitxes = false;
		if (equipActual === false) {
			if (qf1 === 0) {
				cFitxes = true;
			}
		} else {
			if (qf2 === 0) {
				cFitxes = true;
			}
		}
		return cFitxes;
	}

/** 
 * Comprueba si la ficha de la ubicacion pasada por parametro, es capaz de moverse, si es una dama hace cuatro
 * comprobaciones, si es ficha hace dos comprobaciones. Con que uno de los movimientos sea valido, devolvera 
 * true.
 * */
	comprovarMoureFitxa(equipActual, origenX, origenY) {
		var cMoureFitxa = false;

		origenY = parseInt(origenY);
		origenX = parseInt(origenX);

		if (this._fitxaM[origenX][origenY].isDama === true) {
			if (origenX !== 7) {
				if (origenY === 0) {
					if (this._fitxaM[origenX+1][origenY+1] === 0) {
						cMoureFitxa = true;
					}
				} else if (origenY === 7) {
					if (this._fitxaM[origenX+1][origenY-1] === 0) {
						cMoureFitxa = true;
					}
				} else {
					if (this._fitxaM[origenX+1][origenY+1] === 0 || this._fitxaM[origenX+1][origenY-1] === 0) {
						cMoureFitxa = true;
					}
				}
			} else if (origenX !== 0) {
				if (origenY === 0) {
					if (this._fitxaM[origenX-1][origenY+1] === 0) {
						cMoureFitxa = true;
					}
				} else if (origenY === 7) {
					if (this._fitxaM[origenX-1][origenY-1] === 0) {
						cMoureFitxa = true;
					}
				} else {
					if (this._fitxaM[origenX-1][origenY+1] === 0 || this._fitxaM[origenX-1][origenY-1] === 0) {
						cMoureFitxa = true;
					}
				}
			}
		} else {
			if (equipActual === false) {
				if (origenX !== 7) {
					if (origenY === 0) {
						if (this._fitxaM[origenX+1][origenY+1] === 0) {
							cMoureFitxa = true;
						}
					} else if (origenY === 7) {
						if (this._fitxaM[origenX+1][origenY-1] === 0) {
							cMoureFitxa = true;
						}
					} else {
						if (this._fitxaM[origenX+1][origenY+1] === 0 || this._fitxaM[origenX+1][origenY-1] === 0) {
							cMoureFitxa = true;
						}
					}
				}
			} else {
				if (origenX !== 0) {
					if (origenY === 0) {
						if (this._fitxaM[origenX-1][origenY+1] === 0) {
							cMoureFitxa = true;
						}
					} else if (origenY === 7) {
						if (this._fitxaM[origenX-1][origenY-1] === 0) {
							cMoureFitxa = true;
						}
					} else {
						if (this._fitxaM[origenX-1][origenY+1] === 0 || this._fitxaM[origenX-1][origenY-1] === 0) {
							cMoureFitxa = true;
						}
					}
				}
			}
		}

		
		return cMoureFitxa;
	}

/** 
 * Comprueba si la ficha de la ubicacion pasada por parametro, es capaz de matar, si es una dama hace cuatro
 * comprobaciones, si es ficha hace dos comprobaciones. Con que uno de los asesinatos sea valido, devolvera
 * true.
 * */
	comprovarMatarFitxa(equipActual, origenX, origenY) {
		var cMatarFitxa = false;

		origenY = parseInt(origenY);
		origenX = parseInt(origenX);

		if (this._fitxaM[origenX][origenY].isDama === true) {
			console.log("es dama y podria matar");
			console.log(this._fitxaM[origenX][origenY]);
			
			if (equipActual === false) {
				if (origenY === 0 || origenY === 1) {
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					}
				} else if (origenY === 6 || origenY === 7) {
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					}
				} else {
					//AHORA ESTA COPIADO SOLO DEL DE ARRIBA
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === false) {
								cMatarFitxa = true;
							}
						}
					}
				}
			} else {
				if (origenY === 0 || origenY === 1) {
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					}
				} else if (origenY === 6 || origenY === 7) {
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					}
				} else {
					//AHORA ESTA COPIADO SOLO DEL DE ARRIBA
					if (origenX === 0 || origenX === 1) {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else if (origenX === 6 || origenX === 7) {
						if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					} else {
						if (this._fitxaM[origenX+1][origenY-1] != 0 && this._fitxaM[origenX+2][origenY-2] === 0) {
							if (this._fitxaM[origenX+1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY-1] != 0 && this._fitxaM[origenX-2][origenY-2] === 0) {
							if (this._fitxaM[origenX-1][origenY-1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX+1][origenY+1] != 0 && this._fitxaM[origenX+2][origenY+2] === 0) {
							if (this._fitxaM[origenX+1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						} else if (this._fitxaM[origenX-1][origenY+1] != 0 && this._fitxaM[origenX-2][origenY+2] === 0) {
							if (this._fitxaM[origenX-1][origenY+1].isWhite === true) {
								cMatarFitxa = true;
							}
						}
					}
				}

			}
		} else {
			if (equipActual === false) {
				if (origenX !== 7) {
					if (this._fitxaM[origenX][origenY] !== 0) {
						if (this._fitxaM[origenX][origenY].isWhite === true) {
							if(origenY === 0) {
								if (this._fitxaM[origenX+1][origenY+1] !==0) {
									if (this._fitxaM[origenX+1][origenY+1].isWhite === false && this._fitxaM[origenX+2][origenY+2] === 0) {
										cMatarFitxa = true;
									}
								}
							} else if (origenY === 7) {
								if (this._fitxaM[origenX+1][origenY-1] !==0) {
									if (this._fitxaM[origenX+1][origenY-1].isWhite === false && this._fitxaM[origenX+2][origenY-2] === 0) {
										cMatarFitxa = true;
									}
								}
							} else {
								if (this._fitxaM[origenX+1][origenY+1] !== 0 || this._fitxaM[origenX+1][origenY-1] !==0) {
									if (origenX != 6) {
										if ((this._fitxaM[origenX+1][origenY+1].isWhite === false && this._fitxaM[origenX+2][origenY+2] === 0) || (this._fitxaM[origenX+1][origenY-1].isWhite === false && this._fitxaM[origenX+2][origenY-2] === 0)) {
											cMatarFitxa = true;
										}
									}
								}
							}
						}
					}
				}
			} else {
				if (origenX !== 0) {
					if (this._fitxaM[origenX][origenY] !== 0) {
						if (this._fitxaM[origenX][origenY].isWhite === false) {
							if(origenY === 0) {
								if (this._fitxaM[origenX-1][origenY+1] !==0) {
									if (this._fitxaM[origenX-1][origenY+1].isWhite === true && this._fitxaM[origenX-2][origenY+2] === 0) {
										cMatarFitxa = true;
									}
								}
							} else if (origenY === 7) {
								if (this._fitxaM[origenX-1][origenY-1] !==0) {
									if (this._fitxaM[origenX-1][origenY-1].isWhite === true && this._fitxaM[origenX-2][origenY-2] === 0) {
										cMatarFitxa = true;
									}
								}
							} else {
								if (this._fitxaM[origenX-1][origenY+1] !==0 || this._fitxaM[origenX-1][origenY-1] !==0) { 
									if (origenX !== 1) {
										if ((this._fitxaM[origenX-1][origenY+1].isWhite === true && this._fitxaM[origenX-2][origenY+2] === 0) || (this._fitxaM[origenX-1][origenY-1].isWhite === true && this._fitxaM[origenX-2][origenY-2] === 0)) {
											cMatarFitxa = true;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return cMatarFitxa;
	}

/** 
 * Setters y getters de las variables.
*/
	get fitxaM() {
		return this._fitxaM;
	}

	set fitxaM(fitxaM) {
		this._fitxaM = fitxaM;
	}

	get origenX() {
		return this._origenX;
	}

	set origenX(origenX) {
		this._origenX = origenX;
	}

	get origenY() {
		return this._origenY;
	}

	set origenY(origenY) {
		this._origenY = origenY;
	}

	get destiX() {
		return this._destiX;
	}

	set destiX(destiX) {
		this._destiX = destiX;
	}

	get destiY() {
		return this._destiY;
	}

	set destiY(destiY) {
		this._destiY = destiY;
	}

}