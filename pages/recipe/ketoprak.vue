<template>
    <div class="recipe-container">
      <header>
        <h1>Ketoprak</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/ketoprak.jpg" alt="Ketoprak" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>200 gram bihun</li>
              <li>150 gram tahu, potong dadu, goreng</li>
              <li>100 gram tauge, rebus</li>
              <li>2 butir telur, rebus, potong-potong</li>
              <li>100 gram ketupat, potong-potong</li>
              <li>2 siung bawang putih, cincang halus</li>
              <li>6 butir bawang merah, cincang halus</li>
              <li>3 buah cabai merah, iris tipis</li>
              <li>100 gram kacang tanah, goreng, haluskan</li>
              <li>2 sdm kecap manis</li>
              <li>1 sdt garam</li>
              <li>1/2 sdt gula merah, serut</li>
              <li>2 sdm minyak goreng</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Rebus bihun hingga matang, tiriskan.</li>
              <li>Panaskan minyak goreng di wajan, tumis bawang putih, bawang merah, dan cabai merah hingga harum.</li>
              <li>Masukkan kacang tanah halus, aduk rata.</li>
              <li>Tambahkan kecap manis, garam, dan gula merah. Aduk rata.</li>
              <li>Masukkan bihun, tahu, tauge, dan ketupat. Aduk rata hingga semua bahan tercampur.</li>
              <li>Angkat dan sajikan Ketoprak dengan telur rebus di atasnya.</li>
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
  