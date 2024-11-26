import { Component } from "@angular/core";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})

export class BoardComponent {
  constructor(public gameService: GameService) {}

  onCellClick(x: number, y: number): void {
    if(this.gameService.knightPosition === null) {
      this.gameService.makeMove(x, y);
    } else {
      const availableMoves = this.gameService.getAvailableMoves(
        this.gameService.knightPosition.x,
        this.gameService.knightPosition.y
      );
      if(availableMoves.some((move) => move.x === x && move.y === y)) {
        this.gameService.makeMove(x, y);
      }
    }

    if(this.gameService.isGameOver()) {
      alert(this.gameService.isWin() ? 'ПоздравляемБ вы выиграли!' : 'Игра окончена, вы проиграли.');
    }
  }

  isEven(i: number, j: number): boolean {
    return (i + j) % 2 === 0;
  }

  isOdd(i: number, j: number): boolean {
    return (i + j) % 2 !== 0;
  }

  isHighlighted(i: number, j: number): boolean {
    if (!this.gameService.knightPosition) {
      return false;
    }
    const moves = this.gameService.getAvailableMoves(this.gameService.knightPosition.x, this.gameService.knightPosition.y);
    return moves.some((move) => move.x === i && move.y === j);
  }

  resetGame(): void {
    this.gameService.resetGame();
  }
}

