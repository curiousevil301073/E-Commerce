
const db = require("./models");
//const { sequelize, datatype} = require("sequelize");
//const { FORCE } = require("sequelize/types/index-hints");
db.sequelize .sync({alter:true});
console.log(db);