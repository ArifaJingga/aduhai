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
        // Simpan resep ke Firestore
        const docRef = await this.$fireStore.collection('resep').add({
          Judul: this.judul,
          Deskripsi: this.deskripsi,
          "URL Gambar": this.urlGambar,
          Asal: this.asal,
          Kategori: this.kategori,
          createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp()
        });

        console.log("Resep berhasil ditambahkan!", docRef.id);

        // Menampilkan pesan sukses
        alert("Resep berhasil diunggah!");

        // Redirect ke halaman utama
        this.$router.push('/');

      } catch (error) {
        console.error("Error adding recipe: ", error);
        console.error("Error code: ", error.code);
        console.error("Error message: ", error.message);
        console.error("Error stack: ", error.stack);
        // Menampilkan pesan error
        alert("Terjadi kesalahan saat mengunggah resep.");
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
