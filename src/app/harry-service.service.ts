import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HarryServiceService {

  constructor(private http:HttpClient) { }

  getCharacter(){
    return this.http.get(`https://www.potterapi.com/v1/characters?key=${environment.key}`)
  }
}
