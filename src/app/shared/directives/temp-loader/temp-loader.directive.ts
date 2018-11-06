import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentInterface } from '../../../interfaces/component.interface';

@Directive({
  selector: '[componentLoader]'
})
export class TempLoaderDirective implements OnInit {

	@Input("componentLoader") componentToUsed : any;
	
	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver) { 
	}

	ngOnInit() {
		this._initTempLoader();
	}

	private _initTempLoader() : void {
		if (this.componentToUsed) 
		{
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.component);
			this.viewContainerRef.clear();
			let componentRef = this.viewContainerRef.createComponent(componentFactory);
			(<ComponentInterface>componentRef.instance).data = this.componentToUsed.data;
		}
	}

}
