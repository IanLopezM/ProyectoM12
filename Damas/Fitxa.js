class Fitxa{
	
	/**
	 * Este archivo de javaScript es tan solamente el modelo de la ficha, donde se especifica sus posiciones del eje X y 
	 * del eje Y en el momento que se crean, tambien tiene tres boleanos los cuales cambia su valor segun el momento de 
	 * la partida o segun el equipo al que pertenezcan.
	 */

	constructor(posX, posY, isWhite, isAlive, isDama){

		this._posX = posX;
		this._posY = posY;

		this._isWhite = isWhite;
		this._isAlive = isAlive;
		this._isDama = isDama;
	}
	
	/**
	 * Setters y getters de las variables que se encuentran declaradas en el constructor
	 */

	get posX() {
		return this._posX;
	}

	set posX(posX) {
		this._posX = posX;
	}

	get posY() {
		return this._posY;
	}

	set posY(posY) {
		this._posY = posY;
	}

	get isWhite() {
		return this._isWhite;
	}

	set isWhite(isWhite) {
		this._isWhite = isWhite;
	}

	get isAlive() {
		return this._isAlive;
	}

	set isAlive(isAlive) {
		this._isAlive = isAlive;
	}

	get isDama() {
		return this._isDama;
	}

	set isDama(isDama){
		this._isDama = isDama;
	}


}
