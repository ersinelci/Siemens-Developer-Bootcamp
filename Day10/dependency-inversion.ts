//High level module

class ProductService 
{
    _productRepository:ProductRepository;
    constructor(productRepository:IProductRepository) {
        this._productRepository = productRepository;
    }
    
    Add(data:string){
        this._productRepository.addToLog(data);
    }
    
}

interface IProductRepository
{
    addToLog(data:string)
}


// low level module

class ProductRepository {
    addToLog(data:string){
        console.log(data);
    }
    
}


let productService = new ProductService(new ProductRepository());
productService.Add("log1");