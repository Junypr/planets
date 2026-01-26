import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from "three.interactive";
import {Group, Tween, Easing} from "@tweenjs/tween.js";


// TODO:
// allow camera orbit
// add links --- raycasting
// add different camera views for each planet
// add a "sun" or "star" and lens flare / bloom / other lighting effects
// add planets
// each planet needs associated with it a camera view and a specific html tag

// for each planet, add a camera view
// create a function that tweens between current camera and chosen camera
// add text as a layer to each planet's camera
// help?
// use CSS2Drenderer to add text

// nvm just check for each planet if our camera position and target are close enough then show the text lol.
// probably easier to just constantly check for this sob.
// or do ray tracing??? check if the object is very close or not ig



function main() {

    function makePlanet(radius, color, x, y, z, id) {

        const geometry = new THREE.SphereGeometry(radius);
        const material = new THREE.MeshToonMaterial({color});
        const planet = new THREE.Mesh(geometry, material);

        scene.add(planet);

        planet.position.x = x;
        planet.position.y = y;
        planet.position.z = z;
        planet.radius = radius;

        planet.text_element = document.getElementById(id);
        planet.camera_pos = {x: planet.position.x, y: planet.position.y, z: planet.position.z + 1.6*radius};

        planet.addEventListener("click", (event) => {
            event.stopPropagation();
            console.log(`${id} was clicked, moving to ${planet.position.x}, ${planet.position.y}`);
            tweenTo(planet.camera_pos, planet.position);
            planet.text_element.style.display = "block";
        });

        interactionManager.add(planet);

        return planet;
    }

    function tweenTo(camera_pos, new_target) {
        controls.enabled = false;

        new Tween(controls.target)
            .to(new_target)
            .onUpdate(() => controls.update())
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .onComplete(() => controls.enabled = true)
            .start();

        new Tween(camera.position)
            .to(camera_pos)
            .onUpdate(() => {
                    controls.update();
            })
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .start();

    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render(time) {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        planets.forEach((planet, ndx) => {
            const speed = 0.1 + ndx * .01;
            const rot = time * speed;
            planet.rotation.x = rot;
            planet.rotation.y = rot;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);

        show_text();

        controls.update();
        interactionManager.update();
        Tweens.update();
    }

    function show_text() {
        planets.forEach((planet, ndx) => {
            if (controls.target.x == planet.position.x
                && camera.position.z >= planet.radius + planet.position.z
                && camera.position.z <= 2.6*planet.radius + planet.position.z) {
                planet.text_element.style.display = "block";
                planet.text_element.style.opacity = Math.min(1.3 - Math.abs(camera.position.z - 1.6*planet.radius - planet.position.z)/planet.radius*1.3, 1)
                // console.log(planet.text_element.style.opacity)
            } else {
                planet.text_element.style.display = "None";
            }
        });
    }

    function add_light() {
        const color = 0xFFFFFF;
        const intensity = 10;
        const light = new THREE.PointLight(color, intensity, 0, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        const fill_light = new THREE.AmbientLight(0x404040, 1);
        scene.add(fill_light);
    }

    const Tweens = new Group();

    const colors = [0x341b5f, 0xec13a4, 0xf5e612, 0x6839eb, 0x5ed9f2]
    // # purple magenta yellow

    const canvas = document.querySelector("#c");
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    const main_camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    let camera = main_camera;
    const original_camera_pos = {x: 0, y:0, z:30};
    camera.position.set(original_camera_pos.x, original_camera_pos.y, original_camera_pos.z);
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(colors[0]);
    const interactionManager = new InteractionManager(renderer, camera, renderer.domElement);

    const planets = [
        makePlanet(2, colors[0], 0, 0, 0, "about me"),
        makePlanet(1, colors[1], 5, 1, 0, "coursework"),
        makePlanet(1, colors[2], -3, -3, 0, "projects"),
        makePlanet(1, colors[3], -6, -10, 1, "experience"),
        makePlanet(1, colors[4], 4, -8, 1, "contact"),
    ];

    const home_button = document.getElementById("home_button");
    home_button.addEventListener("click", (event) => {
        console.log("take me home was clicked");
        tweenTo(original_camera_pos, {x:0,y:0,z:0});
    })

    add_light();

    const main_controls = new OrbitControls(camera, renderer.domElement);
    let controls = main_controls;

    requestAnimationFrame(render);

}

main()
