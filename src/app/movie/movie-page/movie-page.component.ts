import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import { movieUrl } from 'src/environments/environment';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import {  FormControl, FormGroup } from '@angular/forms';
import { Movie, ResultsEntity } from 'src/Model/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit{

  movieResults!: Movie;
  faRefresh = faRefresh;
  isApiFailed: boolean = false;
  isMovieSelected: boolean = false;
  selectedMovieDetails!: ResultsEntity;
  searchForm!: FormGroup;
  name!: FormControl;
  searchText = '';
  isLoading:boolean = false;

  constructor(public movieService: MovieService){}

  ngOnInit() {
    this.isLoading= true;
    this.loadMoviePage();
    this.searchValidate();
  }

  loadMoviePage(){
    this.movieService.getMovies(movieUrl).subscribe(result=>{
      this.movieResults = result;
      this.isLoading= false;
    },error=>{
      this.isApiFailed = true;
      this.isLoading= false;
    })
  }

  searchValidate(){
    this.searchForm = new FormGroup({
      name: new FormControl('')
    })

    this.searchForm.get('name').valueChanges.pipe(debounceTime(250)).subscribe(data=>{
      if(data.length> 3 || data.length==0){
        this.searchText = data;
      }
    })
  }

  onPreviousPage(){
    if(this.movieResults.previous != null){
      this.movieService.getMovies(this.movieResults.previous).subscribe(result=>{
        this.movieResults = result;
      })
    }
  }

  onNextPage(){
    if(this.movieResults.next != null){
    this.movieService.getMovies(this.movieResults.next).subscribe(result=>{
      this.movieResults = result;
    })
  }
}

onRefreshClick(){
 window.location.reload();
}

onMovieClick(movie: ResultsEntity){
  this.isMovieSelected = true;
  this.selectedMovieDetails = movie;
}

}
