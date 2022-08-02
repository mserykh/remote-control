import robot from 'robotjs';

import { moveMouse } from './moveMouse';

export const moveUp = async (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  await moveMouse(0, -step);
};
