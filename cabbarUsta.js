let musyılı = 7;
let renk = "beyaz";
let model = 1990;
let marka = "HACI MURAT";

if (musyılı >= 5) {
  console.log(" araciniz itina ile tamir edilecek");
} else if (
  (renk == "kırmızı" || renk == "siyah") &&
  (marka == "audi" || marka == "bmw" || marka == "vw")
) {
  if (marka == "bmw") {
    if (
      (renk == "kırmızı" && model >= 2010 && model <= 2019) ||
      (renk == "siyah" && model >= 2020)
    ) {
      console.log(" araciniz itina ile tamir edilecek ");
    } else {
      console.log("aracinizi tamir ettirmek icin lutfen yan sokaktaki Sevket ustaya gidin");
    }
  } else if (marka == "audi") {
    if ((model >= 2005 && model <= 2010) || (model >= 2014 && model <= 2019)) {
      console.log(" araciniz itina ile tamir edilecek ");
    } else {
      console.log("aracinizi tamir ettirmek icin lutfen yan sokaktaki Sevket ustaya gidin");
    }
  } else {
    if (marka == "vw" && renk == "siyah" && model >= 2001 && model <= 2018) {
      console.log(" araciniz itina ile tamir edilecek ");
    } else {
      console.log("aracinizi tamir ettirmek icin lutfen yan sokaktaki Sevket ustaya gidin");
    }
  }
} else {
  console.log("aracinizi tamir ettirmek icin lutfen yan sokaktaki Sevket ustaya gidin");
}
