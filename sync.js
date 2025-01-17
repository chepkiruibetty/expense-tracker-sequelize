// sync.js
const { sequelize } = require('./models');

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
}).catch(err => {
  console.error("Error creating database: ", err);
});
