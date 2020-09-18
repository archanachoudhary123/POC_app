const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DashboardSchema =  new mongoose.Schema({
        /*user_name: {
            type : String
          },*/
        user: {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Login'
        },
        date:{
            type: Date,
            default:Date.now
        },
        description: {
          type : String 
        },
        amount:{
            type: String
          },


        });

module.exports= Dashboard = mongoose.model('Dashboard', DashboardSchema);