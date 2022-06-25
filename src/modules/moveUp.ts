import robot from 'robotjs';

export const moveUp = (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  const { x, y } = robot.getMousePos();

  robot.moveMouseSmooth(x, y - step);

  const newCoordinates = robot.getMousePos();

  console.log('Mouse is at x:' + newCoordinates.x + ' y:' + newCoordinates.y);
};
