// In-memory database for testing without MongoDB
let users = [];
let nextId = 1;

const findUser = async (query) => {
    if (query.email) {
        return users.find(user => user.email === query.email);
    }
    if (query.phoneNo) {
        return users.find(user => user.phoneNo === query.phoneNo);
    }
    if (query.$or) {
        return users.find(user => 
            query.$or.some(condition => 
                (condition.email && user.email === condition.email) ||
                (condition.phoneNo && user.phoneNo === condition.phoneNo)
            )
        );
    }
    return null;
};

const createUser = async (userData) => {
    const user = {
        _id: nextId++,
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    users.push(user);
    return user;
};

module.exports = { findUser, createUser };
