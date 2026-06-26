import mongoose from 'mongoose'
import User from "../models/user.js"
import dotenv from "dotenv";

dotenv.config();
const mongo_db_url = process.env.MONGO_URI;

//console.log("InsertUsers Seed : Database URL is:", mongo_url);

async function seedUsers() {
    await mongoose.connect(mongo_db_url);
    // const users = [
    //     {
    //         name: "Deepak Doe",
    //         email: "deepak@example.com",
    //         date: new Date("2026-06-21T17:44:56.080Z")
    //     },
    //     {
    //         name: "Sonu Sahni",
    //         email: "sonu@gmail.com",
    //         date: new Date()
    //     }
    // ];

    const users = [
  { name: "Deepak Doe", email: "deepak@example.com", date: new Date("2026-06-21T17:44:56.080Z") },
  { name: "Sonu Sahni", email: "sonu@gmail.com", date: new Date() },
  { name: "Priya Sharma", email: "priya.sharma@example.com", date: new Date("2026-05-10T09:30:00.000Z") },
  { name: "Amit Verma", email: "amit.verma@example.com", date: new Date("2026-04-15T14:20:00.000Z") },
  { name: "Neha Gupta", email: "neha.gupta@example.com", date: new Date("2026-03-12T11:45:00.000Z") },
  { name: "Ravi Kumar", email: "ravi.kumar@example.com", date: new Date("2026-02-01T08:00:00.000Z") },
  { name: "Sneha Patel", email: "sneha.patel@example.com", date: new Date("2026-01-25T16:10:00.000Z") },
  { name: "Arjun Mehta", email: "arjun.mehta@example.com", date: new Date("2026-06-01T12:00:00.000Z") },
  { name: "Kiran Joshi", email: "kiran.joshi@example.com", date: new Date("2026-05-05T18:30:00.000Z") },
  { name: "Manish Rao", email: "manish.rao@example.com", date: new Date("2026-04-22T07:15:00.000Z") },
  { name: "Pooja Singh", email: "pooja.singh@example.com", date: new Date("2026-03-18T20:00:00.000Z") },
  { name: "Rahul Nair", email: "rahul.nair@example.com", date: new Date("2026-02-14T10:10:00.000Z") },
  { name: "Anjali Desai", email: "anjali.desai@example.com", date: new Date("2026-01-30T15:45:00.000Z") },
  { name: "Vikas Bhatia", email: "vikas.bhatia@example.com", date: new Date("2026-06-10T09:00:00.000Z") },
  { name: "Meena Reddy", email: "meena.reddy@example.com", date: new Date("2026-05-20T13:25:00.000Z") },
  { name: "Suresh Iyer", email: "suresh.iyer@example.com", date: new Date("2026-04-08T17:40:00.000Z") },
  { name: "Divya Kapoor", email: "divya.kapoor@example.com", date: new Date("2026-03-02T19:55:00.000Z") },
  { name: "Nitin Malhotra", email: "nitin.malhotra@example.com", date: new Date("2026-02-22T06:30:00.000Z") },
  { name: "Shreya Banerjee", email: "shreya.banerjee@example.com", date: new Date("2026-01-18T21:15:00.000Z") },
  { name: "Ajay Chawla", email: "ajay.chawla@example.com", date: new Date("2026-06-12T08:45:00.000Z") },
  { name: "Ritika Das", email: "ritika.das@example.com", date: new Date("2026-05-28T14:00:00.000Z") },
  { name: "Kunal Saxena", email: "kunal.saxena@example.com", date: new Date("2026-04-19T09:20:00.000Z") },
  { name: "Swati Mishra", email: "swati.mishra@example.com", date: new Date("2026-03-25T11:35:00.000Z") },
  { name: "Gaurav Jain", email: "gaurav.jain@example.com", date: new Date("2026-02-05T16:50:00.000Z") },
  { name: "Roshni Kaur", email: "roshni.kaur@example.com", date: new Date("2026-01-12T07:05:00.000Z") },
  { name: "Tarun Gill", email: "tarun.gill@example.com", date: new Date("2026-06-15T18:15:00.000Z") },
  { name: "Bhavna Yadav", email: "bhavna.yadav@example.com", date: new Date("2026-05-07T20:25:00.000Z") },
  { name: "Sanjay Roy", email: "sanjay.roy@example.com", date: new Date("2026-04-02T12:40:00.000Z") },
  { name: "Komal Agarwal", email: "komal.agarwal@example.com", date: new Date("2026-03-14T09:55:00.000Z") },
  { name: "Ramesh Dutta", email: "ramesh.dutta@example.com", date: new Date("2026-02-18T15:10:00.000Z") },
  { name: "Alka Sen", email: "alka.sen@example.com", date: new Date("2026-01-08T19:20:00.000Z") },
  { name: "Varun Chopra", email: "varun.chopra@example.com", date: new Date("2026-06-05T08:30:00.000Z") },
  { name: "Nisha Bhatt", email: "nisha.bhatt@example.com", date: new Date("2026-05-16T13:45:00.000Z") },
  { name: "Ashok Menon", email: "ashok.menon@example.com", date: new Date("2026-04-11T17:00:00.000Z") },
  { name: "Seema Rani", email: "seema.rani@example.com", date: new Date("2026-03-06T20:15:00.000Z") },
  { name: "Harish Ghosh", email: "harish.ghosh@example.com", date: new Date("2026-02-25T07:30:00.000Z") },
  { name: "Pallavi Kulkarni", email: "pallavi.kulkarni@example.com", date: new Date("2026-01-22T10:45:00.000Z") },
  { name: "Mohit Arora", email: "mohit.arora@example.com", date: new Date("2026-06-18T15:00:00.000Z") },
  { name: "Anita Dhingra", email: "anita.dhingra@example.com", date: new Date("2026-05-02T09:15:00.000Z") },
  { name: "Rajeev Sinha", email: "rajeev.sinha@example.com", date: new Date("2026-04-25T13:30:00.000Z") },
  { name: "Lata Chauhan", email: "lata.chauhan@example.com", date: new Date("2026-03-09T16:45:00.000Z") },
  { name: "Devendra Tripathi", email: "devendra.tripathi@example.com", date: new Date("2026-02-28T20:00:00.000Z") },
  { name: "Sunita Bhonsle", email: "sunita.bhonsle@example.com", date: new Date("2026-01-14T08:15:00.000Z") },
  { name: "Parth Shetty", email: "parth.shetty@example.com", date: new Date("2026-06-08T11:30:00.000Z") },
  { name: "Maya Fernandes", email: "maya.fernandes@example.com", date: new Date("2026-05-12T14:45:00.000Z") },
  { name: "Raghav Pillai", email: "raghav.pillai@example.com", date: new Date("2026-04-06T18:00:00.000Z") },
  { name: "Shalini Saxena", email: "shalini.saxena@example.com", date: new Date("2026-03-21T07:15:00.000Z") }
  ]; 

    await User.insertMany(users);
    console.log("Bulk users inserted successfully!");
    mongoose.disconnect();
}
export default seedUsers;