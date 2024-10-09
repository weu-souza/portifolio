import { Component, OnInit } from '@angular/core';
import { Iprojetos } from './Api/model/Projects.model';
import { ProjectsService } from './Api/service/projects.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { VideoComponent } from "../Video/video.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DialogModule, VideoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projeto: Iprojetos[] = [];
  visible: boolean = false;
  videoTitle:string = '';
  constructor(private projetoService: ProjectsService) {}
  openModal(video:string) {
    this.videoTitle = video
    this.visible = true;
  }
  ngOnInit(): void {
    this.projetoService.getProj().subscribe((res) => {
      this.projeto = res;
    });
  }
}
