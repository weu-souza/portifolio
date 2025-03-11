import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Certification,
  TrainingClass,
  TrainingObj,
  English,
} from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  training: TrainingClass[] = TrainingObj;
  certification: TrainingClass[] = Certification;
  english: TrainingClass[] = English;

  getTraining(): Observable<TrainingClass[]> {
    return of(this.training);
  }

  getCertification(): Observable<TrainingClass[]> {
    return of(this.certification);
  }

  getEnglish(): Observable<TrainingClass[]> {
    return of(this.english);
  }
}
