import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { CompItem } from '../../classes/compItem';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileHkComponent } from './profile-hk/profile-hk.component';

@Component({
    selector: 'profile',
    template: `<ng-template [tempLoader]="componentToUsed"></ng-template>`
})
export class ProfileComponent implements OnInit {

    componentToUsed: CompItem = null;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { 

        this.componentToUsed = new CompItem(ProfileHkComponent, {name: 'John Doe', age: 23, country: 'HK'});

        if (!this.componentToUsed) {
            this.componentToUsed = new CompItem(MainProfileComponent, {name: 'John Doe', age: 23, country: 'Default'});
        }
      
    }

    ngOnInit() {}

}
