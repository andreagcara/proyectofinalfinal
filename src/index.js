import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = process.env.PORT || 5903;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
connectDB();
