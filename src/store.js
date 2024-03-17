import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc,addDoc, updateDoc,deleteDoc,query } from 'firebase/firestore/lite';


export default new class Store {
    


    constructor(){
        this.roomId = "omar-room"
        this.x = 4
        console.log("Store Created")
        // Import the functions you need from the SDKs you need
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyDCZsmbYNV1C494T9rDot5jT91bf1eEBSQ",
        authDomain: "fakegpt-d7649.firebaseapp.com",
        projectId: "fakegpt-d7649",
        storageBucket: "fakegpt-d7649.appspot.com",
        messagingSenderId: "840473404747",
        appId: "1:840473404747:web:dc6354a25f76ef1adff4ce"
        };

        // Initialize Firebase
        this.firebase = initializeApp(firebaseConfig);
    }

    getLatest(){

        return this.x++;

    }

    getRoomMessages(){
        const db = getFirestore(this.firebase);
        const coll = collection(db, 'rooms', this.roomId, "messages");
        return getDocs(coll);
    }

    addMessageToRoom(message){
        const db = getFirestore(this.firebase);
        const coll = collection(db, 'rooms', this.roomId, "messages");
        return addDoc(coll, message)
    }

    getRooms(){
        const db = getFirestore(this.firebase);
        const coll = collection(db, 'rooms');
        return getDocs(coll);
    }

    setRoomId(roomId){
        this.roomId = roomId
    }

    getData(){
        const db = getFirestore(this.firebase);
        const citiesCol = collection(db, 'rooms', this.roomId, "messages");
        const citySnapshot = getDocs(citiesCol);
        citySnapshot.then((res) => {
            console.log(res)
            res.forEach(d => {
                console.log(d.data())
            })
        })
        console.log(citySnapshot)
    }

    clearRoom= async () => {
        const db = getFirestore(this.firebase);
        const coll = collection(db, 'rooms', this.roomId, "messages");
        const docs = await getDocs(query(coll))
        docs.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
    }

    addToDatabase(){
        
    }
}