function init() {

  // setup the scene for rendering
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  const scene = new THREE.Scene();
  let blenderModelMesh;
  let light;

  scene.background = new THREE.Color('black');
  camera.position.set(0,10,20);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  light = new THREE.ambientLight(0xffffff);
  scene.add(light);

  // var loader = new THREE.JSONLoader();
  // loader.load('../../assets/models/house/house.json', function (geometry, mat) {

  //   var mesh = new THREE.Mesh(geometry, mat[0]);
  //   mesh.castShadow = true;
  //   mesh.receiveShadow = true;

  //   // call the default render loop.
  //   loaderScene.render(mesh, camera);
  // });
  let blenderModelLoader = new THREE.GLTFLoader();

  blenderModelLoader.load('../../assets/models/house/blendermodel.gltf', (gltf) => {
    blenderModelMesh = gltf.scene;
    scene.add(blendermodelMesh);
    blenderModelMesh.position.x = 0;
    blenderModelMesh.position.y = 10;
    blenderModelMesh.position.z = 15;
  });

}