import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from './component/course-card/course-card.component';
import { TrainingClass } from './Api/model/model';
import { LanguageService } from 'app/shared/utils/service/language-service/language-service';

@Component({
  selector: 'app-training',
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit {
  training: TrainingClass[] = [];
  certification: TrainingClass[] = [];
  english: TrainingClass[] = [];
  constructor(private langService: LanguageService) {}

  t(key: string, params?: any) {
    return this.langService.tFunction()(key, params);
  }

  ngOnInit(): void {
    this.getItem();
    this.getCertification();
    this.getEnglish();
  }

  getItem() {
    this.t('training.courses').subscribe((res: TrainingClass[]) => {
      this.training = res;
    });
  }

  getCertification() {
    this.t('training.certifications').subscribe((res: TrainingClass[]) => {
      this.certification = res;
    });
  }

  getEnglish() {
    this.t('training.languages').subscribe((res: TrainingClass[]) => {
      this.english = res;
    });
  }
}
