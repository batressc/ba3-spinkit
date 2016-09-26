import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/pulse/ba3-spinkit-pulse.component.';

@Component({
    selector: 'ba3-spinkit-pulse',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitPulse {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitPulse }