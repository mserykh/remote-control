import { moveMouse } from './moveMouse';

export const moveLeft = (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  moveMouse(-step, 0);
};
