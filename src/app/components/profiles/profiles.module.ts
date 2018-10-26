import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule} from '@angular/material';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileComponent } from './profile';
import { ProfileHkComponent } from './profile-hk/profile-hk.component';
import { ProfileThaiComponent } from './profile-thai/profile-thai.component';
import { TempLoaderDirective } from '../../shared/directives/temp-loader/temp-loader.directive';

@NgModule({
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    ProfileComponent, 
    MainProfileComponent, 
    ProfileHkComponent, 
    ProfileThaiComponent, 
    TempLoaderDirective,
    ProfileHkComponent,
    ProfileThaiComponent
  ],
  entryComponents: [
    MainProfileComponent,
    ProfileHkComponent,
    ProfileThaiComponent
  ]
})
export class ProfilesModule { }
