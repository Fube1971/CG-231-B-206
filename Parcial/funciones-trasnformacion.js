
/**
 * Traslacion: crea la matriz de traslacion a partir del vector vt
 * ENTRADAS: vt: vector de traslacion (arreglo de traslacion)
 * SALIDAS: matriz = MAtriz de translacion generada a partir de vt 
 */
function Traslation(Tx,Ty,Tz) {
    var matriz = new THREE.Matrix4();
    matriz.set(1, 0, 0, Tx,
            0, 1, 0, Ty,
            0, 0, 1, Tz,
            0, 0, 0, 1);
    return matriz;
}
/**
 * Escalado: crea la matriz de escalado a partir del vector vs
 * ENTRADAS: vs: vector de escalado (arreglo de escalado)
 * SALIDAS: matriz = MatrizS de translacion generada a partir de vs
 */
function Escalado(Sx,Sy,Sz) {
    var matrizS = new THREE.Matrix4();
    matrizS.set(Sx, 0, 0, 0,
            0, Sy, 0, 0,
            0, 0, Sz, 0,
            0, 0, 0, 1);
    return matrizS;
}

/**
 * Rotacion: crea matrices de rotacion a partir de vector angulito
 * ENTRADAS: angulito: arreglo con angulo en x,y,z
 * SALIDAS: matriz = MatrizRx, MatrixRy, MatrizRz. matrices rotadas en el orden x,y,z.
 */

function Rotacion(Rx,Ry,Rz) {

    var matrizRx = new THREE.Matrix4();
    var alpha = Rx;
    var csx = Math.cos(alpha);
    var ssx = Math.sin(alpha);

    matrizRx.set(1,  0, 0, 0, //rotacion en x 
                0,  csx, -ssx, 0, 
                0, ssx, csx, 0,
                0, 0, 0, 1);


    var matrizRy = new THREE.Matrix4();
    var theta = Ry;
    var csy = Math.cos(theta);
    var ssy = Math.sin(theta);

    matrizRy.set(csy,  0, ssy, 0, //rotacion en y
                0,  1, 0, 0, 
                -ssy, 0, csy, 0,
                0, 0, 0, 1);

    var matrizRz = new THREE.Matrix4();
    var beta = Rz;
    var csz = Math.cos(beta);
    var ssz = Math.sin(beta);

    matrizRz.set(csz,  -ssz, 0, 0, //rotacion en z
                ssz,  csz, 0, 0, 
                0, 0, 1, 0,
                0, 0, 0, 1);
    
    
    matrixResultado = new THREE.Matrix4();

    matrixResultado.set(1,  0, 0, 0, //matris identidad
                        0,  1, 0, 0, 
                        0, 0, 1, 0,
                        0, 0, 0, 1);

    matrixResultado.multiply(matrizRx);
    matrixResultado.multiply(matrizRy);
    matrixResultado.multiply(matrizRz);


    return  matrixResultado
        

}

/**
 * Rotacion real:rotacion en los 3 ejes y traslado 
 * ENTRADA: OBJETO: Objeto tipo THREE.line a ser rotado, angulitos = vector angulos en x,y,z,vp=(posicion inicial)
 * SALIDA: obj Actializado 
 */
/*function RotacionReal(obj,Rx,Ry,Rz){
    obj.applyMatrix(Rotacion(Rx,Ry,Rz));//Escalado del obj
}*/

function EscaladoReal(geom,Sx,Sy,Sz){

    geom.scale(Sx,Sy,Sz);


}

/**
 * Escalado real: escala y traslada
 * ENTRADA: OBJETO: Objeto tipo THREE.line a ser escaldado, vs=(Vectores escalado),vp=(posicion inicial)
 * SALIDA: obj Actializado 
 */
/*function EscaladoReal(esfera,vp,Sx,Sy,Sz){
    vt= [-vp[0],-vp[1],-vp[2]]; //Translacion al puto de origen [0,0,0]
    esfera.applyMatrix(Traslation(vt)); 
    esfera.applyMatrix(Escalado(Sx,Sy,Sz));//Escalado del obj
    esfera.applyMatrix(Traslation(vp));// Tranlacion al punto inicial 

}*/