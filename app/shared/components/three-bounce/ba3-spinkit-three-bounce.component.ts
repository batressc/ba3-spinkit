import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/three-bounce/ba3-spinkit-three-bounce.component.';

@Component({
    selector: 'ba3-spinkit-three-bounce',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitThreeBounce {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitThreeBounce }