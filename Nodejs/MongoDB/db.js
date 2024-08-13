const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'oba';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  
  const db = client.db(dbName);
  const collection = db.collection('mahasiswa');


  // menambahkan data yang banyak ke dalam mongodb
  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // console.log('Inserted documents =>', insertResult);

  // melihat sebuah data semuanya
  // const filteredDocs = await collection.find({}).toArray();
  // console.log(filteredDocs);

  // update data, $set: maka dia menambahkan didalam field yang telah ditentukan, $unset: menghapus value dari field yg ada
  // const updateResult = await collection.updateOne({ _id: new ObjectId('66bb37d513d03d6b6dcf1ddd') }, { $unset: { a: "" } });
  // console.log(updateResult);

  // remove document
//   const deleteResult = await collection.deleteMany({ a: 3 });
// console.log('Deleted documents =>', deleteResult);




  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


