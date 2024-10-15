import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from "./component/course-card/course-card.component";
import { TrainingService } from './Api/service/training.service';
import { TrainingClass } from './Api/model/model';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements OnInit {
  training:TrainingClass[] = []
  certification:TrainingClass[] = []
  constructor(private trainingService:TrainingService){

  }

  ngOnInit(): void {
    this.getItem();
    this.getCertification()
  }

  getItem(){
   this.trainingService.getTraining().subscribe(res =>{
    this.training = res
   })
  }

  getCertification(){
    this.trainingService.getCertification().subscribe(res =>{
      this.certification = res
     })
  }

}
