// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    Cubo = [];   // Definir un array unidimensional

    Delta=10;
    dim=4;
    Angulo= (Math.PI)/2;
   
    for( i=0; i<3; i++) //Estructura de repitición
    {
     
      if (i==0)
        {
         Cubo.push(cubo(dim, dim, dim, 0xFFFFFF, 'Standard', false));
         Cubo[i].rotateZ(Angulo);
         Cubo[i].translateX(Delta);      
        }
      if (i==1)
        {
         Cubo.push(cubo(dim, dim, dim, 0x82E09D, 'Standard', false));
         Cubo[i].rotateX(Angulo);
         Cubo[i].translateY(Delta);     
        }
      if (i==2)
        {
         Cubo.push(cubo(dim, dim, dim, 0x828AE0, 'Standard', false));
         Cubo[i].rotateY(Angulo);
         Cubo[i].translateZ(Delta);     
        }
         // los metodos de translate que utilice son solo para mover una coordenada de la posicion del cubo, independiente de las otros valores de variables, se movera o X, Y o Z
         // los metodos de rotate tambien rotaran con respecto a una coordenada del eje 
    }
    

    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFFFF); //  Luz proveniente de un punto en el espacio, 
                                        //  semejante al sol.
    light.position.set(10, 30, 20);             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(30, 20, 40);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);

    // position and point the camera to the center of the scene
    camera.position.set(30, 20, 40);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);


}