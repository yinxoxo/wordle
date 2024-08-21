import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchWord = async () => {
  const dictionaryRef = doc(db, 'dictionary', 'utqCabOGAl6tuQm4Ddam');
  const dictionarySnap = await getDoc(dictionaryRef);

  if (dictionarySnap.exists()) {
    const words = dictionarySnap.data().word;
    return words;
  } else {
    console.log('No such document!');
    return [];
  }
};
