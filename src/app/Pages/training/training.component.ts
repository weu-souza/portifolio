import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from "./component/course-card/course-card.component";
import { TrainingService } from './service/training.service';
import { TrainingClass } from './Api/model';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements OnInit {
  training:TrainingClass[] = []
  constructor(private trainingService:TrainingService){

  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(){
   this.trainingService.getTraining().subscribe(res =>{
    this.training = res
    console.log(res)
   })
  }

}
