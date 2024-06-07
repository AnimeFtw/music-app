import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCl3au5BpobbqGkdtfKqOmeei0iX9TeJAc',

  authDomain: 'music-ee116.firebaseapp.com',

  projectId: 'music-ee116',

  storageBucket: 'music-ee116.appspot.com',

  appId: '1:1076809298655:web:066c076d43e00157476f6a'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
