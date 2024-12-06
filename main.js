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

let dataArray = []; // Array to hold parsed data

window.onload = function() {
    // Load data
    updateData();
	
    const video = document.getElementById("myvideo");
    video.onloadedmetadata = start_processing;

    const constraints = { audio: false, video: { facingMode: { exact: "environment" } } };
    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => video.srcObject = stream)
        .catch((err) => {
            alert(err.name + ": " + err.message);
            video.src = "marker.webm";
        });
}

function loadFromLocalStorage() {
    const filename = 'data.txt';
    const data = localStorage.getItem(filename);

    if (data) {
        console.log('Loaded data from local storage:', data);
        return data;
    } else {
        console.log('No data found in local storage.');
        return '111111111';
    }
}

function updateData() {
    const localData = loadFromLocalStorage();
    if (localData) {
        dataArray = localData.split('');
        console.log('Data loaded from local storage:', dataArray);
    } else {
        fetch('data.txt')
            .then(response => response.text())
            .then(data => {
                dataArray = data.split('');
                console.log('Data fetched from server:', dataArray);
                // Optionally save this data to local storage
                localStorage.setItem('data.txt', data);
            })
            .catch(err => console.error('Error reading file:', err));
    }
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

    // jsartoolkit
    let arLoaded = false;
    let lastdetectiontime = 0;
    let kanjiID;
    const arController = new ARController(video, 'camera_para.dat');
    arController.onload = () => {
        camera.projectionMatrix.fromArray(arController.getCameraMatrix());
        arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_COLOR);
        arController.loadMarker('kanji.patt', id => kanjiID = id);
        arController.addEventListener('getMarker', ev => {
            if (ev.data.marker.idPatt == kanjiID) {
                fixMatrix(container.matrix, ev.data.matrixGL_RH);
                lastdetectiontime = performance.now();
            }
        });
        arLoaded = true;
    }

    // Render loop
    let lastUpdateTime = performance.now(); // Initialize with the current time

    function renderloop() {
        // Request the next animation frame
        requestAnimationFrame(renderloop);

        // Update data and AR controller
        updateData();
        if (arLoaded) {
            arController.process(video);
        }

        // Determine if 100 milliseconds have passed
        const currentTime = performance.now();
        if (currentTime - lastUpdateTime >= 1000) {
            // Update models and reset the last update time
            updateModels(container);
            lastUpdateTime = currentTime;
        }

        // Toggle visibility based on time since last detection
        if (currentTime - lastdetectiontime < 100) {
            container.visible = true;
        } else {
            container.visible = false;
        }

        // Render the scene
        renderer.render(scene, camera);
    }

    // Start the rendering loop
    renderloop();
}

function loadModels(container, forma, k) {
    const loader = new GLTFLoader();
    forma.forEach((path, index) => {
        loader.load(path, model => {
            if (dataArray[index] && parseInt(dataArray[index], 10) == k) {
                model.scene.visible = true; // Show the model if condition is met
            } else {
                model.scene.visible = false; // Hide the model otherwise
            }
            container.add(model.scene);
        });
    });
}

function updateModels(container) {
    // Clear existing models and reload based on new data
    container.children.forEach(child => container.remove(child));
    const loader = new GLTFLoader();
    loader.load('table0.glb', model => {
        container.add(model.scene);
    });
    loadModels(container, Croci, 0);
    loadModels(container, Cerchi, 2);
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
