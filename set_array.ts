let setArray = new Set();
setArray.add("ahmet");
setArray.add("mehmet");
setArray.add("hasan");
setArray.add("ahmet");

// İki kere tekrarlayan elementi göstermez.

for(let name of setArray){
    console.log(name);
}


