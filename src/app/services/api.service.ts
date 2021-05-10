import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HTTP) { }



  getPriereData(objt:any){

          this.http.setDataSerializer('multipart');
         return this.http.sendRequest("https://api.pray.zone/v2/times/today.json?longitude="+objt.lng+"&latitude="+objt.lat+"&elevation=333",{
             method: "get",
         });
  }


  getNafilaData(){
     
     return this.http.get("http://appramadan.digi221.com/api/last/nafila",{},{"cache-controle" :"no-cache"});
}


getDouaData(){
     
  return this.http.get("http://appramadan.digi221.com/api/douha/all",{},{"cache-controle" :"no-cache"});
}
}
