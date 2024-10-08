import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { experiencia, Iexperiencia } from '../model/Experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experiencias: Iexperiencia[] = experiencia;

  constructor() {}

  getExp(): Observable<Iexperiencia[]> {
    return of(this.experiencias);
  }
}
