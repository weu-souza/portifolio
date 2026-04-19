import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../utils/service/language-service/language-service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ToggleSwitchModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isEnglish = false;
  constructor(private langService: LanguageService) {
   
  }

  t(key: string, params?: any){
    return this.langService.tFunction()(key, params);
  }

  trocarIdioma(lang: string) {
    this.langService.setLanguage(lang);
  }
}
