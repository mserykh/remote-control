import robot from 'robotjs';

import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { moveUp } from './moveUp';

export const drawSquare = async (args: Array<string>): Promise<void> => {
  const sideRaw = args[0];

  robot.mouseToggle('down');

  await moveRight([sideRaw]);
  await moveDown([sideRaw]);
  await moveLeft([sideRaw]);
  await moveUp([sideRaw]);

  robot.mouseToggle('up');
};
