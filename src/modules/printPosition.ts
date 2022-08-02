import robot from 'robotjs';

export const printPosition = async (): Promise<string> => {
  const currentPosition = robot.getMousePos();
  const result = `${currentPosition.x},${currentPosition.y}`;

  return result;
};
