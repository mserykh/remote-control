import robot from 'robotjs';

import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { moveUp } from './moveUp';

export const drawRect = async (args: Array<string>): Promise<void> => {
  const [sideXRaw, sideYRaw] = [...args];

  robot.mouseToggle('down');

  await moveRight([sideXRaw]);
  await moveDown([sideYRaw]);
  await moveLeft([sideXRaw]);
  await moveUp([sideYRaw]);

  robot.mouseToggle('up');
};
