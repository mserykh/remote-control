import robot from 'robotjs';

export const printPosition = (): string => {
  const currentPosition = robot.getMousePos();
  const result = `${currentPosition.x} px,${currentPosition.y} px`;

  return result;
};
