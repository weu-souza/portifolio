import { Component, inject, Input, OnInit } from '@angular/core';
import { VideoService } from './Api/service/video.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ivideo } from './Api/model/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit {
 @Input() title: string = '';
  link:any = '';
  private sanitizer = inject(DomSanitizer);
  video!:Ivideo[];
  constructor(
    private videoService: VideoService
  ) {}
  ngOnInit(): void {
      this.videoService.getVideo(this.title).subscribe((res)=>{
      this.video = res; 
      this.video.map((value) =>{
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(
          value.link
        );
      })
     })
  }
}
