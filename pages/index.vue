<template>
  <div class="container">
    <header>
      <h1>REECHEFF</h1>
      <nav>
        <nuxt-link to="/">Beranda</nuxt-link>
        <nuxt-link to="/search">Pencarian</nuxt-link>
        <nuxt-link to="/upload">Unggah Resep</nuxt-link>
        <nuxt-link to="/profile">Profil</nuxt-link>
      </nav>
    </header>
    <main>
      <section>
        <h2>Resep Terbaru</h2>
        <div class="section-content">
          <div v-for="recipe in recentRecipes" :key="recipe.id" class="recipe-card">
            <nuxt-link :to="'/recipe/' + recipe.id">
              <img :src="recipe['URL Gambar']" :alt="recipe.Judul">
              <h3>{{ recipe.Judul }}</h3>
              <p>{{ recipe.Deskripsi }}</p>
            </nuxt-link>
          </div>
        </div>
        <h2>Resep Populer</h2>
        <div class="section-content">
          <div v-for="recipe in popularRecipes" :key="recipe.id" class="recipe-card">
            <nuxt-link :to="'/recipe/' + recipe.id">
              <img :src="recipe['URL Gambar']" :alt="recipe.Judul">
              <h3>{{ recipe.Judul }}</h3>
              <p>{{ recipe.Deskripsi }}</p>
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { firestore } from '~/plugins/firebase'; // Pastikan file ini ada

export default {
  data() {
    return {
      recentRecipes: [],
      popularRecipes: []
    };
  },
  async mounted() {
    try {
      // Ambil data resep terbaru dari koleksi 'resep' di Firestore
      const recentSnapshot = await firestore.collection('resep')
                                           .orderBy('createdAt', 'desc')
                                           .limit(6)
                                           .get();

      this.recentRecipes = recentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Ambil data resep populer dari koleksi 'resep' di Firestore
      const popularSnapshot = await firestore.collection('resep')
                                             .orderBy('popularity', 'desc') // Pastikan Anda memiliki field 'popularity'
                                             .limit(6)
                                             .get();

      this.popularRecipes = popularSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

    } catch (error) {
      console.error("Error fetching recipes: ", error);
      alert("Terjadi kesalahan saat mengambil data resep.");
    }
  }
};
</script>

<style>
body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #fff;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  background-color: #ff6600;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0;
  font-size: 2.5em;
  text-shadow: 1px 1px 2px #333;
}

nav {
  margin-top: 10px;
}

nav a {
  color: #ffffff;
  background-color: #cc5200;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
}

nav a:hover {
  background-color: #b34700;
  transform: scale(1.05);
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-top: 20px;
}

h2 {
  font-size: 2em;
  color: #cc5200;
  text-align: center;
  margin-bottom: 20px;
}

.section-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.recipe-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 300px;
  text-decoration: none;
}

.recipe-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.recipe-card h3 {
  font-size: 1.5em;
  color: #333;
  margin: 10px 0;
}

.recipe-card p {
  font-size: 1em;
  color: #777;
  margin: 0 10px 10px;
}

.recipe-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

footer {
  background-color: #ff6600;
  padding: 10px;
  color: #ffffff;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
