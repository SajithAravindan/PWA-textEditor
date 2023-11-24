import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Method that accepts some content and adds it to the database
export const putDb = async (content) => {

  const db = await openDB('jate', 1);// Open the database
  const tx = db.transaction('jate', 'readwrite');// Open a transaction
  const store = tx.objectStore('jate');// Get the store

  const request = store.put({ id: 1, content: content })// Add the object to the store
  const result = await request;// Wait for the request to complete

  console.log('Data saved to Database', result);
  await tx.done; // Close the transaction  
}

//Method that gets all the content from the database
export const getDb = async () => {

  const db = await openDB('jate', 1);// Open the database
  const tx = db.transaction('jate', 'readonly');// Open a transaction
  const store = tx.objectStore('jate');// Get the store
  const content = await store.getAll();// Get all the content from the store
  await tx.done;// Close the transaction
  return content?.[0]?.content;// Return the content
}

initdb();
