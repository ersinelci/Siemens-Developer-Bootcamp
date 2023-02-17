namespace srp {
    class Product {
        id: number;
        name:string;    
    }
    
    class ProductRepository {
        productList:Product[]=[]; 
        add(product:Product){
            this.productList.push(product);
        }
    
        remove(id:number){
            //productList.splice()
        }
    
        update(product: Product){}
    }
    
    class ProductPresenter{
        writeToConsole(productList: Product[]): void{
            productList.forEach(x => {console.log(x);})
        }
    }
    
    
}


