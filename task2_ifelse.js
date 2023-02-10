/*Buatlah sebuah function yang menerima 4 parameter dari cerita disoal.
PijarFood(harga, voucher, jarak, pajak) */

function PijarFood(harga, voucher, jarak, pajak) {
  let tarif, terpajak;
  potongan = cekPromo(harga, voucher);
  jarak > 2 ? (tarif = (jarak - 2) * 3000 + 5000) : (tarif = 5000);
  pajak ? (terpajak = harga * 0.05) : (terpajak = 0);
  console.log(` 
  Harga : ${harga}
  Potongan : ${potongan}
  Biaya Antar : ${tarif}
  Pajak : ${terpajak}
  Subtotal : ${harga - potongan + tarif + terpajak} 
  `);
}

function cekPromo(harga, voucher) {
  let potongan;
  if (voucher == "PIJARFOOD5") {
    if (harga > 50000) {
      harga * 0.5 > 50000 ? (potongan = 50000) : (potongan = harga * 0.5);
    } else {
      potongan = false;
    }
  } else if (voucher == "DITRAKTIRPIJAR") {
    if (harga > 25000) {
      harga * 0.6 > 30000 ? (potongan = 30000) : (potongan = harga * 0.6);
    } else {
      potongan = false;
    }
  } else {
    potongan = false;
  }

  return potongan;
}
PijarFood(75000, "PIJARFOOD5", 5, true) ;
//PijarFood(90000, "DITRAKTIRPIJAR", 1, false);
