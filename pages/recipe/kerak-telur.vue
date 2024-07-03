<template>
    <div class="recipe-container">
      <header>
        <h1>Kerak Telur</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/kerak telur.jpg" alt="Kerak Telur" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>100 gram beras ketan putih, rendam 2 jam</li>
              <li>4 butir telur bebek</li>
              <li>50 gram kelapa parut kasar, sangrai</li>
              <li>2 sdm bawang merah goreng</li>
              <li>2 sdm ebi, rendam, haluskan</li>
              <li>1 sdt garam</li>
              <li>1/2 sdt merica bubuk</li>
              <li>1 sdm minyak goreng</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Panaskan wajan kecil, tuang 2 sdm beras ketan, ratakan.</li>
              <li>Masak beras ketan dengan api kecil hingga setengah matang.</li>
              <li>Tuang 1 butir telur bebek, ratakan.</li>
              <li>Taburi dengan kelapa parut, bawang merah goreng, ebi, garam, dan merica.</li>
              <li>Masak hingga matang dan bagian bawahnya kecokelatan.</li>
              <li>Angkat dan sajikan Kerak Telur selagi hangat.</li>
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
  
  recipe-image {
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
  