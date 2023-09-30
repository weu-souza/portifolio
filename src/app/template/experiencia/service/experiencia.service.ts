import {Injectable} from '@angular/core';
import {experiencia, Iexperiencia} from "../model/experiencia";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  experiencias: Iexperiencia[] = experiencia

  constructor() {
  }

  getExp():Observable<Iexperiencia[]> {
    return of(this.experiencias)
  }
}
