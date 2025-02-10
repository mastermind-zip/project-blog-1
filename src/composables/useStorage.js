import { ref } from 'vue';
import { projectStorage } from '../firebase/config';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    const uniqueName = `${Date.now()}_${file.name}`;
    filePath.value = `covers/${uniqueName}`;
    const storageReference = storageRef(projectStorage, filePath.value);
    
    try {
      const snapshot = await uploadBytes(storageReference, file);
      url.value = await getDownloadURL(snapshot.ref);
      console.log('Image URL:', url.value);
    } catch (err) {
      error.value = err.message;
      console.error('Error during upload:', err.message);
    }
  };

  const deleteImage = async(filePath) => {
    const storageRefence = storageRef(projectStorage, filePath)
    try {
      await deleteObject(storageRefence)
      console.log('image deleted')
    } catch(err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { url, filePath, error, uploadImage, deleteImage };
};

export default useStorage;