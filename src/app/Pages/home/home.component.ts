import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'app/shared/utils/service/language-service/language-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  ano: number = 0;
  mes: number = 0;
  dia: number = 0;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.t('home.ano').subscribe((ano: string) => {
      this.ano = parseInt(ano);
    });
    this.t('home.mes').subscribe((mes: string) => {
      this.mes = parseInt(mes);
    });
    this.t('home.dia').subscribe((dia: string) => {
      this.dia = parseInt(dia);
    });
  }

  t(key: string, params?: any) {
    return this.languageService.tFunction()(key, params);
  }

  calculcateAgeWithBirthDate(): number {
    const now = new Date();
    const birthDate = new Date(this.ano, this.mes, this.dia);
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    if (months < 0) {
      months += 12;
      years--;
    }
    return Math.trunc(years + months / 12);
  }
}
