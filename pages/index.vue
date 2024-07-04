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
          <nuxt-link to="/recipe/MieAceh" class="recipe-card">
            <img src="/assets/mie aceh.jpg" alt="Mie Aceh">
            <h3>Mie Aceh</h3>
            <p>Mie Aceh adalah makanan yang berasal dari Aceh.</p>
          </nuxt-link>
          
          <nuxt-link to="/recipe/ketoprak" class="recipe-card">
            <img src="/assets/ketoprak.jpg" alt="Ketoprak">
            <h3>Ketoprak</h3>
            <p>Ketoprak adalah makanan dari Jawa Barat.</p>
          </nuxt-link>
          <nuxt-link to="/recipe/sup-ayam" class="recipe-card">
            <img src="/assets/sup ayam.jpg" alt="Sup Ayam">
            <h3>Sup Ayam</h3>
            <p>Sup Ayam adalah makanan dari Bali.</p>
          </nuxt-link>
        </div>
        <h2>Resep Populer</h2>
        <div class="section-content">
          <nuxt-link to="/recipe/bika-ambon" class="recipe-card">
            <img src="/assets/bika ambon.jpg" alt="Bika Ambon">
            <h3>Bika Ambon</h3>
            <p>Bika Ambon adalah makanan dari Medan.</p>
          </nuxt-link>
          <nuxt-link to="/recipe/gudeg" class="recipe-card">
            <img src="/assets/gudeg.jpeg" alt="Gudeg">
            <h3>Gudeg</h3>
            <p>Gudeg adalah makanan dari Yogyakarta.</p>
          </nuxt-link>
          <nuxt-link to="/recipe/kerak-telur" class="recipe-card">
            <img src="/assets/kerak telur.jpg" alt="Kerak Telur">
            <h3>Kerak Telur</h3>
            <p>Kerak Telur adalah makanan dari Betawi.</p>
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: []
    };
  },
  async mounted() {
    try {
      // Ambil data resep dari Firestore, urutkan berdasarkan createdAt descending
      const querySnapshot = await this.$fire.firestore.collection('recipes')
                                    .orderBy('createdAt', 'desc')
                                    .get();

      // Simpan data resep ke dalam array recipes
      querySnapshot.forEach(doc => {
        this.recipes.push({
          id: doc.id,
          ...doc.data()
        });
      });

    } catch (error) {
      console.error("Error fetching recipes: ", error);
      // Handle error, tampilkan pesan error, dll.
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
  text-decoration: none; /* Remove underline */
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
  text-decoration: none; /* Ensure no underline */
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
  text-decoration: none; /* Remove underline */
}

.recipe-card p {
  font-size: 1em;
  color: #777;
  margin: 0 10px 10px;
  text-decoration: none; /* Remove underline */
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
