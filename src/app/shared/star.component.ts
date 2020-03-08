import { Component, OnInit } from '@angular/core';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

/*     updates the width of the star for any change*/  
ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    /*$this.X is from the input*/
    this.ratingClicked.emit(`The rating is ${this.rating} !`);
  }
}
