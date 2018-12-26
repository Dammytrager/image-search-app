import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../service/image-service/image-service.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  constructor(private _imageService : ImageService) { }

  ngOnInit() {
    
  }

  listImages(){
    return this._imageService.getImages('yellow')
    .subscribe(data => console.log(JSON.parse(data['_body'])),
                error=> console.log(error),
                ()=>console.log('Request Complete'));
  }
}
