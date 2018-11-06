import { Component, OnInit, ComponentFactoryResolver, SystemJsNgModuleLoader } from '@angular/core';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { componentList } from '../../../environments/ui-components';
import { AddComponent } from '../../classes/add-component';

@Component({
    selector: 'profile',
    template: `<ng-template [componentLoader]="componentToUsed"></ng-template>`
})

export class ProfileComponent implements OnInit {

    componentToUsed: any = null;

    constructor() { 
    }

    ngOnInit() {
        this.componentToUsed = componentList['ProfileHkComponent'];
        if (!this.componentToUsed) {
            this.componentToUsed = new AddComponent(MainProfileComponent, {name: 'John Doe', country: 'default profile'});
        }
    }

}
