//Open-Close Principle
//Software entities should be open for extension, but closed for modification.

// Her geometrik şekil Sekil ismindeki interface'e bağlı olarak çalışacak. Böylece çıktıyı üreten fonksiyon sadece
// interface'e bağlı çalışacak ve program büyüyeceğinde kodları değiştirmemize gerek kalmayacak sadece yeni class ve method'lar ekleyeceğiz. 
interface Sekil {
    alanHesapla(): number;
  }
  
  class Dikdörtgen implements Sekil {
    public genislik: number;
    public yukseklik: number;
  
    constructor(genislik: number, yukseklik: number) {
      this.genislik = genislik;
      this.yukseklik = yukseklik;
    }
  
    public alanHesapla(): number {
      return this.genislik * this.yukseklik;
    }
  }
  
  class Daire implements Sekil {
    public yaricap: number;
  
    constructor(yaricap: number) {
      this.yaricap = yaricap;
    }
  
    public alanHesapla(): number {
      return Math.PI * (this.yaricap * this.yaricap);
    }
  }
  
  class alanHesaplayici {
    public alanHesapla(sekil: Sekil): number {
      return sekil.alanHesapla();
    }
  }