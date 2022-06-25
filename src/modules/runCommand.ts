import { Commands } from '../types/types';
import { moveUp } from './moveUp';
import { moveDown } from './moveDown';
import { moveLeft } from './moveLeft';
import { moveRight } from './moveRight';

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
    default: {
      console.log('Unnknown command');
    }
  }
};
