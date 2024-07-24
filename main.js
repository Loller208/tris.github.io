import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Croci = [
  'Croci/Croce00.glb', 'Croci/Croce01.glb', 'Croci/Croce02.glb',
  'Croci/Croce10.glb', 'Croci/Croce11.glb', 'Croci/Croce12.glb',
  'Croci/Croce20.glb', 'Croci/Croce21.glb', 'Croci/Croce22.glb'
];

const Cerchi = [
  'Cerchi/Cerchio00.glb', 'Cerchi/Cerchio01.glb', 'Cerchi/Cerchio02.glb',
  'Cerchi/Cerchio10.glb', 'Cerchi/Cerchio11.glb', 'Cerchi/Cerchio12.glb',
  'Cerchi/Cerchio20.glb', 'Cerchi/Cerchio21.glb', 'Cerchi/Cerchio22.glb'
];

window.onload = function() {
    const video = document.getElementById("myvideo");    
    video.onloadedmetadata = start_processing;
    const constraints = { audio: false, video: { facingMode: { exact: "environment" } }  };
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => video.srcObject = stream )
    .catch((err) => {
        alert(err.name + ": " + err.message);    
        video.src = "marker.webm";
    });
}

function start_processing() {
    const video = document.getElementById("myvideo");
    const canvas = document.getElementById("mycanvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    video.width = video.height = 0;

    // Set up Three.js
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
    scene.add(camera);

    // Background texture
    const bgtexture = new THREE.VideoTexture(video);
    bgtexture.colorSpace = THREE.SRGBColorSpace;
    scene.background = bgtexture;

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 10);
    scene.add(light);

    // Container + Table
    const container = new THREE.Object3D();
    container.matrixAutoUpdate = false;
    scene.add(container);

    const loader = new GLTFLoader();
    loader.load('table0.glb', model => { 
        container.add(model.scene);
        //loadModels(container, Croci);
	loadModels(container, Cerchi);
    });
	/////////////////////////
	// jsartoolkit
    let arLoaded = false;
    let lastdetectiontime = 0;
    let kanjiID;
    const arController = new ARController(video, 'camera_para.dat');
    arController.onload = () => {
        camera.projectionMatrix.fromArray( arController.getCameraMatrix() );
        arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR);
        arController.loadMarker('kanji.patt', id => kanjiID = id );
        arController.addEventListener('getMarker', ev => {
            if(ev.data.marker.idPatt == kanjiID){
                fixMatrix(container.matrix, ev.data.matrixGL_RH );
                lastdetectiontime = performance.now();
            }
        });
        arLoaded = true;
    }
    // render loop
    function renderloop() {
        requestAnimationFrame( renderloop );
        if(arLoaded)
            arController.process(video);
        if(performance.now()-lastdetectiontime < 100)
            container.visible = true;
        else
            container.visible = false;
        renderer.render( scene, camera );
    }
    renderloop();
	/////////////////////////////////
}

function loadModels(container, forma) {
    const loader = new GLTFLoader();
    forma.forEach(path => {
        loader.load(path, model => {
            container.add(model.scene); // No positioning, uses model's original position
        });
    });
}

// Fix the marker matrix to compensate for Y-up models
function fixMatrix(three_mat, m) {
    three_mat.set(
        m[0], m[8], -m[4], m[12],
        m[1], m[9], -m[5], m[13],
        m[2], m[10], -m[6], m[14],
        m[3], m[11], -m[7], m[15]
    );
}
