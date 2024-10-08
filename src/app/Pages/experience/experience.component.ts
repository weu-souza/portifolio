import { Component, OnInit } from '@angular/core';
import { Iexperiencia } from './Api/model/Experience';
import { ExperienceService } from './Api/service/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiencia: Iexperiencia[] = [];

  constructor(private expService: ExperienceService) {}

  ngOnInit(): void {
    this.expService.getExp().subscribe((res) => {
      this.experiencia = res;
    });
  }
}
