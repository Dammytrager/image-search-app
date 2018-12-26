import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private API_KEY:string=environment.API_KEY;
  private API_URL:string=environment.API_URL;
  private query:string;
  private URL:string=this.API_URL+this.API_KEY+'&q='
  private perPage:string='&per_page=15'

  constructor(private _http:Http) { }

  getImages(query){
    return this._http.get(this.URL+query+this.perPage)
  }
}
