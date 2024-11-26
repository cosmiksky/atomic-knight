import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GameService {
  board: number [][] = [];
  knightPosition: { x: number, y: number } | null = null;
  moveCount = 0;

  constructor() {
    this.resetGame();
  }

  resetGame(): void {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }

  makeMove(x: number, y: number): boolean {
    if(this.isValidMove(x, y)) {
      this.moveCount ++;
      this.board[x][y] = this.moveCount;
      this.knightPosition = { x, y };
      return true;
    }
    return false;
  }

  getAvailableMoves(x: number, y: number): { x: number; y: number }[] {
    const moves = [
      { x: x + 2, y: y + 1 },
      { x: x + 2, y: y - 1 },
      { x: x - 2, y: y + 1 },
      { x: x - 2, y: y - 1 },
      { x: x + 1, y: y + 2 },
      { x: x + 1, y: y - 2 },
      { x: x - 1, y: y + 2 },
      { x: x - 1, y: y - 2 },
    ];
    return moves.filter((move) => this.isValidMove(move.x, move.y))
  }

  isValidMove(x: number, y: number): boolean {
    return x>= 0 && x < 10 && y >= 0 && y < 10 && this.board[x][y] === 0
  }

  isGameOver(): boolean {
    return this.getAvailableMoves(
      this.knightPosition?.x ?? -1,
      this.knightPosition?.y ?? -1
    ).length === 0;
  }

  isWin(): boolean {
    return this.moveCount === 100;
  }
}
