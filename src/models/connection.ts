
import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://root:123456@localhost:27017'; // passado a url do DB: mongodb://<username>:<password>@localhost:<port>

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL
) => mongoose.connect(mongoDatabaseURI); // função que realiza o connect com o DB. Note que o parametro é faultativo, caso não seja passado, será usado o valor do const MONGO_DB_URL

export default connectToDatabase;