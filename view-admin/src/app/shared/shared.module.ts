import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ToolbarComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ToolbarComponent,
    ProgressIndicatorComponent
  ]
})
export class SharedModule { }
