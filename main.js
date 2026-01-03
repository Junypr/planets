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


function main() {
    let resize_me = false;

    function makePlanet(radius, color, x, y, id) {

        const geometry = new THREE.SphereGeometry(radius);
        const material = new THREE.MeshToonMaterial({color});
        const planet = new THREE.Mesh(geometry, material);

        scene.add(planet);

        planet.position.x = x;
        planet.position.y = y;

        planet.text_element = document.getElementById(id);

        planet.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        planet.camera.position.set(planet.position.x, planet.position.y, 2);

        planet.addEventListener("click", (event) => {
            event.stopPropagation();
            console.log(`${id} was clicked, moving to ${planet.position.x}, ${planet.position.y}`);
            tweenTo(planet.camera, planet.position);
            planet.text_element.style.display = "block";
        });

        interactionManager.add(planet);

        return planet;
    }

    function tweenTo(new_camera, new_target) {
        controls.enabled = false;
        const original_camera = camera.position;
        new Tween(camera.position)
            .to(new_camera.position)
            .onUpdate(() => {
                    controls.update();
            })
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .start();

        // const original_target = controls.target;
        new Tween(controls.target)
            .to(new_target)
            .onUpdate(() => controls.update())
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .onComplete(() => {
                let old_camera = camera;
                camera = new_camera;
                old_camera.position.set(original_camera);
                controls.enabled = true;
                resize_me = true;
            })
            .start();

        //
        // let old_camera = camera;
        // camera = new_camera;
        // old_camera.position.set(original_camera);
        // controls.enabled = true;
    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height || resize_me;
        if (needResize) {
            renderer.setSize(width, height, false);
            resize_me = false;
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

        controls.update();
        interactionManager.update();
        Tweens.update();
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
    camera.position.z = 20;
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(colors[0]);

    const interactionManager = new InteractionManager(renderer, camera, renderer.domElement);

    const planets = [
        makePlanet(1, colors[0], 0, 0, "planet1"),
        makePlanet(1, colors[1], 5, 1, "planet2"),
    ];

    add_light();

    const controls = new OrbitControls(camera, renderer.domElement);

    requestAnimationFrame(render);

}

main()
