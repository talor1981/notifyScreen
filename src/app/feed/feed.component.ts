import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})




export class FeedComponent implements OnInit {
  //https://material.angular.io/components/categories




  public useDefault = false;
  public displayYouTube = false;
  public displayInstagram = false;
  public displayFacebook = false;

  public valueInstagram = 0
  public valueYouTube = 0
  public valueFacebook = 0

  public _http:HttpService;
  public message:string = "";

  constructor(private http:HttpService) {
    this._http = http;
   }

  ngOnInit(): void {
  }
  toggle(event: any, type: string) {
  
    switch (type) {
      case "youtube":
        {
          this.displayYouTube = event.checked
          break;
        }
      case "facebook":
        {
          this.displayFacebook = event.checked
          break;
        }
      case "instagram":
        {
          this.displayInstagram = event.checked
          break;
        }
    }

  }
  save()
  {
    this.message = "";
    let httpFacebook = this._http.setFacebookData(this.valueFacebook,this.valueFacebook);
    let httpInstagram = this._http.setInstagramData(this.valueInstagram);
    let httpYouTube = this._http.setYoutubeData(this.valueYouTube);

    forkJoin([httpFacebook, httpInstagram,httpYouTube]).subscribe(results => {
    
      console.log("forkJoin",results)
          this.message = "Saved successfully!"
    });
  }


}
