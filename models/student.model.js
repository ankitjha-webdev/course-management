module.exports = (sequalize, Sequalize) => {

    const Student = sequalize.define("student", {

        name: {
            type: Sequalize.STRING
        },
        email: {
            type: Sequalize.STRING
        },
        regno: {
            type: Sequalize.BIGINT
        },
        currentsem: {
            type: Sequalize.INTEGER
        },
        phone: {
            type: Sequalize.BIGINT
        }
    });

    return Student;
};