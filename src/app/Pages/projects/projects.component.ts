import { Component, OnInit } from '@angular/core';
import { Iprojetos } from './Api/model/Projects.model';
import { ProjectsService } from './Api/service/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projeto: Iprojetos[] = [];

  constructor(private projetoService: ProjectsService) {}

  ngOnInit(): void {
    this.projetoService.getProj().subscribe((res) => {
      this.projeto = res;
    });
  }
}
