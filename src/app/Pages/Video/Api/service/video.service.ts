import { Injectable } from '@angular/core';
import { Ivideo, videoObj } from '../model/video';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  video: Ivideo[] = videoObj;
  constructor() {}

  getVideo(name: string) {
    return this.video.filter((res) => res.title === name);
  }
}
