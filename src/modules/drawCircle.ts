import robot from 'robotjs';

export const drawCircle = async (args: Array<string>) => {
  const radiusRaw = args[0];
  const radius = Number(radiusRaw);

  robot.mouseToggle('down');
  robot.mouseToggle('up');
};
