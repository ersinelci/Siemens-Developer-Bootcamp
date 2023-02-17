## SOLID 

---

- Clean Code, yazar önerisi: Robert C. Martin (SOLID prensiplerinin yaratıcısı)
- SOLID prensiplerinin araştırılması ve öğrenilmesi

<br>

- Single Responsibility

"There should never be more than one reason for a class to change".

Her class'ın belirli sorumlulukları olmalı. Fazla class tanımlamaktan kaçınmamalıyız.

`Not: Domain-driven design'a çalış!!! Single Responsibility'i ihlal eder, ama avantajları vardır. Complexity artıkça DDD'e bakmak gerekir.`

- Open-closed Principle

"Software entities should be open for extension but closed for modification"

Var olan koda dokunmadan, ekleme yapmalıyız.

`Aynı method içinde bir kaç satır boşluk varsa, bir method birden fazla iş için çalışıyor olabilir. Refactoring için kötü kodu yakalamada ipucu olabilir.`

>
>
>