const db = require('../models');
const Student = db.student;
const Course = db.course;

const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

// Create and Save a new Student
exports.savestudent = async (req, res) => {

    const student = {
        name: req.body.name,
        email: req.body.email,
        regno: req.body.regno,
        currentsem: req.body.currentsem,
        phone: req.body.phone
    }

    const data = await Student.create(student);
    res.status(200).json(data);
};



// update a student 
exports.updateStudent = async (req, res) => {
    const id = req.params.id;
    const student = {
        name: req.body.name,
        email: req.body.email,
        regno: req.body.regno,
        currentsem: req.body.currentsem,
        phone: req.body.phone
    }
    try {
        const IsStudent = await Student.findByPk(id);
        if (!IsStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        await Student.update(student, {
            where: { id: id }
        });

    } catch (error) {
        res.status(500).json(error);
    }

    res.status(204).json({ message: `Student updated successfully for ${id}` });
};

// delete a student
exports.deleteStudent = async (req, res) => {

    const id = req.params.id;
    try {
        const IsStudent = await Student.findByPk(id);
        if (!IsStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        await Student.destroy({
            where: { id: id }
        });

    } catch (error) {
        res.status(500).json(error);
    }

    res.status(204).json({ message: `Student deleted successfully for ${id}` });
};

// create a new course
exports.createCourse = async (req, res) => {
    const course = {
        coursename: req.body.coursename,
        coursecode: req.body.coursecode,
        codecredit: req.body.codecredit,
        coursetype: req.body.coursetype,
        coursebasket: req.body.coursebasket,
        semester: req.body.semester
    }
    
    const data = await Course.create(course);
    res.status(200).json(data);
};

exports.getStudentCourses = async (req, res) => {
    const data = Course.findAll({
        where: { regno: req.query.regno }
    });
    res.styaus(200).json(data);
};

// Find All Students
exports.findStudents = async (req, res) => {
    const data = await Student.findAll();

    res.status(200).json(data);
    // console.log("clicked");
};
// Get all student courses
exports.getStudentCourses = async (req, res) => {
    const id = req.query.regno;

    const data = await Student.findAll({
        include: [{
            model: Course,
            as: "course"
        }],
        where: { regno: id }
    })

    res.status(200).json(data);
};


// upload excel file and save to database

exports.upload = async (req, res) => {
    const regno = req.params.regno;
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
        }

        let path =
            __basedir + "/resources/static/assets/uploads/" + req.file.filename;

        readXlsxFile(path).then((rows) => {
            // skip header
            rows.shift();

            let courses = [];

            rows.forEach((row) => {
                let course = {
                    coursecode: row[0],
                    coursename: row[1],
                    coursecredit: row[2],
                    coursetype: row[3],
                    coursebasket: row[4],
                    semester: row[5],
                };

                courses.push(course);
            });

            Course.bulkCreate(courses, regno) // regno is the foreign key
                .then(() => {
                    res.status(200).send({
                        message: "Uploaded the file successfully: " + req.file.originalname,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Fail to import data into database!",
                        error: error.message,
                    });
                });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};

