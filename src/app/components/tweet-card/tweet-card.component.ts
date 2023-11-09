import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css'],
})
export class TweetCardComponent {
  @Input() user: string = '';
  @Input() tweet: string = '';
  @Input() date: string = '';
  counter: number = 0;
  showFilledImages: boolean = false;
  incrementCounter() {
    this.counter++;
    if (this.counter > 0) {
      this.showFilledImages = true;
    } else if (this.counter == 0) {
      this.showFilledImages = false;
    }
  }
  decrementCounter() {
    this.counter--;
    if (this.counter > 0) {
      this.showFilledImages = true;
    } else if (this.counter == 0) {
      this.showFilledImages = false;
    }
  }
}
