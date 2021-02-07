import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker' ;
import {HttpService} from '../app/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'notifyScreen';

  public joke:any = "";
  constructor(udpates: SwUpdate,private http:HttpService){
     udpates.available.subscribe(event=>{
          udpates.activateUpdate().then(()=> document.location.reload());
     })
  }
  ngOnInit(){
    this.http.gimmeJokes().subscribe(res=>{
      this.joke = res;
    })
  }
}
