import { Component, OnInit } from '@angular/core';
import { Iexperiencia } from './Api/model/Experience';
import { CommonModule } from '@angular/common';
import { LanguageService } from 'app/shared/utils/service/language-service/language-service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiencia: Iexperiencia[] = [];
  t(key: string, params?: any) {
    return this.languageService.tFunction()(key, params);
  }
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.t('experience.exp_card').subscribe((exp: Iexperiencia[]) => {
      this.experiencia = exp;
    });
  }
}
