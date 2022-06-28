import robot from 'robotjs';

export const moveMouse = async (deltaX: number, deltaY: number) => {
  const { x, y } = robot.getMousePos();
  robot.moveMouseSmooth(x + deltaX, y + deltaY);
};
