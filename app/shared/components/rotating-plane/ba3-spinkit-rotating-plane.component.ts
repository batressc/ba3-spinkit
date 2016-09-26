import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/rotating-plane/ba3-spinkit-rotating-plane.component.';

@Component({
    selector: 'ba3-spinkit-rotating-plane',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`] 
})
class Ba3SpinkitRotatingPlane {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitRotatingPlane }