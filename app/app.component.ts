import {Component, ElementRef, ViewChild, Inject, ChangeDetectionStrategy, Input} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";



class DataItem {
    constructor(public id: number, public name: string) { }
}



@Component({
    selector: "my-app",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl:'app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    
        public myItems: Array<DataItem>;
    public counter: number;

    constructor(public elementRef: ElementRef) {
        this.counter = 0;
        this.myItems = [];
        for (var i = 0; i < 2; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
        }
    }

    onSetupItemView(args) {
        this.counter++;
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    public openDrawer(){
        this.drawer.showDrawer();
    }
}
