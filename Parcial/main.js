var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


/*
Creacion de objeto mesh, esfera.
*/

var R = 1; // radio de la esfera

var geometrysphere = new THREE.SphereGeometry( R, 12, 13);
var material = new THREE.MeshMatcapMaterial( {color: 0xfdebba} );
var esfera = new THREE.Mesh( geometrysphere, material );

/*
Parametrizacion de variables globales
*/

Sx = 0.5,  //Escala en x
Sy = 0.5; // Escala en y
Sz = 3; // Escala en Z
Rx = -Math.PI/4; // angulo en radianes en x
Ry = Math.PI/4; // angulo en radianes y
Rz = 0; // angulo en radianes  Z


Tx = 1.5; // traslacioon en x
Ty = 2; // traslacioon en y
Tz = 1.5; // traslacioon en z


/**
 * Llamado de funciones de transformacion.
 * Lamadas con la geometria del objeto.
 */
EscaladoReal(geometrysphere,Sx,Sy,Sz); //funcion escalado
RotacionReal(geometrysphere,Rx,Ry,Rz); // funcion rotado
TraslacionReal(geometrysphere, Tx, Ty, Tz); // funcion traslacion

//Adicionar a esfera a la escena
scene.add( esfera );


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();