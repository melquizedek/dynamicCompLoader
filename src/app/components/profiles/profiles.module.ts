import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileComponent } from './profile';
import { TempLoaderDirective } from '../../shared/directives/temp-loader/temp-loader.directive';
import { ProfileHkComponent } from '../profile-hk/profile-hk/profile-hk.component';

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
    TempLoaderDirective,
    ProfileHkComponent
  ],
  entryComponents: [
    MainProfileComponent,
    ProfileHkComponent
  ]
})
export class ProfilesModule { }
