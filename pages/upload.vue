<template>
  <div class="container">
    <h1>Unggah Resep Baru</h1>
    <form @submit.prevent="submitRecipe">
      <label for="title">Judul:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="description">Deskripsi:</label>
      <textarea id="description" v-model="description" required></textarea>

      <label for="image">Gambar:</label>
      <input type="file" id="image" @change="onFileChange" required>

      <label for="bahan">Bahan-bahan:</label>
      <textarea id="bahan" v-model="bahan" required></textarea>

      <label for="langkah">Langkah-langkah:</label>
      <textarea id="langkah" v-model="langkah" required></textarea>

      <button type="submit">Unggah Resep</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      imageFile: null,
      bahan: '',
      langkah: ''
    };
  },
  methods: {
    onFileChange(event) {
      this.imageFile = event.target.files[0];
    },
    async submitRecipe() {
      try {
        if (!this.imageFile) {
          throw new Error('No image file selected');
        }

        // Upload gambar ke Firebase Storage
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(images/${this.imageFile.name});
        const snapshot = await imageRef.put(this.imageFile);
        const imageURL = await snapshot.ref.getDownloadURL();

        // Simpan resep ke Firestore
        await firebase.firestore().collection('recipes').add({
          title: this.title,
          description: this.description,
          imageURL: imageURL,
          bahan: this.bahan,
          langkah: this.langkah,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        console.log("Recipe added successfully!");

        // Redirect ke halaman utama dan reload data terbaru
        this.$router.push('/').then(() => {
          this.$nuxt.refresh(); // Refresh halaman untuk memuat data terbaru
        });

      } catch (error) {
        console.error("Error adding recipe: ", error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input, textarea {
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #cc5200;
}
</style>
