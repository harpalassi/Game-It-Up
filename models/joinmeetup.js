module.exports = function(sequelize) {
  var Joinmeetup = sequelize.define("Joinmeetup", {});

  Joinmeetup.associate = function(models) {
    Joinmeetup.belongsTo(models.Meetup, {
      onDelete: "cascade"
    });
    Joinmeetup.belongsTo(models.User, {
      onDelete: "cascade"
    });
  };

  return Joinmeetup;
};
