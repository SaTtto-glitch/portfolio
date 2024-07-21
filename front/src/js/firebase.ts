import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // あなたのFirebaseの設定情報（APIキーなど）を入力してください
  // 詳細な情報はFirebaseコンソールのプロジェクト設定から取得できます
  apiKey: "*************************",
  authDomain: "*************************",
  projectId: "*************************",
  storageBucket: "*************************",
  messagingSenderId: "*************************",
  appId: "*************************",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, collection, addDoc, getDocs };
