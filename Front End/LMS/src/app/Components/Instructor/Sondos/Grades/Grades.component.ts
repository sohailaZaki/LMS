import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Grades',
  templateUrl: './Grades.component.html',
  styleUrls: ['./Grades.component.css']
})
export class GradesComponent implements OnInit {
  students = [
    { name: 'Sohaila', grade: 100 },
    { name: 'Sondos', grade: 100 },
    { name: 'Nada', grade: 100 },
    { name: 'Aya', grade: 100 },
    { name: 'Sara', grade: 100 }
  ];

  editingIndex: number | null = null;

  editGrade(index: number) {
    this.editingIndex = index;
  }

  saveGrade(index: number) {
    this.editingIndex = null;
    console.log('Updated Grade:', this.students[index]);
  }
  constructor() { }

  ngOnInit() {
  }

}
