import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastServiceService } from './shared/utils/service/toast-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent,ToastModule,RouterLink],
  providers:[MessageService,ToastServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weuller souza';
}
