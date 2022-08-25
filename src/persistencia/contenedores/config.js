import mongoose from "mongoose";
import 'dotenv/config'

const config = {
    mongoDB:{
        URL:`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@proyectocoder.cji9bdx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoDB.URL, config.mongoDB.options);
    console.log("Connected Mongo DB");
  } catch (error) {
    console.log("Error en la conexión a mongoDB", error);
  }
};