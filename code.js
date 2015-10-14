function MoveManager() {
  this.board = [
    ['x','x','x'],
    ['x','x','x'],
    ['x','x','x']
  ];

  MoveManager.prototype.insert = function (ypos, xpos) {
    this.board[ypos][xpos] = 'o';
    return this.board;
  }

  MoveManager.prototype.movePlayer = function(ypos, xpos, direction) {
    if (direction == "right") {
      this.board[ypos][xpos + 1] = 'o';
      this.board[ypos][xpos] = 'x';
      return this.board;
    } else if (direction == "left") {
      this.board[ypos][xpos - 1] = 'o';
      this.board[ypos][xpos] = 'x';
      return this.board;
    } else if (direction == "down") {
      this.board[ypos - 1][xpos] = 'o';
      this.board[ypos][xpos] = 'x';
      return this.board;
    } else if (direction == "up") {
      this.board[ypos + 1][xpos] = 'o';
      this.board[ypos][xpos] = 'x';
      return this.board;
    }
  }
  
}
module.exports = MoveManager;
