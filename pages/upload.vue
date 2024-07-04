<template>
  <div class="container">
    <h1>Unggah Resep Baru</h1>
    <form @submit.prevent="submitRecipe">
      <label for="judul">Judul:</label>
      <input type="text" id="judul" v-model="judul" required>

      <label for="deskripsi">Deskripsi:</label>
      <textarea id="deskripsi" v-model="deskripsi" required></textarea>

      <label for="urlGambar">URL Gambar:</label>
      <input type="text" id="urlGambar" v-model="urlGambar" required>

      <label for="asal">Asal:</label>
      <input type="text" id="asal" v-model="asal" required>

      <label for="kategori">Kategori:</label>
      <input type="text" id="kategori" v-model="kategori" required>

      <button class="btn" type="submit">Unggah Resep</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      judul: '',
      deskripsi: '',
      urlGambar: '',
      asal: '',
      kategori: ''
    };
  },
  methods: {
   async submitRecipe() {
  try {
    console.log("Mengirim data ke Firestore...");
    
    const docRef = await firestore.collection('resep').add({
      Judul: this.judul,
      Deskripsi: this.deskripsi,
      "URL Gambar": this.urlGambar,
      Asal: this.asal,
      Kategori: this.kategori,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    console.log("Resep berhasil ditambahkan!", docRef.id);
    alert("Resep berhasil diunggah!");
    this.$router.push('/');

  } catch (error) {
    console.error("Error adding recipe: ", error);
    alert(`Terjadi kesalahan saat mengunggah resep: ${error.message}`);
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

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #cc5200;
}
</style>
