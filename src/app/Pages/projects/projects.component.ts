import { Component, OnInit } from '@angular/core';
import { Iprojetos } from './Api/model/Projects.model';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { VideoComponent } from "../Video/video.component";
import { LanguageService } from 'app/shared/utils/service/language-service/language-service';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, DialogModule, VideoComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projeto: Iprojetos[] = [];
  visible: boolean = false;
  videoTitle:string = '';
  t(key: string, params?: any) {
    return this.languageService.tFunction()(key, params);
  }
  constructor(private languageService: LanguageService) {}
  openModal(video:string) {
    this.videoTitle = video
    this.visible = true;
  }
  ngOnInit(): void {
     this.t('projects.projects_card').subscribe((res: Iprojetos[]) => {
          this.projeto = res;
        });
  }
}
