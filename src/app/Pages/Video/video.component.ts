import { Component, OnInit } from '@angular/core';
import { VideoService } from './Api/service/video.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit {
  title: string = '';
  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.title = String(this.route.snapshot.paramMap.get('title'));
    console.log(this.videoService.getVideo(this.title));
  }
}
