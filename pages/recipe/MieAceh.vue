<template>
  <div class="recipe-container">
    <header>
      <h1>Mie Aceh</h1>
    </header>

    <main>
      <div class="recipe-content">
        <img src="/assets/mie aceh.jpg" alt="Mie Aceh" class="recipe-image">
        <section>
          <h2>Bahan-bahan</h2>
          <ul>
            <li>200 gram mie kuning</li>
            <li>150 gram daging sapi, iris tipis</li>
            <li>2 butir telur, kocok lepas</li>
            <li>100 gram kol, iris tipis</li>
            <li>100 gram tauge</li>
            <li>2 batang daun bawang, iris halus</li>
            <li>2 buah tomat, potong-potong</li>
            <li>4 siung bawang putih, cincang halus</li>
            <li>6 butir bawang merah, cincang halus</li>
            <li>2 buah cabai merah, iris tipis</li>
            <li>2 sdm kecap manis</li>
            <li>2 sdm saus tiram</li>
            <li>1 sdm kecap asin</li>
            <li>1 sdt garam</li>
            <li>1/2 sdt merica</li>
            <li>2 sdm minyak goreng</li>
          </ul>
        </section>

        <section>
          <h2>Cara Membuat</h2>
          <ol>
            <li>Rebus mie kuning hingga matang, tiriskan.</li>
            <li>Panaskan minyak goreng di wajan, tumis bawang putih, bawang merah, dan cabai merah hingga harum.</li>
            <li>Masukkan daging sapi, tumis hingga berubah warna.</li>
            <li>Tambahkan telur, aduk rata hingga telur matang.</li>
            <li>Masukkan kol, tauge, dan daun bawang. Tumis hingga sayuran layu.</li>
            <li>Masukkan mie kuning, aduk rata.</li>
            <li>Tambahkan kecap manis, saus tiram, kecap asin, garam, dan merica. Aduk rata.</li>
            <li>Masukkan tomat, aduk sebentar hingga tomat layu.</li>
            <li>Angkat dan sajikan Mie Aceh selagi hangat.</li>
          </ol>
        </section>
      </div>
    </main>
  </div>
</template>

<style>
.recipe-container {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #fff5e6; /* Light cream background color */
  padding: 20px;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth effect */
  border-radius: 10px;
}

header {
  background-color: #ff6600;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
}

header h1 {
  margin: 0;
  font-size: 2.5em;
}

.recipe-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
}

h2 {
  color: #cc5200;
  margin-bottom: 10px;
}

ul, ol {
  margin: 0 0 20px 20px;
  padding: 0;
}

ul li, ol li {
  margin-bottom: 10px;
  line-height: 1.5;
}

footer {
  background-color: #ff6600;
  padding: 10px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  border-radius: 0 0 10px 10px;
}
</style>
