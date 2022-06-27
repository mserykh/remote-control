import robot from 'robotjs';

import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { moveUp } from './moveUp';

export const drawRect = (args: Array<string>): void => {
  const [sideXRaw, sideYRaw] = [...args];

  robot.mouseToggle('down');

  moveRight([sideXRaw]);
  moveDown([sideYRaw]);
  moveLeft([sideXRaw]);
  moveUp([sideYRaw]);

  robot.mouseToggle('up');
};
