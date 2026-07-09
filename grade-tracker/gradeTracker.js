const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  getStudent(name) {
    return this.students.find((s) => s.name === name) || null;
  },

  getStudentAverage(name) {
    const student = this.getStudent(name);
    if (!student) return null;
    const values = Object.values(student.grades);
    return values.reduce((sum, g) => sum + g, 0) / values.length;
  },

  getSubjectAverage(subject) {
    const relevant = this.students.filter((s) => subject in s.grades);
    if (relevant.length === 0) return null;
    const total = relevant.reduce((sum, s) => sum + s.grades[subject], 0);
    return total / relevant.length;
  },

  getTopStudent() {
    if (this.students.length === 0) return null;
    return this.students.reduce((top, s) =>
      this.getStudentAverage(s.name) > this.getStudentAverage(top.name) ? s : top
    );
  },

  getStrugglingStudents() {
    return this.students.filter((s) => this.getStudentAverage(s.name) < 70);
  },

  getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },

  generateReportCard(name) {
    const student = this.getStudent(name);
    if (!student) return `No record found for ${name}`;
    const average = this.getStudentAverage(name);
    const lines = Object.entries(student.grades)
      .map(([subject, score]) => `  ${subject}: ${score} (${this.getLetterGrade(score)})`)
      .join("\n");
    return `Report Card for ${name}\n${lines}\n  Average: ${average.toFixed(2)} (${this.getLetterGrade(average)})`;
  },
};

// Tests from the README
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.666...
console.log(gradeTracker.getSubjectAverage("math"));       // 75.666...
console.log(gradeTracker.getTopStudent());                 // Alice's object
console.log(gradeTracker.getStrugglingStudents());         // [Charlie's object]
console.log(gradeTracker.generateReportCard("Alice"));