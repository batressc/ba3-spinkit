import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/sk-circle/ba3-spinkit-sk-circle.component.';

@Component({
    selector: 'ba3-spinkit-sk-circle',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitSkCircle {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitSkCircle }