// SCENE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*
// CREATE OBJECT
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//  RENDERING
function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
	renderer.render( scene, camera );
}
animate();
*/

// CREATE OBJECT
const sphereGeometry = new THREE.SphereGeometry();
const cubeGeometry = new THREE.CubeGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const sphere1 = new THREE.Mesh( sphereGeometry, material );
const sphere2 = new THREE.Mesh( sphereGeometry, material );
const cube3 = new THREE.Mesh( cubeGeometry, material );

sphere1.position.x = -0.5;
sphere2.position.x = 0.5;
cube3.position.y = 0.5;

var sphere1BSP = new ThreeBSP(sphere1);
var sphere2BSP = new ThreeBSP(sphere2);
var cube3BSP = new ThreeBSP(cube3);

var resultBSP = sphere1BSP.union(sphere2BSP);
resultBSP = resultBSP.subtract(cube3BSP);

var result = resultBSP.toMesh();
result.geometry.computeFaceNormals();
result.geometry.computeVertexNormals();

scene.add(result);

camera.position.z = 5;

//  RENDERING
function animate() {
	requestAnimationFrame( animate );

    result.rotation.x += 0.01;
    result.rotation.y += 0.01;
    
	renderer.render( scene, camera );
}
animate();