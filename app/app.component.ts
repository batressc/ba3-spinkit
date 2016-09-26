import { Component }  from '@angular/core';

@Component({
    selector: 'ba3-timesheet',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'] 
})
class AppComponent { 
    visibility: boolean;
    backgroundColor: string;
    margin: string;

    constructor() {
        this.visibility = true;
        this.backgroundColor = 'white';
    }

    activator(): void { 
        this.visibility = !this.visibility;
    }
}

export { AppComponent };