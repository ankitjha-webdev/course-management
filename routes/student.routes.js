module.exports = app => {
    const studentController = require('../controllers/student.controller');
    const router = require('express').Router();
    const upload = require('../middlewares/upload');


    // upload excel file and save to database
    router.post('/upload', upload.single("file"), studentController.upload);

    // create student route
    router.post('/', studentController.savestudent);

    // update student route
    router.put('/:id', studentController.updateStudent);

    // delete student route 
    router.delete('/:id', studentController.deleteStudent);

    // Get all students
    router.get('/getallcourse', studentController.getStudentCourses);

    // create course route
    router.post('/course', studentController.createCourse);

    // Find All students
    router.get('/all', studentController.findStudents);

    // Get Student Courses
    router.get('/getstudentcourse', studentController.getStudentCourses);

    app.use('/api/student', router);
}
