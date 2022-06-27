import { moveMouse } from './moveMouse';

export const moveDown = (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  moveMouse(0, step);
};
