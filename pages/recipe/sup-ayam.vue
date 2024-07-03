<template>
    <div class="recipe-container">
      <header>
        <h1>Sup Ayam</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/sup ayam.jpg" alt="Sup Ayam" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>1 ekor ayam, potong-potong</li>
              <li>200 gram wortel, potong bulat</li>
              <li>200 gram kentang, potong dadu</li>
              <li>150 gram buncis, potong-potong</li>
              <li>100 gram kol, iris kasar</li>
              <li>4 siung bawang putih, cincang halus</li>
              <li>6 butir bawang merah, cincang halus</li>
              <li>1 batang daun bawang, iris halus</li>
              <li>1 batang seledri, iris halus</li>
              <li>1 sdt garam</li>
              <li>1/2 sdt merica</li>
              <li>2 sdm minyak goreng</li>
              <li>1 liter air</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Panaskan minyak goreng di panci, tumis bawang putih dan bawang merah hingga harum.</li>
              <li>Masukkan ayam, tumis hingga ayam berubah warna.</li>
              <li>Tambahkan air, masak hingga mendidih.</li>
              <li>Masukkan wortel, kentang, buncis, dan kol. Masak hingga sayuran matang.</li>
              <li>Tambahkan garam dan merica, aduk rata.</li>
              <li>Masukkan daun bawang dan seledri, masak sebentar hingga layu.</li>
              <li>Angkat dan sajikan Sup Ayam selagi hangat.</li>
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
  