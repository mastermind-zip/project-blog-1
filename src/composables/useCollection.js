import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore' 
import { projectFirestore } from '@/firebase/config'


const useCollection = (collectionName) => {
    const error = ref(null)

    const addDocument = async(doc) => {
        error.value = null
        try {
            const colRef = collection(projectFirestore, collectionName)
            await addDoc(colRef, {
                ...doc,
                createdAt: serverTimestamp()
            })
        } catch(err) {
            console.log(err.message)
        }
    }

    return { error, addDocument }
}

export default useCollection