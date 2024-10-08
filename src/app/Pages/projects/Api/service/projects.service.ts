import { Injectable } from '@angular/core';
import { Iprojetos, projetos } from '../model/Projects.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projeto: Iprojetos[] = projetos

  constructor() {
  }

  getProj():Observable<Iprojetos[]> {
    return of(this.projeto)
  }


}
