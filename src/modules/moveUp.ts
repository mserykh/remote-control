import robot from 'robotjs';

import { moveMouse } from './moveMouse';

export const moveUp = (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  moveMouse(0, -step);
};
