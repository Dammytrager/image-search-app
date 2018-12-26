import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../service/image-service/image-service.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  public images:any[];

  constructor(private _imageService : ImageService) { }

  ngOnInit() {

  }

  handleSuccess(data){
    this.images=JSON.parse(data['_body']).hits
    console.log(JSON.parse(data['_body']).hits)
  }

  handleError(error){
    console.log(error)
  }

  listImages(query){
    return this._imageService.getImages(query)
    .subscribe(data => this.handleSuccess(data),
                error=> this.handleError(error),
                ()=>console.log('Request Complete'));
  }
}
