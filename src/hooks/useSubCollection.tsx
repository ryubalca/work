import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp,
  message: string,
  user: null | {
    uid: string,
    photo: string,
    email: string,
    displayName: string,
  },
};

const useSubCollection = (collectionName: string, subCollectionName: string) => {

  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector(state => state.channel.channelId);

  useEffect(() => {

    let collectionRef = collection(db, collectionName, String(channelId), subCollectionName);

    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    onSnapshot(collectionRefOrderBy, (snapShot) => {
      let results: Messages[] = [];
      snapShot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [collectionName, subCollectionName, channelId]);

  return { subDocuments }
}

export default useSubCollection;
