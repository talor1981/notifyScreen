import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public _http:HttpClient;
  constructor(private http:HttpClient) { 
    this._http = http;
  }
  gimmeJokes()
  {
    return this._http.get('https://api.chucknorris.io/jokes/random')
  }
  setFacebookData(likes:number,comments:number)
  {
    return this._http.post(environment.url + "SocialData/getFacebookData",{"likesCount":likes,"commentsCount":comments})
  }
  setInstagramData(follows:number)
  {
    return this._http.post(environment.url + "SocialData/getInstagramData",{"numberOfFollowers":follows})
  }
  setYoutubeData(views:number)
  {
    return this._http.post(environment.url + "SocialData/getYoutubeData",{"numberOfViews":views})
  }

}
