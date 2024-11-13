import { initializeApp } from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyApMeEXTi1z7F1iFXz6w10rpLq5wtovFJ4",
    authDomain: "heeras-website.firebaseapp.com",
    projectId: "heeras-website",
    storageBucket: "heeras-website.appspot.com",
    messagingSenderId: "830498250216",
    appId: "1:830498250216:web:b40400ab3b0e7ef575585d",
    measurementId: "G-W9EECBH8L1"
  };

export const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const listRef = ref(storage, 'gallery');
export const getUrls = () => {
    let urls = [];
    listAll(listRef)
        .then((res) => {
            res.items.forEach((data) => {
                getDownloadURL(ref(storage, data.fullPath))
                    .then((url) => {urls.push(url)})
                });
        });
    return urls;
}