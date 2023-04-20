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

var geometrysphere = new THREE.SphereGeometry( R, 20, 10);
var material = new THREE.MeshBasicMaterial( {color: 0x4404f6, wireframe:true} );
var esfera = new THREE.Line( geometrysphere, material );


Sx = 1, 
Sy = 0,5;
Sz = 3;
Rx = Math.PI /2;
Ry = Math.PI;
Rz = Math.PI / 4;



EscaladoReal(geometrysphere,Sx,Sy,Sz);
//RotacionReal(esfera,Rx,Ry,Rz);







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