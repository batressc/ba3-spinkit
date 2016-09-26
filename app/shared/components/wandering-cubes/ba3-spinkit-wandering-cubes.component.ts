import { Component, Input } from '@angular/core';

var basePath: string = 'app/shared/components/wandering-cubes/ba3-spinkit-wandering-cubes.component.';

@Component({
    selector: 'ba3-spinkit-wandering-cubes',
    templateUrl: `${basePath}html`,
    styleUrls: [`${basePath}css`]
})
class Ba3SpinkitWanderingCubes {
    @Input()
    visible: boolean;

    constructor() {
        this.visible = true;
    }
}

export { Ba3SpinkitWanderingCubes }