import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'wordle-9dc45.firebaseapp.com',
  projectId: 'wordle-9dc45',
  storageBucket: 'wordle-9dc45.appspot.com',
  messagingSenderId: '622924600143',
  appId: '1:622924600143:web:a5af08bf3c9399c502eb3a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
