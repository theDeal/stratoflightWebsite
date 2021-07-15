// Importing Three JS

import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

// import Orbit Conrolls

import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/GLTFLoader';

// Import GSAP


// Creating a new Three JS Scene

const scene = new THREE.Scene();


// Creating a Three JS Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)


// Adding a Renerer and apling it to an canvas
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background'),
    // alpha: true,
});

// Changing the Renderer Ratios
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );

// Set the Camera Posititon away from the Center
camera.position.setY(100);

// Render the Scene we created with the Camera
// renderer.render( scene, camera );

// Add a Object

// Create Random Stars

// function addStar() {
//     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//     const material = new THREE.MeshStandardMaterial( {color: 0xffffff });
//     const star = new THREE.Mesh( geometry, material );

//     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 1000 ));
    
//     star.position.set(x, y, z);
//     scene.add(star);
// }

// Array(1000).fill().forEach(addStar);








const ambientLight = new THREE.AmbientLight(0xf1ebc8, 0.5);


scene.add(ambientLight);


// Add the Light Helper and Gridhelper

const Gridhelper = new THREE.GridHelper(200, 5);
scene.add(Gridhelper);



const pointLight = new THREE.PointLight(0xf1ebc8, 1); // the 0x is to say that you are useing a HEX number not dec
pointLight.position.set(20,-5,4);

const redpointLight = new THREE.PointLight(0xff2f00, 1)
redpointLight.position.set(20, 20, 0);

const bluepointLight = new THREE.PointLight(0x0015ff, 1)
bluepointLight.position.set(20, 20, 20);

const yellow = new THREE.PointLight(0xffff00, 0.3)
yellow.position.set(-20, 8, -20);

const lightHelper = new THREE.PointLightHelper(yellow);


scene.add(lightHelper, pointLight, redpointLight, bluepointLight, yellow);





// Load a GLTF Model

const loader = new GLTFLoader();
var ballon;
let startanimation = gsap.timeline();

loader.load( './assets/3d-model/ballon-groß02.gltf', function ( gltf ) {
    
	scene.add( gltf.scene );
    ballon = gltf.scene;
    ballon.scale.set(0.1,0.1,0.1);
    ballon.position.set(0, 0, 0);

    // Calling Animation
    startaniballon();
    
}, undefined, function ( error ) {

	console.error( error );

} );


function startaniballon() {
    startanimation.to(ballon.scale, {x: 1, y: 1, z: 1, duration: 2, ease: Power1})
    startanimation.to(camera.position, {x: 0, z: 50, y: 20, duration: 2, ease: Power1}, "-=2");
    startanimation.to(ballon.rotation, {z: 0.5, duration: 2, ease: Power1}, "-=1");
    startanimation.to(camera.position, {x: 20, z: 50, y: 20, duration: 2, ease: Power1}, "-=2");
    startanimation.to(camera.position, {x: 10, z: 25, y: 5, duration: 2, ease: Power1}, "-=2");
    startanimation.to(camera.position, {x: 10, z: 25, y: -5, duration: 2, ease: Power1}, "-=2");
    startanimation.to(ballon.position, {y: -10, x: 8, z: 8, duration: 2, ease: Power1}, "-=1");
}



document.getElementById("scene1").addEventListener("click", () =>{
    scene2();
})


function scene1() {
    startanimation.to(ballon.rotation, {y: -0.5, duration: 2});
    startanimation.to(ballon.position, {y: -18,x: 8, z: 8, duration: 2}, "-=2");
    startanimation.to(camera.position, {x: 10, z: 5, y: 0, duration: 2, ease: Power1}, "-=2");
}

function scene2() {
    // startanimation.to(ballon.position, {y: -0,x: 8, z: 8, duration: 2}, "-=2");
    startanimation.to(camera.position, {x: 12, z: 6, y: 3, duration: 2, ease: Power1});
    startanimation.to(ballon.position, {y: -2,x: 8, z: 8, duration: 2, ease: Power1}, "-=2");
}


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