import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/sk-fading-circle/ba3-spinkit-sk-fading-circle.component.';

@Component({
    selector: 'ba3-spinkit-sk-fading-circle',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitSkFadingCircle {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitSkFadingCircle }