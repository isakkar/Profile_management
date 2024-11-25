export class Profile {
  id: number;
  surname: string;
  name: string;
  email: string;
  type: string;
  class?: string; // Only for students
  teaching?: string[]; // Only for professors

  constructor(
    id: number,
    surname: string,
    name: string,
    email: string,
    type: string,
    extraAttribute?: string | string[]
  ) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.email = email;
    this.type = type;

    if (type === 'student' && typeof extraAttribute === 'string') {
      this.class = extraAttribute;
    } else if (type === 'professor' && Array.isArray(extraAttribute)) {
      this.teaching = extraAttribute;
    }
  }
}

// Hardcoded array of Profile objects
export const profiles: Profile[] = [
  new Profile(1, 'Doe', 'John', 'john.doe@student.edu', 'student', 'CDOF6'),
  new Profile(2, 'Smith', 'Jane', 'jane.smith@professor.edu', 'professor', ['CDOF6', 'CDOF1']),
  new Profile(3, 'Brown', 'Chris', 'chris.brown@admin.edu', 'admin'),
  new Profile(4, 'Taylor', 'Emily', 'emily.taylor@student.edu', 'student', 'CDOF1'),
  new Profile(5, 'Johnson', 'Michael', 'michael.johnson@professor.edu', 'professor', ['CDOF6']),
  new Profile(6, 'Williams', 'Olivia', 'olivia.williams@admin.edu', 'admin')
];
