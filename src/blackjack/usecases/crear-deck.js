import _ from "underscore";

// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales ejemplo : ['A','J','Q','K'];
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.lenght === 0 ) throw new Error('tipos de carta es obligatorio como un arreglo de String');
    if ( !tiposEspeciales || tiposEspeciales.lenght === 0 ) throw new Error('tipos Especiales es obligatorio como un arreglo de String');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}