import { NgModule } from '@angular/core';
import { EyOnestComponent } from './components/ny-onest/ny-onest.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlayerComponent } from './components/player/player.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EyOnestComponent,
    PlayerComponent,
    PageLoaderComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  exports: [
    EyOnestComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NyOnestModule { }
