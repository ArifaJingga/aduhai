<template>
  <div class="container">
    <h1>Unggah Resep Baru</h1>
    <form @submit.prevent="submitRecipe">
      <label for="title">Judul:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="description">Deskripsi:</label>
      <textarea id="description" v-model="description" required></textarea>

      <label for="imageURL">URL Gambar:</label>
      <input type="text" id="imageURL" v-model="imageURL" required>

      <label for="origin">Asal:</label>
      <input type="text" id="origin" v-model="origin" required>

      <label for="category">Kategori:</label>
      <input type="text" id="category" v-model="category" required>

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
      imageURL: '',
      origin: '',
      category: ''
    };
  },
  methods: {
    async submitRecipe() {
      try {
        // Simpan resep ke Firestore
        const docRef = await this.$fire.firestore.collection('recipes').add({
          title: this.title,
          description: this.description,
          imageURL: this.imageURL,
          origin: this.origin,
          category: this.category,
          createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp()
        });

        // Dapatkan ID dari dokumen yang baru dibuat
        const recipeId = docRef.id;

        // Tambahkan ID resep ke field 'recipeId' di Firestore
        await docRef.update({
          recipeId: recipeId
        });

        console.log("Recipe added successfully!");

        // Redirect ke halaman utama
        this.$router.push('/');

      } catch (error) {
        console.error("Error adding recipe: ", error);
        // Handle error, tampilkan pesan error, dll.
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
