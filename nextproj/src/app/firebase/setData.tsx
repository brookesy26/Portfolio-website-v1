import {app} from "./firebaseConfig"
import { getFirestore, collection, addDoc, setDoc, doc} from "firebase/firestore";

export const db = getFirestore(app)

 export const AddDoc = async () => {
  try{     
    await setDoc(doc(db, "Cities", "Manchester"), {
      name:"Manchester",
      county: "Greater London",
      country: "England"
    })
  } catch(e){
    console.error("Error adding document: ", e);
  }
 }

//  export const AddDoc = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "ash",
//       last: "brookes",
//       born: 1995
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
//  }
