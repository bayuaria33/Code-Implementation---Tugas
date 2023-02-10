/*Buatlah sebuah function yang menerima 4 parameter dari cerita disoal.
PijarFood(harga, voucher, jarak, pajak) */

const daftarVoucher = [
    {
      voucherName: "PIJARFOOD5",
      minimalPesan: 50000,
      maksimalPotong: 50000,
      diskon: 0.5
    },
    {
      voucherName: "DITRAKTIRPIJAR",
      minimalPesan: 25000,
      maksimalPotong: 30000,
      diskon: 0.6
    },
  ];

function PijarFood(harga, voucher, jarak, pajak) {
  let tarif, terpajak;
  potongan = cekPromo(harga, voucher);
  if(!potongan)potongan = 0
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
  let promo = daftarVoucher.filter((item) => item.voucherName === voucher);
  if(promo.length>0){
      if (harga > promo[0].minimalPesan) {
        harga * promo[0].diskon > promo[0].maksimalPotong
          ? (potongan = promo[0].maksimalPotong)
          : (potongan = harga * promo[0].diskon);
      } else {
        potongan = false;
      }
  }else{
    potongan = false
  }
  return potongan;
}
 PijarFood(75000, "PIJARFOOD5", 5, true);
// PijarFood(90000, "DITRAKTIRPIJAR", 1, false);
// PijarFood(30000, "PIJARFOOD5", 3, true);