const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
  const uri = 'mongodb+srv://kuppamshireesha:Shireesha16@backend.gjeyzsb.mongodb.net/?retryWrites=true&w=majority'; // Replace with your local MongoDB connection URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the MongoDB database');

    const db = client.db('STUDENT_MANAGEMENT_SYSTEM1');
    const studentsCollection = db.collection('students');
    const coursesCollection = db.collection('courses');
    const gradesCollection = db.collection('grades');
    const attendanceCollection = db.collection('attendance');

    // await studentsCollection.deleteMany({});
    // await coursesCollection.deleteMany({});
    // await gradesCollection.deleteMany({});
    // await attendanceCollection.deleteMany({});
    const studentData = [
      {
        studentID: 'S001',
        name: 'John Doe',
        dateOfBirth: '1995-08-25',
        email: 'john.doe@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S002',
        name: 'Jane Smith',
        dateOfBirth: '1998-03-12',
        email: 'jane.smith@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S003',
        name: 'Michael Johnson',
        dateOfBirth: '1996-11-17',
        email: 'michael.johnson@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S004',
        name: 'Emily Davis',
        dateOfBirth: '1997-06-02',
        email: 'emily.davis@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S005',
        name: 'David Wilson',
        dateOfBirth: '1999-01-28',
        email: 'david.wilson@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S006',
        name: 'Olivia Martinez',
        dateOfBirth: '1998-09-10',
        email: 'olivia.martinez@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S007',
        name: 'Daniel Taylor',
        dateOfBirth: '1997-04-22',
        email: 'daniel.taylor@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S008',
        name: 'Sophia Anderson',
        dateOfBirth: '1996-12-07',
        email: 'sophia.anderson@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S009',
        name: 'Ethan Brown',
        dateOfBirth: '1999-07-15',
        email: 'ethan.brown@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S010',
        name: 'Mia Thompson',
        dateOfBirth: '1998-02-03',
        email: 'mia.thompson@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S011',
        name: 'Alexander Clark',
        dateOfBirth: '1997-10-19',
        email: 'alexander.clark@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S012',
        name: 'Ava Rodriguez',
        dateOfBirth: '1996-05-05',
        email: 'ava.rodriguez@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S013',
        name: 'Noah Lee',
        dateOfBirth: '1999-12-27',
        email: 'noah.lee@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S014',
        name: 'Isabella Green',
        dateOfBirth: '1998-08-14',
        email: 'isabella.green@email.com',
        gender: 'Female',
        enrollmentStatus: 'Enrolled'
      },
      {
        studentID: 'S015',
        name: 'William Hall',
        dateOfBirth: '1997-03-31',
        email: 'william.hall@email.com',
        gender: 'Male',
        enrollmentStatus: 'Enrolled'
      }
    ];

    const courseData = [
      {
        courseID: 'C001',
        courseName: 'Introduction to Computer Science',
        courseDescription: 'An introductory course covering the fundamentals of computer science.',
        department: 'Computer Science',
        credits: 3,
        instructorName: 'Dr. Jane Smith'
      },
      {
        courseID: 'C002',
        courseName: 'Calculus I',
        courseDescription: 'A foundational course in calculus.',
        department: 'Mathematics',
        credits: 4,
        instructorName: 'Prof. John Johnson'
      },
      {
        courseID: 'C003',
        courseName: 'English Composition',
        courseDescription: 'A course focusing on writing and composition skills.',
        department: 'English',
        credits: 3,
        instructorName: 'Dr. Sarah Davis'
      },
      {
        courseID: 'C004',
        courseName: 'Introduction to Psychology',
        courseDescription: 'An overview of basic concepts in psychology.',
        department: 'Psychology',
        credits: 3,
        instructorName: 'Prof. Michael Wilson'
      },
      {
        courseID: 'C005',
        courseName: 'Principles of Marketing',
        courseDescription: 'An introduction to the fundamentals of marketing.',
        department: 'Business',
        credits: 3,
        instructorName: 'Dr. Emily Anderson'
      }
    ];
    const gradesData = [
      { studentID: 'S001', courseID: 'C001', semester: 1, GPA: 8.5 },
      { studentID: 'S002', courseID: 'C002', semester: 2, GPA: 8.2 },
      { studentID: 'S003', courseID: 'C003', semester: 3, GPA: 8.6 },
      { studentID: 'S004', courseID: 'C004', semester: 4, GPA: 8.0 },
      { studentID: 'S005', courseID: 'C005', semester: 5, GPA: 7.5 },
      { studentID: 'S006', courseID: 'C001', semester: 6, GPA: 8.12 },
      { studentID: 'S007', courseID: 'C002', semester: 1, GPA: 8.9 },
      { studentID: 'S008', courseID: 'C003', semester: 2, GPA: 8.8 },
      { studentID: 'S009', courseID: 'C004', semester: 3, GPA: 9.3 },
      { studentID: 'S010', courseID: 'C005', semester: 4, GPA: 9.2 },
      { studentID: 'S011', courseID: 'C001', semester: 5, GPA: 9.8 },
      { studentID: 'S012', courseID: 'C002', semester: 7, GPA: 8.6 },
      { studentID: 'S013', courseID: 'C003', semester: 8, GPA: 9.7 },
      { studentID: 'S014', courseID: 'C004', semester: 2, GPA: 9.6 },
      { studentID: 'S015', courseID: 'C005', semester: 3, GPA: 7.6 }
    ];
    const attendanceData = [
      { studentID: 'S001', courseID: 'C001', attendanceStatus: 'Present' },
      { studentID: 'S002', courseID: 'C001', attendanceStatus: 'Present' },
      { studentID: 'S003', courseID: 'C001', attendanceStatus: 'Absent' },
      { studentID: 'S004', courseID: 'C002', attendanceStatus: 'Present' },
      { studentID: 'S005', courseID: 'C002', attendanceStatus: 'Absent' },
      { studentID: 'S006', courseID: 'C002', attendanceStatus: 'Present' },
      { studentID: 'S007', courseID: 'C003', attendanceStatus: 'Present' },
      { studentID: 'S008', courseID: 'C003', attendanceStatus: 'Absent' },
      { studentID: 'S009', courseID: 'C003', attendanceStatus: 'Present' },
      { studentID: 'S010', courseID: 'C004', attendanceStatus: 'Absent' },
      { studentID: 'S011', courseID: 'C004', attendanceStatus: 'Present' },
      { studentID: 'S012', courseID: 'C004', attendanceStatus: 'Present' },
      { studentID: 'S013', courseID: 'C005', attendanceStatus: 'Present' },
      { studentID: 'S014', courseID: 'C005', attendanceStatus: 'Absent' },
      { studentID: 'S015', courseID: 'C005', attendanceStatus: 'Present' },
    ];

    for (const student of studentData) {
      const existingStudent = await studentsCollection.findOne({ studentID: student.studentID });
      if (!existingStudent) {
        await studentsCollection.insertOne(student);
        console.log(`Student with studentID '${student.studentID}' inserted successfully`);
      } else {
        console.log(`Student with studentID '${student.studentID}' already exists. Skipping insertion.`);
      }
    }


   // Insert courses
   const resultCourses = await coursesCollection.insertMany(courseData);
   console.log(`${resultCourses.insertedCount} courses inserted successfully`);

   // Insert grades
   const resultGrades = await gradesCollection.insertMany(gradesData);
   console.log(`${resultGrades.insertedCount} grades inserted successfully`);

   // Insert attendance
   const resultAttendance = await attendanceCollection.insertMany(attendanceData);
   console.log(`${resultAttendance.insertedCount} attendance records inserted successfully`);

 // Update course names
 await coursesCollection.updateOne({ courseID: 'C001' }, { $set: { courseName: 'CSE' } });
 await coursesCollection.updateOne({ courseID: 'C002' }, { $set: { courseName: 'CSE AI & ML' } });
 await coursesCollection.updateOne({ courseID: 'C003' }, { $set: { courseName: 'ECE' } });
 await coursesCollection.updateOne({ courseID: 'C004' }, { $set: { courseName: 'CSE Integrated' } });
 await coursesCollection.updateOne({ courseID: 'C005' }, { $set: { courseName: 'BBA' } });

  // Delete the "instructorName" field
  await coursesCollection.updateMany({}, { $unset: { instructorName: '' } });
  console.log('Course names updated and instructorName field deleted successfully');
 
} 
catch (error) {
  console.error('Error connecting to the MongoDB database:', error);
} finally {
  await client.close();
  console.log('Disconnected from the MongoDB database');
}
}

connectToMongoDB();



  //git commands after adding crud operations to add changes
  // git add .
  // git commit -m "Intialcommit"

  //to connect with github
  //git remote add origin <remote_repository_url>

  //push your code to github finnally
  //git push -u origin master
