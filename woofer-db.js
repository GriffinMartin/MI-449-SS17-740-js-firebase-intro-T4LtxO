// Variables

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
function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  document.getElementById('woof-button').addEventListener('click', () => {
    var woof = document.getElementById('woof-text').value
    firebase.database().ref('woofs:').set({
      woof
    })
  })
}

createWoofInDatabase()

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
}

// Load all of the data
readWoofsInDatabase()
