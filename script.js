const brainrots = [
 { name:"Brainrot #1", img:"brainrots/b1.png", robux:"100 R$", money:"$5" },
 { name:"Brainrot #2", img:"brainrots/b2.png", robux:"250 R$", money:"$10" },
 { name:"Brainrot #3", img:"brainrots/b3.png", robux:"500 R$", money:"$20" }
];

const market = document.getElementById("market");

brainrots.forEach(b => {
 market.innerHTML += `
 <div class="card">
  <div class="brainrot">
   <img src="${b.img}">
  </div>
  <div class="name">${b.name}</div>
  <div class="desc">Rare brainrot item</div>
  <div class="prices">
   <button class="btn robux">${b.robux}</button>
   <button class="btn money">${b.money}</button>
  </div>
 </div>
 `;
});
