import { moveMouse } from './moveMouse';

export const moveDown = async (args: Array<string>): Promise<void> => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  await moveMouse(0, step);
};
