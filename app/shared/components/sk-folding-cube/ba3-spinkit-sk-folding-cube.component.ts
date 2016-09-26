import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/sk-folding-cube/ba3-spinkit-sk-folding-cube.component.';

@Component({
    selector: 'ba3-spinkit-sk-folding-cube',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitSkFoldingCube {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitSkFoldingCube }