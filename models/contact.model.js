module.exports = (sequalize, Sequalize) => {

    const Contact = sequalize.define("contact", {
        name: {
            type: Sequalize.STRING
        },
        email: {
            type: Sequalize.STRING,
        },
        message: {
            type: Sequalize.TEXT
        }
    });

    return Contact;

};