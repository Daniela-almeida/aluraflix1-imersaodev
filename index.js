// filmes
var listaFilmes = [
  "https://img.elo7.com.br/product/main/266036C/big-poster-filme-vingadores-ultimato-lo47-tamanho-90x60-cm-vingadores.jpg",
  "https://play-lh.googleusercontent.com/xJJH5Dk1zFbXpRtjPzvTEPx6abOHcaPPUjIraUG_U9dZ9H6lbVYkLEAefLICEKGs1PSn=w240-h480-rw",
  "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg",
];

// series
var listaSeries = [
  "https://pbs.twimg.com/media/FtXVbeFX0AYZH71.jpg:large",
  "https://i.pinimg.com/originals/02/6f/23/026f23daf825c32c6175d1df9e5bd008.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Grey%27s_Anatomy_temporada_12.jpg/250px-Grey%27s_Anatomy_temporada_12.jpg",
];

// listaSeries[1] =
//   "https://i.pinimg.com/originals/02/6f/23/026f23daf825c32c6175d1df9e5bd008.jpg";

// listaSeries[2] =
//   "https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Grey%27s_Anatomy_temporada_12.jpg/250px-Grey%27s_Anatomy_temporada_12.jpg";

// usar for para repetir até certo tempo
// for (var i = 0; listaFilmes.length; i++) - quando é mais de um
for (var i = 0; i < 3; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

for (var i = 0; i < 3; i++) {
  document.write("<img src=" + listaSeries[i] + ">");
}
