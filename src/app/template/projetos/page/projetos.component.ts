import {Component, OnInit} from '@angular/core';
import {Iprojetos} from "../model/projetos";
import {ProjetosService} from "../service/projetos.service";

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projeto: Iprojetos[] = []

  constructor(private projetoService: ProjetosService) {
  }

  ngOnInit(): void {
    this.projetoService.getProj().subscribe(res =>{
      this.projeto = res
    });
  }
}
