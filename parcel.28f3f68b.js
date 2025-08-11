let app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=0&limit=10",main=async()=>{let t=await fetch("URL_DE_LA_API");await t.json()},output=products?.map(t=>`
    <article class="card">
      <img src="${t.images[0]}" alt="${t.title}">
      <h2>${t.title}</h2>
      <small>$${t.price}</small>
    </article>
  `).join(""),newItem=document.createElement("section");newItem.classList.add("items"),newItem.innerHTML=output,document.getElementById("app").appendChild(newItem),main();
//# sourceMappingURL=parcel.28f3f68b.js.map
