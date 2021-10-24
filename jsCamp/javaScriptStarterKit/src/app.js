console.log("Merhaba Kodlama.io")

// JS type safe değildir.

let dolarDun = 9.20;
let dolarBugun = 9.30;
dolarDun="Ankara"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11 //sabit tanımlama

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Ozel Konut Kredileri"]

console.log(konutKredileri)

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++)
{

    console.log("<li>"+ konutKredileri[i] +"</li>")

}
console.log("</ul>")
/* 
<ul>
   <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
    <li>Özel Konut Kredisi</li>
</ul>
*/