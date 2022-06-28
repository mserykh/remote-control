import robot from 'robotjs';
import { moveMouse } from './moveMouse';
import { moveRight } from './moveRight';

export const drawCircle = async (args: Array<string>) => {
  const radiusRaw = args[0];
  const radius = Number(radiusRaw);

  // const currPos = robot.getMousePos();
  // moveMouse(-currPos.x, 0);
  const center = robot.getMousePos();

  robot.mouseToggle('down');

  for (let i = -90; i < 270; i++) {
    const x = radius * Math.cos((i * Math.PI) / 180) + center.x;
    const y = radius * Math.sin((i * Math.PI) / 180) + center.y;
    robot.dragMouse(x, y);
  }

  robot.mouseToggle('up');
};
