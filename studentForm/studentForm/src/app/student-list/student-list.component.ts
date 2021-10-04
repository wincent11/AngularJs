import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  datePipe: DatePipe = new DatePipe('en-US');
  
  students: { firstName: string, lastName: string, bornDate: string|null, faculty:string }[] = [];

  
  firstName: string = '';
  lastName: string = '';
  bornDate: string = new Date().toISOString().slice(0, 10);
  faculty: string = 'Mathematics';
  

  addStudent(): void {
    if(this.firstName!='' && this.lastName!='' && this.bornDate!=''){
      let newRecord = {
        firstName: this.firstName,
        lastName: this.lastName,
        bornDate: this.datePipe.transform(this.bornDate, 'dd MMMM, yyyy'),
        faculty: this.faculty
      }; 

      this.students.push(newRecord);
      this.firstName = '';
      this.lastName = '';
      this.bornDate = new Date().toISOString().slice(0, 10);
      this.faculty = 'Mathematics';
    }
  }
}
