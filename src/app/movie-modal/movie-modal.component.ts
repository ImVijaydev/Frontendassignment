import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ResultsEntity } from "src/Model/movie";

@Component({
    selector: 'app-movie-modal',
    templateUrl: './movie-modal.component.html',
    styleUrls: ['./movie-modal.component.css']
})

export class MovieModalComponent{
@Input() selectedMovieDetails!: ResultsEntity;
@Output() close = new EventEmitter<void>();

onCloseClick(){
    this.close.emit();
}
}