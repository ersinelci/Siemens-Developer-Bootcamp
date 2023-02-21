// Single Responsibility Principle
// There should never be more than one reason for a class to change

class RecordBook {
    //Hayvanları özelliklerine göre kaydettiğimiz bir defter olsun
    public animalName: string;
    public animalType: string;
    public animalFamily: string;
  
  }
  
  class Save {
    public saveToRecord(recordBook: RecordBook): void {
      //method'lar ve diğer şeyler.
    }
  }

  // İki ayrı iş için iki ayrı class tanımladık. Böylece her class'ın tek bir responsibility'si oldu.
