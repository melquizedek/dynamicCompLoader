import { Directive, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { CompItem } from '../../../classes/compItem';

@Directive({
  selector: '[tempLoader]'
})
export class TempLoaderDirective {

	@Input("tempLoader") componentToUsed : CompItem;

	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver) { 
		
		setTimeout(() => {
			if (this.componentToUsed) 
			{
				let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.component);
				this.viewContainerRef.clear();
				let componentRef = this.viewContainerRef.createComponent(componentFactory);
				(componentRef.instance).data = this.componentToUsed.data;
			}
		});
	}

}
