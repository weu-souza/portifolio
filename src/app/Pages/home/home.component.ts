import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from 'app/shared/utils/service/language-service/language-service';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private languageService: LanguageService) {
    
  }

  t(key: string, params?: any){
    return this.languageService.tFunction()(key, params);
  }

    
    
  calculcateAgeWithMonth(): number {
    const now = new Date();
    const birthDate = new Date(1997, 11, 27); 

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();

    if (months < 0) {
      months += 12;
      years--;
    }

    return Math.trunc(years + months / 12);
  }
}
