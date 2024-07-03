<template>
  <div class="container">
    <h1>Pencarian Resep</h1>
    <form @submit.prevent="performSearch">
      <input type="text" v-model="query" placeholder="Cari resep..." />
      <button type="submit">Cari</button>
    </form>
    <div v-if="results.length > 0">
      <h2>Hasil Pencarian</h2>
      <ul>
        <li v-for="result in results" :key="result.id">
          <nuxt-link :to="'/recipe/' + result.id">{{ result.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Tidak ada hasil pencarian.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      results: []
    };
  },
  methods: {
    async performSearch() {
      try {
        const snapshot = await this.$fire.firestore
          .collection('recipes')
          .where('title', '>=', this.query)
          .where('title', '<=', this.query + '\uf8ff')
          .get();
        
        this.results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error searching for recipes: ', error);
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
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #ff6600;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
