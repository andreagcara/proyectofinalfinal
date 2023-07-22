import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(process.env.PORT, "0.0.0.0");
console.log('server on port', 3000)