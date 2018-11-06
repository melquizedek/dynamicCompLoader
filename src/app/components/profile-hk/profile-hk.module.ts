import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileHkRoutingModule } from './profile-hk-routing.module';
import { ProfileHkComponent } from './profile-hk/profile-hk.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileHkRoutingModule
  ],
  declarations: [ProfileHkComponent]
})
export class ProfileHkModule { }
