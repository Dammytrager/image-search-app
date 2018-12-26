import { Component } from '@angular/core';
import { ImageListComponent } from './component/image-list/image-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-search-app';

  constructor(private getImages:ImageListComponent){}

  getImagesFunction(query){
    this.getImages.listImages(query)
  }
}
