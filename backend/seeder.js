import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async() => {
  try {
    // delete all data first
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //EXP : we insert products with the users field using admin
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id; //EXP : get admin's id

    const sampleProducts = products.map((product) => {
        //EXP : ... add all product and for the user use AdminUser's ID
        return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse)
    process.exit();

  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  };
};

const destroyData = async () => {
    try {
     // delete all data first
     await Order.deleteMany();
     await Product.deleteMany();
     await User.deleteMany();
 
     console.log('Data Destroyed!'.green.inverse)
     process.exit();
 
   } catch (error) {
     console.error(`${error}`.red.inverse);
     process.exit(1);
   };
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
};

