import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultsEntity } from 'src/Model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieDetails!: ResultsEntity;
 

  constructor(private http: HttpClient) { }

  getMovies(movieUrl: string){
    return this.http.get<any>(movieUrl,{
      headers: new HttpHeaders({
        'Authorization': `Token ${localStorage.getItem('token')}`
      })
    })
  }
}
