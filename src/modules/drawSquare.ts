import robot from 'robotjs';

import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { moveUp } from './moveUp';

export const drawSquare = (args: Array<string>) => {
  const sideRaw = args[0];

  robot.mouseToggle('down');

  moveRight([sideRaw]);
  moveDown([sideRaw]);
  moveLeft([sideRaw]);
  moveUp([sideRaw]);

  robot.mouseToggle('up');
};
