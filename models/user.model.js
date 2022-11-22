module.exports = (sequalize, Sequalize) => {
    const User = sequalize.define("user", {
        username: {
            type: Sequalize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequalize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequalize.STRING,
            allowNull: false,
        },
    });
    return User;
};