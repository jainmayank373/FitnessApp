import { Component,Input} from '@angular/core';
@Component({
    selector:'app-products',
    templateUrl:'./products.component.html'

})
export  class ProductsComponent  {
    productname:string;
   productArr:string[]=["mayank","jain"];
    add(){
        this.productArr.push(this.productname);
    }
    removeProduct(productName:string){

        this.productArr =  this.productArr.filter(p => p!== productName) ;
    }

    onAdd(form)
    {
            if(form.valid)
                {
                   this.productArr.push(form.value.productName);
                }
    }
}