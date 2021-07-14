// Importing Three JS

import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

// import Orbit Conrolls

import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/GLTFLoader';


// Creating a new Three JS Scene

const scene = new THREE.Scene();


// Creating a Three JS Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)


// Adding a Renerer and apling it to an canvas
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background'),
});

// Changing the Renderer Ratios
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

// Set the Camera Posititon away from the Center
camera.position.setZ(5);

// Render the Scene we created with the Camera
// renderer.render( scene, camera );

// Add a Object

// Create Random Stars

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial( {color: 0xffffff });
    const star = new THREE.Mesh( geometry, material );

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 1000 ));
    
    star.position.set(x, y, z);
    scene.add(star);
}

Array(1000).fill().forEach(addStar);





// Create lighting

const pointLight = new THREE.PointLight(0xf2c811, 1); // the 0x is to say that you are useing a HEX number not dec

pointLight.position.set(5,7,7);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);


scene.add(pointLight, ambientLight);


// Add the Light Helper and Gridhelper

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);









// Load a GLTF Model

const loader = new GLTFLoader();
var satelit;

loader.load( './assets/3d-model/Astronaut.glb', function ( gltf ) {
    
	scene.add( gltf.scene );
    satelit = gltf.scene;

    
    
} );




// normaly all the time the Render needs to be called again renderer.render( scene, camera );
// Thats why you call the animation function once 

// Add the Orbit Controls

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render(scene, camera)
}

animate();