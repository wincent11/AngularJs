import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: { name: string, note: number }[] = [{name: 'Daali Anatolii', note: 10}];
  newStudent: string = '';
  notification: string = '';
  
    addStudent(): void {
      let newRecord = {
        name: '',
        note: 0
      };
      let newNote = +this.newStudent.slice(-2)

      this.newStudent = this.newStudent.replace(/(, ).*/g, '')
      if ((newNote > 10 || newNote < 1 || isNaN(newNote)) && this.newStudent !== '') {
        this.notification = "Please, enter the values in the following format: your name, comma and your valid note (0-10)"
      } else {
        newRecord.name = this.newStudent;
        newRecord.note = newNote;
        this.students.push(newRecord);
        this.newStudent = ''
      }
    }
  
  removeStudent(): void {
    this.students = this.students.filter(el => el.note > 5);
  }
}
  