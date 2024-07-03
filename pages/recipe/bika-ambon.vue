<template>
    <div class="recipe-container">
      <header>
        <h1>Bika Ambon</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/bika ambon.jpg" alt="Bika Ambon" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>200 gram tepung sagu</li>
              <li>100 gram tepung terigu</li>
              <li>250 gram gula pasir</li>
              <li>4 butir telur</li>
              <li>200 ml santan</li>
              <li>100 ml air kelapa</li>
              <li>1 sdt ragi instan</li>
              <li>1/2 sdt garam</li>
              <li>1/2 sdt vanili</li>
              <li>1/2 sdt pewarna makanan kuning</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Campurkan tepung sagu, tepung terigu, dan ragi instan. Aduk rata.</li>
              <li>Tambahkan air kelapa, aduk hingga tercampur rata. Diamkan selama 15 menit.</li>
              <li>Kocok telur dan gula hingga mengembang, tambahkan santan, aduk rata.</li>
              <li>Masukkan campuran tepung sedikit demi sedikit ke dalam adonan telur, aduk rata.</li>
              <li>Tambahkan garam, vanili, dan pewarna makanan kuning. Aduk rata.</li>
              <li>Diamkan adonan selama 30 menit hingga mengembang.</li>
              <li>Panaskan oven, tuang adonan ke dalam cetakan. Panggang selama 45 menit hingga matang.</li>
              <li>Angkat dan dinginkan Bika Ambon sebelum disajikan.</li>
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
  