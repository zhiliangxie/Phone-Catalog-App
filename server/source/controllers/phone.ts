import { Request, Response, NextFunction } from 'express';

type Phones ={
    id: Number;
    title: String;
    description: String;
    price: Number;
    brand: String;
    color: Array<String>;
    thumbnail: String;
}

// get company list
const getCompanyList = async (req: Request, res: Response, next: NextFunction) => {
    
    let result:Phones[] = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "brand": "Apple",
            "color": ['White','Black','Gold'],
            "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "brand": "Apple",
            "color": ['Silver','Black','Gold','Green','Blue'],
            "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "color": ['Blue','Grey'],
            "brand": "Samsung",
            "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg"
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "color": ['Red'],
            "brand": "OPPO",
            "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "brand": "Huawei",
            "color": ['Blue','Black'],
            "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg"
        }
    ];

    return res.status(200).json({
        result: result
    });
};

export default { getCompanyList };