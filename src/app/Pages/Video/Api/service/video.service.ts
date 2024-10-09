import { Injectable } from '@angular/core';
import { Ivideo, videoObj } from '../model/video';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  video: Ivideo[] = videoObj;
  constructor() {}

  getVideo(name: string):Observable<Ivideo[]> {
    let items = this.video.filter((res) => res.title === name)
    return of(items);
  }
}
