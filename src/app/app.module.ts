import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './component/image-list/image-list.component';
import { HttpModule } from '@angular/http'
import { ImageService } from './service/image-service/image-service.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ImageService, ImageListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
