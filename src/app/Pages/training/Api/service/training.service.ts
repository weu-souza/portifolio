import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certification, TrainingClass, TrainingObj } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  training: TrainingClass[] = TrainingObj;
  certification:TrainingClass[] = Certification
  constructor() {}

  getTraining(): Observable<TrainingClass[]> {
    return of(this.training);
  }
  
  getCertification(): Observable<TrainingClass[]> {
    return of(this.certification);
  }

}
