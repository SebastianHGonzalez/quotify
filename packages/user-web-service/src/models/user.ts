module.exports = (sequelize: any, DataTypes: any) => {
  const User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models: any) {
    // associations can be defined here
  };
  return User;
};
