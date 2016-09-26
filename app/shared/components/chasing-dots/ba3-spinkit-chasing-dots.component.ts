import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/chasing-dots/ba3-spinkit-chasing-dots.component.';

@Component({
    selector: 'ba3-spinkit-chasing-dots',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitChasingDots {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitChasingDots }