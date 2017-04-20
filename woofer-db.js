// TODO Sign into the database anonymously
var config = {
  apiKey: 'AIzaSyCu9M6V6i2dnQ3dReqNph77elpz2NOt68o',
  authDomain: 'mi449-270ba.firebaseapp.com',
  databaseURL: 'https://mi449-270ba.firebaseio.com',
  projectId: 'mi449-270ba',
  storageBucket: 'mi449-270ba.appspot.com',
  messagingSenderId: '590794817063'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
const createWoofInDatabase = (woof) => {
  // TODO create a new record in Firebase
  firebase.database().ref('woofs').push(woof)
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
const readWoofsInDatabase = () => {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woofs').on('child_added', (addWoof) => {
    addWoofRow(addWoof.key, addWoof.val())
    // console.log(newWoof.val())
  })
  firebase.database().ref('woofs').on('child_changed', (updateWoof) => {
    updateWoofRow(updateWoof.key, updateWoof.val())
    // console.log(editWoof.val())
  })
  firebase.database().ref('woofs').on('child_removed', (deleteWoof) => {
    deleteWoofRow(deleteWoof.key, deleteWoof.val())
  })
}

// UPDATE the woof in Firebase
const updateWoofInDatabase = (woofKey, woofText) => {
  // TODO update the record in Firebase
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
const deleteWoofFromDatabase = (woofKey) => {
  // TODO delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
