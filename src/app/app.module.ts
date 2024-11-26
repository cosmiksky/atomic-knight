import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './services/game.service';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [BrowserModule, CommonModule],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
