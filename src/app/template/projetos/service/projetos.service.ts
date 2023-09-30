import {Injectable} from '@angular/core';
import {Iprojetos, projetos} from "../model/projetos";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  projeto: Iprojetos[] = projetos

  constructor() {
  }

  getProj():Observable<Iprojetos[]> {
    return of(this.projeto)
  }
}
