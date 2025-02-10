<template>
    <div class="container">
        <h1 class="heading-primary">Upload post to our forum</h1>
        <h2 class="text-description">Share your vision through your photo</h2>
        <form class="form" @submit.prevent="handleSubmit">
            <div class="form-input">
                <label class="input-label">Your nickname</label>
                <input type="text" v-model="displayName" placeholder="Type here..." class="input-field" required />
            </div>
            <div class="form-input">
                <label class="input-label">What is the title for your post?</label>
                <input type="text" v-model="title" placeholder="Type here..." class="input-field" required />
            </div>
            <div class="form-input">
                <label class="input-label">How would you describe it? What can you tell us about it?</label>
                <textarea class="input-field" v-model="description" placeholder="Type here..." required></textarea>
            </div>
            <div class="form-input">
                <label class="input-label">Upload your image</label>
                <input type="file" @change="handleChange" class="file-upload" required>
                <div class="error" v-if="fileError">{{ fileError }}</div>
            </div>
            <button type="submit" class="btn-submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue"
import useCollection from '@/composables/useCollection'
import useStorage from '@/composables/useStorage'
import { timestamp } from '@/firebase/config'
    export default {
        setup() {
            const displayName = ref('')
            const title = ref('')
            const description = ref('')
            const file = ref(null)
            const fileError = ref(null)

            const { error, addDocument } = useCollection('articles')
            const { url, filePath, uploadImage } = useStorage() 


            const handleSubmit = async() => {
                if(file.value) {
                    await uploadImage(file.value)
                    await addDocument({
                        displayName: displayName.value,
                        title: title.value,
                        description: description.value,
                        coverUrl: url.value,
                        filePath: filePath.value,
                        createdAt: timestamp()
                    })
                    if(!error.value) {
                        displayName.value = ''
                        title.value = ''
                        description.value = ''
                    }
                    else {
                        console.log('error', error.value)
                    }
                }
            }


            const types = ['image/png', 'image/jpeg']

            const handleChange = (e) => {
                const selected = e.target.files[0]

                if( selected && types.includes(selected.type) ) {
                    file.value = selected
                    fileError.value = null
                    console.log(selected);
                } else {
                    file.value = null
                    fileError.value = 'Please select an image file (png or jpg)'
                }

            }
            

            return { displayName, title, description, handleChange, fileError, handleSubmit }
        }
    }
</script>

<style scoped>
.form {
    margin: 4.8rem 0;
}

.form-input {
    display: grid;
    grid-template-columns: 0.5fr;
    gap: 0.4rem;
    margin-top: 1.6rem;
}

.input-label {
    font-size: 1.6rem;
    font-weight: 300;
}

.input-field {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 5px;
}

.btn-submit {
    margin-top: 2.4rem;
    padding: 0.8rem 2.4rem;
    font-size: 1.6rem;
    align-self: flex-end;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 5px;
}


.error {
    font-size: 1.4rem;
    color: #cb3f3f;
}


</style>