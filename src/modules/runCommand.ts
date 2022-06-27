import { Commands } from '../types/types';
import { moveUp } from './moveUp';
import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';
import { printPosition } from './printPosition';
import { drawSquare } from './drawSquare';
import { drawRect } from './drawRect';

export const runCommand = (input: string) => {
  const [command, ...args] = input.split(' ');

  switch (command) {
    case Commands.Up: {
      moveUp(args);
      break;
    }
    case Commands.Down: {
      moveDown(args);
      break;
    }
    case Commands.Left: {
      moveLeft(args);
      break;
    }
    case Commands.Right: {
      moveRight(args);
      break;
    }
    case Commands.Position: {
      printPosition();
      break;
    }
    case Commands.Square: {
      drawSquare(args);
      break;
    }
    case Commands.Rectangle: {
      drawRect(args);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
};
