import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
   openCloseCard:boolean = true;

  openCloseArrowChange(){
    
    if(this.openCloseCard){
      return "fa-solid fa-arrow-up"
    }
    else{
      return "fa-solid fa-arrow-down"
    }
  }
  openCloseButtonClick(){
    this.openCloseCard = !this.openCloseCard;
  }
}
