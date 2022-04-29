import * as BABYLON from "@babylonjs/core";
// 加载模型需要安装引用loaders
import  "@babylonjs/loaders";

const createScene = (canvas) => { 

    const engine = new BABYLON.Engine(canvas);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)); 
    
    BABYLON.SceneLoader.ImportMeshAsync("", "/meshes/", "village.glb");

    engine.runRenderLoop(() => {
        scene.render();
      });
};

export { createScene };