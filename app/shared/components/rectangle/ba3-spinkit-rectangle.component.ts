import { Component, Input, ViewEncapsulation } from '@angular/core';

var basePath: string = 'app/shared/components/rectangle/ba3-spinkit-rectangle.component.'; 

@Component({
    selector: 'ba3-spinkit-rectangle',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitRectangle {
    @Input() 
    visible: boolean;
    
    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitRectangle }