## Day 10: SOLID ve Typescript Üzerine Notlar

---

- Clean Code, yazar önerisi: Robert C. Martin (SOLID prensiplerinin yaratıcısı)
- SOLID prensiplerinin araştırılması ve öğrenilmesi !
- Syntax'ı pekiştirmek için Typescript playground example'ları yapılacak. <a href = https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA> Typescript Playground </a>

<br>

- ### Single Responsibility

"There should never be more than one reason for a class to change".

Her class'ın belirli sorumlulukları olmalı. Fazla class tanımlamaktan kaçınmamalıyız.

`Not: Domain-driven design'a çalış!!! Single Responsibility'i ihlal eder, ama avantajları vardır. Complexity artıkça DDD'e bakmak gerekir.`

- ### Open-closed Principle

"Software entities should be open for extension but closed for modification"

Var olan koda dokunmadan, ekleme yapmalıyız.

`Aynı method içinde bir kaç satır boşluk varsa, bir method birden fazla iş için çalışıyor olabilir. Refactoring için kötü kodu yakalamada ipucu olabilir.`

- ### Liskov Pubstitution Principle

An object(such as a class) and a sub-object (such as a class that extends the first class) must be interchangeable without breaking the program.

inherit edilen class'ların değişkenliğinin bozmaması gerekir. İnternetten daha fazla örneğe bakılmalı!

- ### Interface Sgregation

The Interface Segregation Principle (ISP) states that a client should not be exposed to methods it doesn't need.

`Sorumlulukların hepsini tek bir arayüze toplamak yerine daha özelleştirilmiş birden fazla arayüz oluşturmayı tercih etmemizi söyleyen prensiptir. Tek bir interface yerine kullanımlarına göre parçalanmış birden fazla interface ile işlemleri yürütmeliyiz.`

- ### Dependency Inversion Principler

> In object-oriented design, the dependency inversion principle is a specific methodology for loosely coupling software modules. When following this principle, the conventional dependency relationships established from high-level, policy-setting modules to low-level, dependency modules are reversed, thus rendering high-level modules independent of the low-level module implementation details. The principle states:

- High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
- Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
