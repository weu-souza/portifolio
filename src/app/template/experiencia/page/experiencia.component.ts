import {Component, OnInit} from '@angular/core';
import {ExperienciaService} from "../service/experiencia.service";
import {Iexperiencia} from "../model/experiencia";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Iexperiencia[] = []

  constructor(private expService: ExperienciaService) {
  }

  ngOnInit(): void {
    this.expService.getExp().subscribe(res => {
      this.experiencia = res;
    });
  }

}
