import robot from 'robotjs';

export const moveMouse = (deltaX: number, deltaY: number) => {
  const { x, y } = robot.getMousePos();
  robot.moveMouseSmooth(x + deltaX, y + deltaY);

  const newCoordinates = robot.getMousePos();
  console.log('Mouse is at x:' + newCoordinates.x + ' y:' + newCoordinates.y);
};
