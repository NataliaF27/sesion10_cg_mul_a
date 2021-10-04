 // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

function cubo(x,y,z,color,material, alambrado){

    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
        case 'Basic':  cubeMaterial = new THREE.MeshBasicMaterial({color: color,wireframe: alambrado });
            break;
        case 'Standard':  cubeMaterial = new THREE.MeshStandardMaterial({color: color,wireframe: alambrado });
            break;
        case 'Physical':  cubeMaterial = new THREE.MeshPhysicalMaterial({color: color,wireframe: alambrado });
            break;
        case 'Phong':  cubeMaterial = new THREE.MeshPhongMaterial({color: color,wireframe: alambrado });
            break;
        case 'Lambert':  cubeMaterial = new THREE.MeshLambertMaterial({color: color,wireframe: alambrado });
            break;
    }

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


    // add the cube to the scene
    scene.add(cube);
    return cube;
}
function init() {
   
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);

    cube = cubo(4,4,4,0xFF0000,'Physical',false);
   // cube position
    cube.position.set(0, 0, 0);
    cube.translateY(10); 

    cube = cubo(4,4,4,0x828EE0,'Physical',false);
   // cube position
    cube.position.set(0, 0, 0);
    cube.translateX(10); 

    cube = cubo(4,4,4,0x3FC829,'Physical',false);
   // cube position
    cube.position.set(0, 0, 0);
    cube.translateZ(10); 
    // los metodos de translate que utilice son solo para mover una coordenada de la posicion 
    //del cubo, independiente de las otros valores de variables, se movera o X, Y o Z
  


    var light = new THREE.PointLight( 0xFFFF00 );  
                                         
    light.position.set( 10, 30, 20 );             
    scene.add( light );                 
    

    

    // position and point the camera to the center of the scene
    camera.position.set(30, 20, 40);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);

}