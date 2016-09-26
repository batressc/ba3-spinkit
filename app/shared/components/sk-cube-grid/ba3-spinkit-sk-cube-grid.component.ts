import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/sk-cube-grid/ba3-spinkit-sk-cube-grid.component.';

@Component({
    selector: 'ba3-spinkit-sk-cube-grid',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitSkCubeGrid {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitSkCubeGrid }