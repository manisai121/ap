import { Injectable } from "@angular/core";
import { IProduct } from "./product";


@Injectable({
    providedIn:'root'
})
export class ProductService{

    getProducts(): IProduct[]{
        return [
            {
                
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2021",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "assets/images/garden_cart.png"
                  },
                  {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2021",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "assets/images/hammer.png"
                  },
                  {
                    "productId": 8,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2021",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "assets/images/saw.png"
                  }
                
            
        ]
    }
    }
