import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({origin: 'https://ark-ai-l8in.onrender.com'}));    // allow frontend url to connect backend 
//app.options('*', cors());   // handle preflight requests

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected with database");
  }catch(err) {
    console.log("failed to connect with DB",err);
  }
}

/*app.post("/test", async (req, res)=>{
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` 
    },
    body: JSON.stringify({
      model:"gpt-4o-mini",
      messages: [{
        role: "user",
        content: req.body.message
      }]
    })
  };

  try{
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    //console.log(data.choices[0].message.content);   //reply
    res.send(data.choices[0].message.content);    // response displayed on frontend 
  } catch(err){ 
    console.log(err);
  }
}); */

