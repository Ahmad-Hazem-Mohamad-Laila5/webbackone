import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.Route.js";
import productRouter from "./routes/product.Route.js";
import cartRouter from "./routes/cart.Route.js";
import orderRouter from "./routes/order.Route.js";

// App config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user',userRouter)
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
