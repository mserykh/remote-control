export enum Commands {
  Up = 'mouse_up',
  Down = 'mouse_down',
  Left = 'mouse_left',
  Right = 'mouse_right',
  Position = 'mouse_position',
  Square = 'draw_square',
  Rectangle = 'draw_rectangle',
  PrntScrn = 'prnt_scrn',
}

/* received: mouse_up 10
received: mouse_down 10
received: mouse_left 10
received: mouse_right 10
received: draw_square 100
received: draw_rectangle 100 100
received: mouse_position
received: prnt_scrn */
