import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, DocumentData } from "firebase/firestore";
// import { Query } from 'express-serve-static-core';


interface Channels {
    id: string;
    channel: DocumentData;
  };

const useCollection = (data: string) => {

const [documents, setDocuments] = useState<Channels[]>([]);
const collectionRef = query(collection(db, data));


useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot: any) => {
    const channelsResults: Channels[] = [];
    querySnapshot.docs.forEach((doc :any) => channelsResults.push({
        id: doc.id,
        channel: doc.data(),
    }));
    // querySnapshot.docs.forEach((doc) => console.log(doc));
    setDocuments(channelsResults);
    // console.log(channelsResults);
    });
}, []);

  return {documents}
}

export default useCollection
