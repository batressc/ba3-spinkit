import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Ba3SpinkitRotatingPlane } from './shared/components/rotating-plane/ba3-spinkit-rotating-plane.component';
import { Ba3SpinkitDoubleBounce } from './shared/components/double-bounce/ba3-spinkit-double-bounce.component';
import { Ba3SpinkitRectangle } from './shared/components/rectangle/ba3-spinkit-rectangle.component';
import { Ba3SpinkitWanderingCubes } from './shared/components/wandering-cubes/ba3-spinkit-wandering-cubes.component';
import { Ba3SpinkitPulse } from './shared/components/pulse/ba3-spinkit-pulse.component';
import { Ba3SpinkitChasingDots } from './shared/components/chasing-dots/ba3-spinkit-chasing-dots.component';
import { Ba3SpinkitThreeBounce } from './shared/components/three-bounce/ba3-spinkit-three-bounce.component';
import { Ba3SpinkitSkCircle } from './shared/components/sk-circle/ba3-spinkit-sk-circle.component';
import { Ba3SpinkitSkCubeGrid } from './shared/components/sk-cube-grid/ba3-spinkit-sk-cube-grid.component';
import { Ba3SpinkitSkFadingCircle } from './shared/components/sk-fading-circle/ba3-spinkit-sk-fading-circle.component';
import { Ba3SpinkitSkFoldingCube } from './shared/components/sk-folding-cube/ba3-spinkit-sk-folding-cube.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent, 
        Ba3SpinkitRotatingPlane, 
        Ba3SpinkitDoubleBounce,
        Ba3SpinkitRectangle,
        Ba3SpinkitWanderingCubes,
        Ba3SpinkitPulse,
        Ba3SpinkitChasingDots,
        Ba3SpinkitThreeBounce,
        Ba3SpinkitSkCircle,
        Ba3SpinkitSkCubeGrid,
        Ba3SpinkitSkFadingCircle,
        Ba3SpinkitSkFoldingCube

    ],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
