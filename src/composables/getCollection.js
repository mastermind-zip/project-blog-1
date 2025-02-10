import { ref } from 'vue'
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { projectFirestore } from '../firebase/config'


const getCollection = (collectionName, filter = {}) => {

    const documents = ref(null)
    const error = ref(null)

    let q;
    const collectionRef = collection(projectFirestore, collectionName)

    if (filter.field && filter.value) {
        q = query(collectionRef, where(filter.field, "==", filter.value))
    } else {
        q = query(collectionRef)
    }

    onSnapshot(q, (snap) => {
        let res = []
        snap.docs.forEach(doc => {
            doc.data() && res.push({...doc.data(), id: doc.id })
        })
        documents.value = res 
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data'
    })

    return { error, documents }
}

export default getCollection