import mongoose from "mongoose";

export const connectDB =  async () => {
    await mongoose.connect('mongodb+srv://naflafadia0:1234@cluster0.5zagse1.mongodb.net/food-delivery')
    .then(()=>console.log("DB Connected"))
}