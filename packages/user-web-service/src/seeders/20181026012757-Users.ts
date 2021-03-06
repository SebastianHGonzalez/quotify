module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
    return queryInterface.bulkInsert("Users", [{
      id: 1,
      firstName: "Sebastian",
      lastName: "Gonzalez",
      email: "sebastian.h.gonzalez@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhon@doe.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstName: "Jane",
      lastName: "Dallas",
      email: "jane@dallas.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface: any, Sequelize: any) => {
    return queryInterface.bulkDelete("Users", undefined, {});
  }
};
