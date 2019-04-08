import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '/home/joshuareynold/Documents/VNIT/6th sem/Soft/E3/ngApp/src/app/home/home.component';
import { VideoCenterComponent } from '/home/joshuareynold/Documents/VNIT/6th sem/Soft/E3/ngApp/src/app/video-center/video-center.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideoCenterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
