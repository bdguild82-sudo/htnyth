const API = "https://script.google.com/macros/s/AKfycbzVmQp-ahB7kx-1nybjlTdSQXuSUBjUV0j07xyo_UaNGTpgEHYkZEodixrcDRagaa5Xaw/exec";
let brainrots = [];

fetch(API).then(r=>r.json()).then(d=>{
 brainrots=d;
 render();
});

function render(){
 list.innerHTML="";
 brainrots.forEach((b,i)=>{
  list.innerHTML+=`
   <div>
    <img src="${b.img}" width="100">
    ${b.name}
    <button onclick="del(${i})">X</button>
   </div>
  `;
 });
}

function add(){
 if(admin.value!=="Xama")return;
 brainrots.push({
  name:name.value,
  img:img.value,
  robux:robux.value,
  money:money.value
 });
 save();
}

function del(i){
 brainrots.splice(i,1);
 save();
}

function save(){
 fetch(API,{
  method:"POST",
  body:JSON.stringify({
   admin:admin.value,
   data:brainrots
  })
 }).then(render);
}

