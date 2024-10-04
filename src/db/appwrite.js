import { Client, Databases } from "appwrite";
import config from "../config/env.js";

const client = new Client()
  .setEndpoint(config.projectUrl)
  .setProject(config.projectID);

const databases = new Databases(client);
// let promise = databases.listDocuments(
//     config.dbId,
//     config.collectionId,
//     [
//         Query.equal("productName","jeans")
//     ]
// );

async function getProducts() {
  try {
    return (await databases.listDocuments(config.dbId, config.collectionId));
  } catch (error) {
    console.log("error appwrite list documents :: ", error);
    return error;
  }
}

// const dbs = getProducts()
// dbs
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// console.log(config);

export { getProducts };
