import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { TrainingComponent } from './Pages/training/training.component';
import { VideoComponent } from './Pages/Video/video.component';

export const routes: Routes = [
    {path:"contato",component:ContactComponent},
    {path:"experiencia",component:ExperienceComponent},
    {path:"projetos",component:ProjectsComponent},
    {path:"formacao",component:TrainingComponent},
    {path:"",component:HomeComponent},

    {path:"**",component:NotFoundComponent}
];
