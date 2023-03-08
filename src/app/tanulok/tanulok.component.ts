import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-tanulok',
  templateUrl: './tanulok.component.html',
  styleUrls: ['./tanulok.component.scss']
})
export class TanulokComponent {

  students:any = [];
  scores:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getScores();
  }

  getStudents() {
    
    this.api.getStudents().subscribe({
      next: (students) => {
        console.log(students)
        this.students = students;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }

  getScores() {
    
    this.api.getScores().subscribe({
      next: (scores) => {
        console.log(scores)
        this.scores = scores;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }
}
