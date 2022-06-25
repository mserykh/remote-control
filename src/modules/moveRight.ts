import robot from 'robotjs';

export const moveRight = (args: Array<string>) => {
  const stepRaw = args[0];
  const step = Number(stepRaw);

  const { x, y } = robot.getMousePos();

  robot.moveMouseSmooth(x + step, y);

  const newCoordinates = robot.getMousePos();

  console.log('Mouse is at x:' + newCoordinates.x + ' y:' + newCoordinates.y);
};
