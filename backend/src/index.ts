import express from "express";
import authRoutes from './routes/auth'
import downloadRoutes from './routes/download'


const PORT=process.env.PORT;

const app=express();

app.use("/api/auth",authRoutes);
app.use("/api",downloadRoutes);

app.listen(PORT,()=>{
    console.log(`Serve running on ${PORT}`)
})
app.use(express.json());



