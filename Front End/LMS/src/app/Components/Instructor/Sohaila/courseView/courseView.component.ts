import { AssigmentSubmissionsService } from './../../Services/AssigmentSubmissions.service';
import { CoursesServices } from './../../Services/Courses.services';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';

interface DataItem {
  ID: number;
  name: string;
  progress: number;
}
interface Assigment {
  id: number,
  title: string,
  course: string,
  image:string,
  DeadLine: Date,
  filePath:string,
  assigmentSubmession: any[],
}
interface student{
  id:number,
  name:string,
  progress:number
}
interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}
interface TableRow {
  id: number;
  attribute: string;
  value: number;
  isEditing: boolean;
}
@Component({
  selector: 'app-courseView',
  templateUrl: './courseView.component.html',
  styleUrls: ['./courseView.component.css']
})

export class CourseViewComponent implements OnInit {
  searchValue = '';
  visible = false;
  courseService:CoursesServices = new CoursesServices();
  assigmentSubmissionsService:AssigmentSubmissionsService = new AssigmentSubmissionsService();
  courses:any[]=[];
  students:any[]=[];
  courseAssigments:Assigment[]|undefined;
studentSubmessions:number=0;
studentid:number=0;
  displayedStudents: any[]=[];
  currentPage: number = 1; // Tracks the current page
  itemsPerPage: number = 8; // Number of students per page
  totalPages: number = 1; // Total pages
  private allAttributes: string[] = [
    'Quizzes',
    'Theoretical',
    'Assignments',
    'Yearwork',
    'Practical',
    'Midterm'
  ];

  availableAttributes: string[] = [...this.allAttributes];
  rows: TableRow[] = [];
  totalValue: number = 0;
  maxValue: number = 100;
  idCounter: number = 0;
  i = 0;
  editId: string | null = null;
  constructor(private messageService: NzMessageService) {
    this.courseAssigments=this.courseService.getAssignmentsByCourse(1);
    console.log(this.courseAssigments);
    this.studentSubmessions =this.assigmentSubmissionsService.getActualStudentSubmissions(1,2021170247);
    console.log(this.studentSubmessions);
    this.courses =this.courseService.getCourses();
    this.students =this.courseService.getStudentinCourse(1);
    console.log(this.students);
  }

  ngOnInit() {
    this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
    this.updateDisplayedStudents();
  }

  angularCourse ={
    courseName:"Angular Course",
    cousreDec:"Consume REST services using Observables. Modularize applications with the Component Router. Capture and validate input with template-driven forms. Leverage continued support with after-course one-on-one instructor coaching and computing sandbox."}


  Categories:{filedName:string,fieldElements:string[]}[]=[
    {filedName:"Lectures",fieldElements:["Lec1","Lec2","Lec3"]},
    {filedName:"Labs",fieldElements:["Lab1","Lab2","Lab3"]},
    {filedName:"Videos",fieldElements:["Lec1 Video link","Lec2 Video link"," Lec3 Video  link"]}

    ]

    listOfData: DataItem[] = this.students
    listOfDisplayData = [...this.students];


    calcProgress(studentSubmissions: number, numOfCourseAssignments: number | undefined): string {
      if (studentSubmissions && numOfCourseAssignments) {
        const progress = (studentSubmissions / numOfCourseAssignments) * 100;
        return progress.toFixed(); // تحويل للنسبة المئوية
      } else {
        return '0'; // لو البيانات ناقصة
      }
    }

    reset(): void {
      this.searchValue = '';
      this.search();
      this.students = this.courseService.getStudentinCourse(1);
    }

    search(): void {
      this.visible = false;
      const searchId = Number(this.searchValue);
      if(!isNaN(searchId)){

        this.students = this.students.filter((item: student) => (item.id + '').indexOf(searchId.toString()) > -1);
      }
      else this.students = this.courseService.getStudentinCourse(1);
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
      this.updateDisplayedStudents();
    }


    updateDisplayedStudents() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displayedStudents = this.students.slice(startIndex, endIndex);
    }

    onPageIndexChange(newPage: number) {
      this.currentPage = newPage;
      this.updateDisplayedStudents();
    }
    handleChange({ file, fileList }: NzUploadChangeParam): void {
      const status = file.status;
      if (status !== 'uploading') {
        console.log(file, fileList);
      }
      if (status === 'done') {
        this.messageService.success(`${file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.messageService.error(`${file.name} file upload failed.`);
      }
    }



  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    if (this.availableAttributes.length > 0 && this.totalValue < this.maxValue) {
      this.rows.push({
        id: this.idCounter++,
        attribute: this.availableAttributes[0],
        value: 0,
        isEditing:true
      });

      this.availableAttributes.splice(0, 1);
    }
  }

  deleteRow(id: number): void {
    const rowIndex = this.rows.findIndex(row => row.id === id);
    if (rowIndex !== -1) {
      const deletedAttribute = this.rows[rowIndex].attribute;
      this.rows.splice(rowIndex, 1);
      this.availableAttributes.push(deletedAttribute);
      this.availableAttributes.sort();
      this.updateTotalValue();
    }
  }

  updateValue(row: TableRow): void {
    // Ensure value doesn't exceed remaining available points
    const otherRowsTotal = this.rows
      .filter(r => r.id !== row.id)
      .reduce((sum, r) => sum + r.value, 0);

    const maxAllowed = this.maxValue - otherRowsTotal;
    row.value = Math.min(row.value, maxAllowed);

    this.updateTotalValue();
  }

  updateTotalValue(): void {
    this.totalValue = this.rows.reduce((sum, row) => sum + row.value, 0);
  }

  isAddDisabled(): boolean {
    return this.availableAttributes.length === 0 || this.totalValue >= this.maxValue;
  }

  getAvailableAttributes(currentAttribute: string): string[] {
    return [currentAttribute, ...this.availableAttributes];
  }
  toggleEdit(row: TableRow): void {
    row.isEditing = !row.isEditing;
  }

  // New method to submit row
  submitRow(row: TableRow): void {
    row.isEditing = false;
  }
}

