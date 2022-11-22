module.exports = (sequalize, Sequalize) => {

    const Course = sequalize.define("course", {

        coursename: {
            type: Sequalize.STRING
        },
        coursecode: {
            type: Sequalize.STRING,
        },
        coursecredit: {
            type: Sequalize.INTEGER
        },
        coursetype: {
            type: Sequalize.STRING
        },
        coursebasket: {
            type: Sequalize.STRING
        },
        semester: {
            type: Sequalize.STRING
        }

    });

    return Course;

};