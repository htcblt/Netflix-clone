import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyD2Z_elXuYLGK0rD9YdhgebVAzEfgZ7GvY',
  authDomain: 'netflix-clone-5f011.firebaseapp.com',
  projectId: 'netflix-clone-5f011',
  storageBucket: 'netflix-clone-5f011.appspot.com',
  messagingSenderId: '919497659337',
  appId: '1:919497659337:web:37505ba1f4474e2df9ce18',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
