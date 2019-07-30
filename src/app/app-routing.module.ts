import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './guards/auth.guard';
//import { LoggedGuard } from './logged.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'dashboard', 
      component: DashboardComponent,
      canActivate: [AuthGuardService]  
  },
  { path: 'home', component: HomeComponent},
  { path: 'upload', 
      loadChildren: './upload-file/upload-file.module#UploadFileModule',
      canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

