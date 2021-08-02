import ghost from "./images/ghost/*.png";
import cloud from "./images/cloud/*.png";
import obstacle1 from "./images/obstacle1/*.png";
import obstacle2 from "./images/obstacle2/*.png";
import bomberFront from './images/Bomberman/Front/*.png';
import bomberBack from './images/Bomberman/Back/*.png';
import bomberRight from './images/Bomberman/Right/*.png';
import bomberLeft from './images/Bomberman/Left/*.png';

import * as PIXI from "pixi.js";

const spriteNames = {
    ghost: Object.values(ghost),
    obstacleGrave: Object.values(obstacle1),
    obstaclePumpkin: Object.values(obstacle2),
    cloud: Object.values(cloud),
};

export const bomberFrames = {
    front: Object.values(bomberFront),
    back: Object.values(bomberBack),
    right: Object.values(bomberRight),
    left: Object.values(bomberLeft),
};

export function GetSprite(name) {
    return new PIXI.AnimatedSprite(
        spriteNames[name].map((path) => PIXI.Texture.from(path))
    );
}