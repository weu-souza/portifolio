import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrainingClass, TrainingObj } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  training: TrainingClass[] = TrainingObj;
  constructor() {}

  getTraining(): Observable<TrainingClass[]> {
    return of(this.training);
  }

}
