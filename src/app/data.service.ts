import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Banned_DM {
  Id!: number;
  Name!: string;
  ReadName!: string;
  PlayerId!: number;
  Registered!: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // baseurl:string = "http://192.168.137.2:85/api/";
  baseurl:string = "http://185.228.139.23:85/api/";

  getBaseUrl(url:string){
    return this.baseurl + url;
  }

  getOptions(useJsonHeader:boolean = true){
    if(useJsonHeader){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'rejectUnauthorized': 'false',
          // 'Authorization': 'Bearer ' + this.getToken()
        })
      };
      return httpOptions;
    }else{
      const httpOptions = {
        headers: new HttpHeaders({
          'rejectUnauthorized': 'false',
          // 'Authorization': 'Bearer ' + this.getToken()
        })
      };
      return httpOptions;
    }
  }

  async getBanList(){
    var result:Banned_DM[] = [];
    try {
      var res:any = await this.http.get(this.getBaseUrl("Banned"), this.getOptions()).toPromise();
      result = res;
    }catch(ex:any){
      console.error(ex);
    }
    return result;
  }
  async getBan(Id:number){
    var result:Banned_DM = new Banned_DM();
    try {
      var res:any = await this.http.get(this.getBaseUrl("Banned/"+Id), this.getOptions()).toPromise();
      result = res;
    }catch(ex:any){
      console.error(ex);
    }
    return result;
  }
  async createBan(ban:Banned_DM){
    try {
      var res:any = await this.http.post(this.getBaseUrl("Banned"), JSON.stringify(ban), this.getOptions()).toPromise();
    }catch(ex:any){
      console.error(ex);
    }
  }
  async editBan(ban:Banned_DM){
    try {
      var res:any = await this.http.put(this.getBaseUrl("Banned/"+ban.Id), JSON.stringify(ban), this.getOptions()).toPromise();
    }catch(ex:any){
      console.error(ex);
    }
  }
  async delBan(id:number){
    try {
      var res:any = await this.http.delete(this.getBaseUrl("Banned/"+id), this.getOptions()).toPromise();
    }catch(ex:any){
      console.error(ex);
    }
  }
}
