import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ProgressBarComponent } from './custom-comp/progress-bar/progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent,],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ProgressBarComponent]
  
})
export class TactCommonModule { }
