<template>
    <div class="recipe-container">
      <header>
        <h1>Gudeg</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/gudeg.jpeg" alt="Gudeg" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>1 kg nangka muda, potong kecil-kecil</li>
              <li>500 ml santan kental</li>
              <li>5 butir telur, rebus</li>
              <li>300 gram gula merah, serut</li>
              <li>10 butir bawang merah, haluskan</li>
              <li>5 siung bawang putih, haluskan</li>
              <li>6 lembar daun salam</li>
              <li>4 cm lengkuas, memarkan</li>
              <li>1 liter air kelapa</li>
              <li>1 sdt garam</li>
              <li>2 sdm minyak goreng</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Panaskan minyak goreng di panci, tumis bawang merah dan bawang putih hingga harum.</li>
              <li>Masukkan daun salam dan lengkuas, aduk rata.</li>
              <li>Tambahkan nangka muda, aduk hingga tercampur rata.</li>
              <li>Masukkan gula merah, garam, dan air kelapa. Aduk rata.</li>
              <li>Masak dengan api kecil hingga nangka empuk dan air menyusut.</li>
              <li>Tambahkan santan kental dan telur rebus. Aduk perlahan.</li>
              <li>Masak hingga santan mengental dan meresap ke dalam nangka dan telur.</li>
              <li>Angkat dan sajikan Gudeg dengan nasi hangat.</li>
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
  