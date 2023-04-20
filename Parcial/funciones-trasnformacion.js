
/**
 * 
 * @param {geomteria del objeto} geom 
 * @param {Escala en x} Sx 
 * @param {Escala en y} Sy 
 * @param {Escala en z} Sz 
 * de salida, es la geometria del objeto escalado
 */
function EscaladoReal(geom,Sx,Sy,Sz){

    geom.scale(Sx,Sy,Sz);
}

/**
 * 
 * @param {geomteria del objeto} geom 
 * @param {angulo en x} Rx 
 * @param {angulo en y} Ry 
 * @param {angulo en z} Rz 
 *  de salida, es la geometria del objeto rotado
 */

function RotacionReal(geom,Rx,Ry,Rz){

    geom.rotateX(Rx);
    geom.rotateY(Ry);
    geom.rotateZ(Rz);
}

/**
 * 
 * @param {geomteria del objeto} geom 
 * @param {Traslacion en x} Tx 
 * @param {Traslacion en y} Ty 
 * @param {Traslacion en z} Tz 
 * de salida, es la geometria trasladada
 */
function TraslacionReal(geom,Tx,Ty,Tz){

    geom.translate(Tx,Ty,Tz);
}

