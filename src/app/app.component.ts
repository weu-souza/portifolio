import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastServiceService } from './shared/utils/service/toast-service.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from './shared/utils/service/language-service/language-service';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, ToastModule],
  providers: [MessageService, ToastServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Weuller souza';
 constructor(private langService: LanguageService) {
  this.langService.init();
}

}
