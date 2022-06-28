import { moveMouse } from './moveMouse';

export const moveRight = async (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  await moveMouse(step, 0);
};
