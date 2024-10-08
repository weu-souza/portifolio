import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {TrainingClass } from '../../Api/model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course:TrainingClass = new TrainingClass;
  openCloseCard:boolean = false;

  openCloseArrowChange(){
    
    if(this.openCloseCard){
      return "fa-solid fa-chevron-up"
    }
    else{
      return "fa-solid fa-chevron-down"
    }
  }
  openCloseButtonClick(){
    this.openCloseCard = !this.openCloseCard;
  }
}
