import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/double-bounce/ba3-spinkit-double-bounce.component.';

@Component({
    selector: 'ba3-spinkit-double-bounce',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitDoubleBounce {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitDoubleBounce }