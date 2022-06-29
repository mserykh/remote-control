import robot from 'robotjs';

export const drawCircle = async (args: Array<string>) => {
  const radiusRaw = args[0];
  const radius = Number(radiusRaw);

  const center = robot.getMousePos();

  for (let i = -90; i <= 270; i++) {
    const x = radius * Math.cos((i * Math.PI) / 180) + center.x;
    const y = radius * Math.sin((i * Math.PI) / 180) + center.y;

    robot.dragMouse(x, y);
    if (i === -90) robot.mouseToggle('down');
  }

  robot.mouseToggle('up');
};
