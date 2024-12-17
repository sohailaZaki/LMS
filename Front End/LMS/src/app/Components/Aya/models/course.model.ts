export interface Instructor {
  firstName: string;
  lastName: string;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  status: string;
  instructor?: Instructor; 
  startDate?: string;
  endDate?: string;
}
