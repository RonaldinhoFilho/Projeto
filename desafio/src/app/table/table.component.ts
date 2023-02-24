import { Component } from '@angular/core';
import { tableDetailModel } from '../model/table.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TableComponent {

constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.getLiviros();
}


public  tableDetailModel : tableDetailModel | undefined;


 public livros: any;

 public getLiviros() : void {
   this.http.get('http://localhost:5239/WeatherForecast').subscribe(
    response => this.livros = response,
    error => console.log(error)
   );
 }


 get livaria (): string | number {
  console.log(this.livros); 
  return this.livros.date;
 }

}
