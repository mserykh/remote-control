import { Commands } from '../types/types';
import { moveUp } from './moveUp';
import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { printPosition } from './printPosition';
import { drawSquare } from './drawSquare';
import { drawRect } from './drawRect';
import { drawCircle } from './drawCircle';

export const runCommand = async (input: string): Promise<void | string> => {
  const [command, ...args] = input.split(' ');

  switch (command) {
    case Commands.Up: {
      await moveUp(args);
      break;
    }
    case Commands.Down: {
      await moveDown(args);
      break;
    }
    case Commands.Left: {
      await moveLeft(args);
      break;
    }
    case Commands.Right: {
      await moveRight(args);
      break;
    }
    case Commands.Position: {
      const position = await printPosition();
      return position;
    }
    case Commands.Square: {
      await drawSquare(args);
      break;
    }
    case Commands.Rectangle: {
      await drawRect(args);
      break;
    }
    case Commands.Circle: {
      await drawCircle(args);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
};
