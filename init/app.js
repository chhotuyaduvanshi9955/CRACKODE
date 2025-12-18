const mongoose = require('mongoose');
const resturantsData=require("./data.js");
const Resturants=require("../modals/resturants");


const MONGO_URL='mongodb://127.0.0.1:27017/resturants';
main().then(()=>{          ///// calling main function 
    console.log("connected to DB");
})
.catch((err) =>{ 
    console.log(err)
});
async function main() {     ///// main is async function
  await mongoose.connect(MONGO_URL);
}

const seedDB=async()=>{
    await Resturants.deleteMany({});/// it will delete all existing data in database 
    await Resturants.insertMany(resturantsData);/// it will insert all data from data.js file to database
    console.log("data inserted");
}

seedDB().then(()=>{
    mongoose.connection.close();/// it will close the connection after seeding the database
})