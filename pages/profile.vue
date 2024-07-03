<template>
  <div class="container">
    <h1>Profil Pengguna</h1>
    <h2>{{ user.displayName }}</h2>
    <p>{{ user.email }}</p>
    <button @click="signOut">Keluar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {} // Contoh objek pengguna, bisa berasal dari autentikasi Firebase
    };
  },
  methods: {
    async signOut() {
      try {
        await this.$fire.auth.signOut();
        // Redirect to login page or handle sign out flow
      } catch (error) {
        console.error("Error signing out: ", error);
        // Handle error, show error message, etc.
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

h2 {
  margin-bottom: 10px;
}

button {
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
