module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Tutorial;
};
