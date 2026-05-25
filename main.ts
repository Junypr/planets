import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InteractionManager } from "three.interactive";
import {Group, Tween, Easing} from "@tweenjs/tween.js";
import assert from 'assert';
import { Text } from 'troika-three-text';


// TODO:
// update home button
// update colors
// updated text
// add instruction text + a start here popup (or something)
// adjust positions of stuff

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

class position {
    constructor(public readonly x: number, public readonly y: number, public readonly z: number) {
    }

    public distanceTo(that: position): number {
        return Math.sqrt((this.x - that.x) ** 2 + (this.y - that.y) ** 2 + (this.z - that.z) ** 2);
    }
}

type planet = {
    position: position,
    radius: number,
    textElement: HTMLElement,
    cameraPos: position,
    rotation: THREE.rotation,
    label: Text,
    speed: number
}

function main() {

    /**
     * Creates planet and puts it in the threejs view
     * @param parent the parent planet
     * @param radius radius of the planet in threejs units
     * @param color color the planet, hex
     * @param x x position of the planet in threejs units relative to the parent
     * @param y y position of the planet in threejs units relative to the parent
     * @param z z position of the planet in threejs units relative to the parent
     * @param id html tag corresponding to the planet
     */
    function makeSubPlanet(parent: planet, radius: number, color: number, pos: position): planet {

        const geometry = new THREE.SphereGeometry(radius);
        const material = new THREE.MeshToonMaterial({color});
        const planet = new THREE.Mesh(geometry, material);

        parent.add(planet); // pretty sure this is fine

        planet.position.x = pos.x;
        planet.position.y = pos.y;
        planet.position.z = pos.z;
        planet.radius = radius;
        planet.speed = (radius + color) * 0.1;

        planet.cameraPos = new position(planet.position.x, planet.position.y, planet.position.z + 1.6*radius);

        return planet;
    }

    /**
     * Creates planet and puts it in the threejs view
     * @param radius radius of the planet in threejs units
     * @param color color the planet, hex
     * @param x x position of the planet in threejs units
     * @param y y position of the planet in threejs units
     * @param z z position of the planet in threejs units
     * @param id html tag corresponding to the planet
     */
    function makePlanet(radius: number, color: number, pos: position, id: string): planet {

        const geometry = new THREE.SphereGeometry(radius);
        const material = new THREE.MeshToonMaterial({color});
        const planet = new THREE.Mesh(geometry, material);

        scene.add(planet);

        planet.position.x = pos.x;
        planet.position.y = pos.y;
        planet.position.z = pos.z;
        planet.speed = (id.length + radius) * 0.01;
        planet.radius = radius;

        planet.textElement = document.getElementById(id);
        planet.cameraPos = new position(planet.position.x, planet.position.y, planet.position.z + 1.6*radius);

        planet.addEventListener("click", (event: MouseEvent) => {
            event.stopPropagation();
            console.log(`${id} was clicked, moving to ${planet.position.x}, ${planet.position.y}`);
            tweenTo(planet.cameraPos, planet.position);
            planet.textElement.style.display = "block";
        });

        interactionManager.add(planet);

        // label for planet
        const label = new Text();
        scene.add(label);

        label.text = id;
        label.fontSize = 0.2;
        label.position.z = planet.position.z;
        label.color = 0x000;
        label.position.x = planet.position.x;
        label.anchorX = -planet.radius * 1.1;
        label.position.y = planet.position.y;
        label.font = "assets/ia-writer-quattro-latin-700-normal-DX555wpQ.ttf";
        label.fontSize = planet.radius / 4;
        label.sync();

        planet.label = label;

        return planet;
    }

    /**
     * tweens the camera to the new position and target
     * @param cameraPos new camera position
     * @param newTarget new target
     */
    function tweenTo(cameraPos: position, newTarget: position): void {
        controls.enabled = false;

        new Tween(controls.target)
            .to(newTarget)
            .onUpdate(() => controls.update())
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .onComplete(() => controls.enabled = true)
            .start();

        new Tween(camera.position)
            .to(cameraPos)
            .onUpdate(() => {
                    controls.update();
            })
            .easing(Easing.Quadratic.InOut)
            .group(Tweens)
            .start();

    }

    /**
     * Resizes the canvas to fill the window as necessary
     * @param renderer the renderer
     * @returns true if the canvas needed to be resized
     */
    function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer): boolean {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    /**
     * renders everything
     * @param time time in seconds
     */
    function render(time: number): void {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        planets.forEach((planet) => {
            const speed = planet.speed;
            const rot = time * speed;
            planet.rotation.x = rot;
            planet.rotation.y = rot;
            if (planet.label) planet.label.lookAt(camera.position);
        });

        subplanets.forEach((planet, ndx) => {
            const speed = planet.speed;
            const rot = time * speed;
            planet.rotation.x = rot;
            planet.rotation.y = rot;
            if (planet.label) planet.label.lookAt(camera.position);
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);

        show_text();

        controls.update();
        interactionManager.update();
        Tweens.update();
    }

    /**
     * determines whether or not to show text for each planet
     */
    function show_text(): void {
        planets.forEach((planet, ndx) => {
            // console.log(`${controls.target.distanceTo(planet.position)}, ${camera.position.distanceTo(planet.position)}`)
            if (controls.target.distanceTo(planet.position) <= 0.5 * planet.radius
                && camera.position.distanceTo(planet.position) <= 2.6 * planet.radius
                && camera.position.distanceTo(planet.position) >= planet.radius) {
                // console.log(`showing text for planet ${planet.textElement.textContent}`);
                planet.textElement.style.display = "block";
                planet.textElement.style.opacity = Math.min(1.5 - camera.position.distanceTo(planet.position)/(planet.radius*2.6), 1)
            } else {
                planet.textElement.style.display = "none";
            }
        });
    }

    /**
     * adds light to the scene
     */
    function add_light(): void {
        const color = 0xffffff;
        const intensity = 20;
        const light = new THREE.PointLight(color, intensity, 0, 1);
        light.position.set(0, 0, 0);
        scene.add(light);

        const fill_light = new THREE.AmbientLight(0xffffff, 3.5);
        scene.add(fill_light);
    }

    const Tweens = new Group();

    const COLORS = [0x4d9cce, 0xE6A9C0, 0xD25030, 0x8fc480, 0xF4C65E, 0x91c8ca, 0x8fc480]
    /* 
    red-orange 210080048
    pink 230169192
    yellow 244198094
    peach (dark) 2411155119
    peach (light)228199186
    aqua 145200202
    mint 143196128
    0xf17377
    */


    const canvas = document.querySelector("#c");
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    const mainCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    let camera = mainCamera;
    const ogCameraPos = new position(0, 0, 45);
    // camera.position.set(ogCameraPos.x, ogCameraPos.y, ogCameraPos.z);
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(COLORS[0]);
    const interactionManager = new InteractionManager(renderer, camera, renderer.domElement);

    const planets: Map<string, planet> = new Map([
        ["about me", makePlanet(4, 0xFF8C00, new position(0, 0, 0), "about me")],

        ["coursework", makePlanet(2, COLORS[1], new position(10, 15, -15), "coursework")],
        ["sophomore", makePlanet(1, COLORS[1], new position (12, 20, -6), "sophomore")],
        ["freshman", makePlanet(1, COLORS[1], new position (20, 12, -18), "freshman")],

        ["projects", makePlanet(2, COLORS[2], new position(-13, 6, 5), "projects")],
        ["dbf", makePlanet(1, COLORS[2], new position (-17, 1, 6), "dbf")],
        ["ssp", makePlanet(1, COLORS[2], new position (-5, 8, 12), "ssp")],
        ["fca", makePlanet(1, COLORS[2], new position (-25, 10, 2), "fca")],
        ["techrise", makePlanet(1, COLORS[2], new position (-10, 3, 6), "techrise")],

        ["experience", makePlanet(2, COLORS[3], new position (10, -5, 3), "experience")],
        ["seagrant", makePlanet(1, COLORS[3], new position (5, -15, 1), "seagrant")],
        ["tasan", makePlanet(1, COLORS[3], new position (20, -7, -5), "tasan")],
        ["mrl", makePlanet(1, COLORS[3], new position (21, -3, 5), "mrl")],
        ["nasa", makePlanet(1, COLORS[3], new position (12, -9, 15), "nasa")],
        ["relativity", makePlanet(1, COLORS[3], new position (17, -2, 2), "relativity")],

        ["contact", makePlanet(2, COLORS[5], new position (-15, -7, -10), "contact")]
    ]);

    const subplanets: planet[] = [
        makeSubPlanet(planets.get("about me") ?? assert.fail(), 0.5, COLORS[1], new position(3, 2, 5)),
        makeSubPlanet(planets.get("about me") ?? assert.fail(), 0.5, COLORS[2], new position(-1, 3, 7)),
        makeSubPlanet(planets.get("coursework") ?? assert.fail(), 0.5, COLORS[3], new position(-3, 2, -3)),
        makeSubPlanet(planets.get("sophomore") ?? assert.fail(), 0.5, COLORS[6], new position(-1, 4, 2)),
        makeSubPlanet(planets.get("freshman") ?? assert.fail(), 0.5, COLORS[2], new position(5, 3, -5)),
        makeSubPlanet(planets.get("projects") ?? assert.fail(), 0.5, COLORS[1], new position(-3, 0, 2)),
        makeSubPlanet(planets.get("projects") ?? assert.fail(), 0.5, COLORS[4], new position(-1, 2, 2)),
        makeSubPlanet(planets.get("experience") ?? assert.fail(), 0.5, COLORS[6], new position(-4, 0, 3)),
        makeSubPlanet(planets.get("experience") ?? assert.fail(), 0.5, COLORS[2], new position(-1, 2, 2)),
        makeSubPlanet(planets.get("experience") ?? assert.fail(), 0.5, COLORS[5], new position(-5, 5, -1)),
        makeSubPlanet(planets.get("contact") ?? assert.fail(), 0.5, COLORS[1], new position(-1, -1, -5)),
    ]

    const homeButton = document.getElementById("home_button") ?? assert.fail("did not find home button");
    homeButton.addEventListener("click", (event) => {
        tweenTo(ogCameraPos, new position(0, 0, 0));
    })

    // get all planet buttons and make them
    const planetButtons = document.querySelectorAll("button");
    planetButtons.forEach((button)=> {button.addEventListener("click", (event) => {
        console.log(`clicked on ${button.className}`);
        const planetId = button.className;
        const planet = planets.get(planetId) ?? assert.fail();
        tweenTo(planet.cameraPos, planet.position);
    })})

    const homePlanet = planets.get("about me") ?? assert.fail();

    camera.position.set(homePlanet.cameraPos.x, homePlanet.cameraPos.y, homePlanet.cameraPos.z);

    add_light();

    const main_controls = new OrbitControls(camera, renderer.domElement);
    let controls = main_controls;

    requestAnimationFrame(render);

}

main()
