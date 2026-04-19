import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Ivideo } from './Api/model/video';
import { VideoService } from './Api/service/video.service';
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  let videoServiceMock: jasmine.SpyObj<VideoService>;
  let sanitizer: DomSanitizer;

  const videoMock: Ivideo[] = [
    {
      title: 'portfolio-demo',
      link: 'https://drive.google.com/file/d/mock-video/preview',
    },
  ];

  beforeEach(async () => {
    videoServiceMock = jasmine.createSpyObj<VideoService>('VideoService', ['getVideo']);
    videoServiceMock.getVideo.and.returnValue(of(videoMock));

    await TestBed.configureTestingModule({
      imports: [VideoComponent],
      providers: [{ provide: VideoService, useValue: videoServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    component.title = 'portfolio-demo';
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the video list on init using the title input', () => {
    fixture.detectChanges();

    expect(videoServiceMock.getVideo).toHaveBeenCalledWith('portfolio-demo');
    expect(component.video).toEqual(videoMock);
  });

  it('should sanitize and assign the video link when loading the video', () => {
    const expectedLink: SafeResourceUrl =
      sanitizer.bypassSecurityTrustResourceUrl(videoMock[0].link);
    const sanitizeSpy = spyOn(sanitizer, 'bypassSecurityTrustResourceUrl').and.callThrough();

    component.getvideo();

    expect(sanitizeSpy).toHaveBeenCalledWith(videoMock[0].link);
    expect(component.link).toEqual(expectedLink);
  });

  it('should hide the loader when the iframe load event is triggered', () => {
    expect(component.loade).toBeTrue();

    component.onIframeLoad();

    expect(component.loade).toBeFalse();
  });

  it('should render the loader before the iframe load event', () => {
    fixture.detectChanges();

    const loader = fixture.nativeElement.querySelector('.load-container');

    expect(loader).not.toBeNull();
  });

  it('should remove the loader from the template after iframe load', () => {
    fixture.detectChanges();
    component.onIframeLoad();
    fixture.detectChanges();

    const loader = fixture.nativeElement.querySelector('.load-container');

    expect(loader).toBeNull();
  });
});
