import {v1} from "uuid";

type initialStateType =  {
    id: string,
    brand: string,
    model: string,
    screenSize: string,
    batteryLife: string,
    price: number,
    os: string
}
export type ExtendedPhonesType = {
    id: string,
    brand: string,
    model: string,
    screenSize: string,
    batteryLife: string,
    price: number,
    os: string,
    availability: boolean,
    discount: number,
}

const initialState: initialStateType[] = [
    {id:v1(),brand: "Apple", model: "iPhone 12", screenSize: "6.1 inches", batteryLife: "17 hours", price: 799, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy S21", screenSize: "6.2 inches", batteryLife: "15 hours", price: 699, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "9", screenSize: "6.55 inches", batteryLife: "11 hours", price: 729, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 5", screenSize: "6.0 inches", batteryLife: "12 hours", price: 699, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Mi 11", screenSize: "6.81 inches", batteryLife: "20 hours", price: 749, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 1 II", screenSize: "6.5 inches", batteryLife: "18 hours", price: 899, os: "Android" },
    {id:v1(),brand: "HTC", model: "U12+", screenSize: "6.0 inches", batteryLife: "12 hours", price: 799, os: "Android" },
    {id:v1(),brand: "LG", model: "V60 ThinQ 5G", screenSize: "6.8 inches", batteryLife: "20 hours", price: 899, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Edge+", screenSize: "6.7 inches", batteryLife: "14 hours", price: 999, os: "Android" },
    {id:v1(),brand: "Nokia", model: "9 PureView", screenSize: "5.99 inches", batteryLife: "13 hours", price: 699, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone 13 Pro Max", screenSize: "6.7 inches", batteryLife: "28 hours", price: 1099, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy Note 20 Ultra", screenSize: "6.9 inches", batteryLife: "12 hours", price: 1299, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "Nord 2", screenSize: "6.43 inches", batteryLife: "12 hours", price: 399, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 6", screenSize: "6.4 inches", batteryLife: "24 hours", price: 699, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Redmi Note 10 Pro", screenSize: "6.67 inches", batteryLife: "16 hours", price: 299, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 5 II", screenSize: "6.1 inches", batteryLife: "18 hours", price: 949, os: "Android" },
    {id:v1(),brand: "HTC", model: "Desire 20 Pro", screenSize: "6.5 inches", batteryLife: "14 hours", price: 299, os: "Android" },
    {id:v1(),brand: "LG", model: "Wing 5G", screenSize: "6.8 inches", batteryLife: "12 hours", price: 999, os: "Android" },
    {id:v1(),brand: "Motorola", model: "G Power (2021)", screenSize: "6.6 inches", batteryLife: "48 hours", price: 249, os: "Android" },
    {id:v1(),brand: "Nokia", model: "3.4", screenSize: "6.39 inches", batteryLife: "2 days", price: 179, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone SE (2020)", screenSize: "4.7 inches", batteryLife: "13 hours", price: 399, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy A52", screenSize: "6.5 inches", batteryLife: "17 hours", price: 399, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "8T", screenSize: "6.55 inches", batteryLife: "12 hours", price: 749, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 4a 5G", screenSize: "6.2 inches",batteryLife: "24 hours", price: 499, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Poco X3 Pro", screenSize: "6.67 inches", batteryLife: "2 days", price: 249, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 10 III", screenSize: "6.0 inches", batteryLife: "25 hours", price: 549, os: "Android" },
    {id:v1(),brand: "HTC", model: "Wildfire E3", screenSize: "6.52 inches", batteryLife: "2 days", price: 179, os: "Android" },
    {id:v1(),brand: "LG", model: "K92 5G", screenSize: "6.7 inches", batteryLife: "2 days", price: 359, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto G Stylus (2021)", screenSize: "6.4 inches", batteryLife: "2 days", price: 299, os: "Android" },
    {id:v1(),brand: "Nokia", model: "5.4", screenSize: "6.39 inches", batteryLife: "2 days", price: 179, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone 11", screenSize: "6.1 inches", batteryLife: "17 hours", price: 599, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy A71", screenSize: "6.7 inches", batteryLife: "24 hours", price: 599, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "Nord CE 5G", screenSize: "6.43 inches", batteryLife: "13 hours", price: 329, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 4a", screenSize: "5.81 inches", batteryLife: "24 hours", price: 349, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Redmi Note 9T", screenSize: "6.53 inches", batteryLife: "2 days", price: 199, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 5", screenSize: "6.1 inches", batteryLife: "24 hours", price: 949, os: "Android" },
    {id:v1(),brand: "HTC", model: "U20 5G", screenSize: "6.8 inches", batteryLife: "20 hours", price: 699, os: "Android" },
    {id:v1(),brand: "LG", model: "Stylo 6", screenSize: "6.8 inches", batteryLife: "16 hours", price: 299, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto G Power (2020)", screenSize: "6.4 inches", batteryLife: "3 days", price: 249, os: "Android" },
    {id:v1(),brand: "Nokia", model: "2.4", screenSize: "6.5 inches", batteryLife: "2 days", price: 139, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone XR", screenSize: "6.1 inches", batteryLife: "16 hours", price: 499, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy S20 FE", screenSize: "6.5 inches", batteryLife: "24 hours", price: 699, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "Nord N10 5G", screenSize: "6.49 inches", batteryLife: "2 days", price: 299, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 3a", screenSize: "5.6 inches", batteryLife: "30 hours", price: 349, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Redmi Note 8 Pro", screenSize: "6.53 inches", batteryLife: "2 days", price: 249, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 1", screenSize: "6.5 inches", batteryLife: "22 hours", price: 949, os: "Android" },
    {id:v1(),brand: "HTC", model: "Desire 19+", screenSize: "6.2 inches", batteryLife: "13 hours", price: 299, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto G Fast", screenSize: "6.4 inches", batteryLife: "2 days", price: 199, os: "Android" },
    {id:v1(),brand: "Nokia", model: "1.4", screenSize: "6.51 inches", batteryLife: "2 days", price: 129, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone SE (2022)", screenSize: "4.7 inches", batteryLife: "14 hours", price: 449, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy A32 5G", screenSize: "6.5 inches", batteryLife: "2 days", price: 279, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "9R", screenSize: "6.55 inches", batteryLife: "14 hours", price: 549, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 5a 5G", screenSize: "6.34 inches", batteryLife: "48 hours", price: 449, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Redmi 9T", screenSize: "6.53 inches", batteryLife: "2 days", price: 199, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia L4", screenSize: "6.2 inches", batteryLife: "26 hours", price: 289, os: "Android" },
    {id:v1(),brand: "HTC", model: "Desire 21 Pro 5G", screenSize: "6.7 inches", batteryLife: "2 days", price: 599, os: "Android" },
    {id:v1(),brand: "LG", model: "K92 5G", screenSize: "6.7 inches", batteryLife: "2 days", price: 359, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto G10 Power", screenSize: "6.5 inches", batteryLife: "2 days", price: 199, os: "Android" },
    {id:v1(),brand: "Nokia", model: "C20 Plus", screenSize: "6.5 inches", batteryLife: "2 days", price: 119, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone 12 Pro", screenSize: "6.1 inches", batteryLife: "17 hours", price: 999, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy S20", screenSize: "6.2 inches", batteryLife: "11 hours", price: 999, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "7T", screenSize: "6.55 inches", batteryLife: "11 hours", price: 599, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 4 XL", screenSize: "6.3 inches", batteryLife: "16 hours", price: 899, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Mi 10T Pro", screenSize: "6.67 inches", batteryLife: "18 hours", price: 599, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia 10 Plus", screenSize: "6.5 inches", batteryLife: "21 hours", price: 429, os: "Android" },
    {id:v1(),brand: "HTC", model: "U11 Life", screenSize: "5.2 inches", batteryLife: "16 hours", price: 349, os: "Android" },
    {id:v1(),brand: "LG", model: "V40 ThinQ", screenSize: "6.4 inches", batteryLife: "12 hours", price: 899, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto Z4", screenSize: "6.4 inches", batteryLife: "15 hours", price: 499, os: "Android" },
    {id:v1(),brand: "Nokia", model: "6.2", screenSize: "6.3 inches", batteryLife: "2 days", price: 249, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone XS", screenSize: "5.8 inches", batteryLife: "14 hours", price: 899, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy S10", screenSize: "6.1 inches",batteryLife: "12 hours", price: 749, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "6T", screenSize: "6.41 inches", batteryLife: "11 hours", price: 529, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 3a", screenSize: "5.6 inches", batteryLife: "12 hours", price: 399, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Poco F3", screenSize: "6.67 inches", batteryLife: "2 days", price: 399, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia XZ2 Compact", screenSize: "5.0 inches", batteryLife: "19 hours", price: 499, os: "Android" },
    {id:v1(),brand: "HTC", model: "U12 Plus", screenSize: "6.0 inches", batteryLife: "12 hours", price: 799, os: "Android" },
    {id:v1(),brand: "LG", model: "G7 ThinQ", screenSize: "6.1 inches", batteryLife: "12 hours", price: 749, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto G7 Power", screenSize: "6.2 inches", batteryLife: "2 days", price: 249, os: "Android" },
    {id:v1(),brand: "Nokia", model: "7.2", screenSize: "6.3 inches", batteryLife: "2 days", price: 349, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone XR", screenSize: "6.1 inches", batteryLife: "16 hours", price: 749, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy Note 9", screenSize: "6.4 inches", batteryLife: "24 hours", price: 999, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "5T", screenSize: "6.01 inches", batteryLife: "11 hours", price: 499, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel 2 XL", screenSize: "6.0 inches", batteryLife: "12 hours", price: 849, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Mi A2", screenSize: "5.99 inches", batteryLife: "20 hours", price: 299, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia XA2 Plus", screenSize: "6.0 inches", batteryLife: "23 hours", price: 449, os: "Android" },
    {id:v1(),brand: "HTC", model: "U Ultra", screenSize: "5.7 inches", batteryLife: "13 hours", price: 749, os: "Android" },
    {id:v1(),brand: "LG", model: "V30", screenSize: "6.0 inches", batteryLife: "16 hours", price: 799, os: "Android" },
    {id:v1(),brand: "Motorola", model: "Moto Z2 Force", screenSize: "5.5 inches", batteryLife: "12 hours", price: 799, os: "Android" },
    {id:v1(),brand: "Nokia", model: "8", screenSize: "5.3 inches", batteryLife: "13 hours", price: 399, os: "Android" },
    {id:v1(),brand: "Apple", model: "iPhone 8", screenSize: "4.7 inches", batteryLife: "12 hours", price: 449, os: "iOS" },
    {id:v1(),brand: "Samsung", model: "Galaxy S8", screenSize: "5.8 inches", batteryLife: "11 hours", price: 499, os: "Android" },
    {id:v1(),brand: "OnePlus", model: "3T", screenSize: "5.5 inches", batteryLife: "13 hours", price: 439, os: "Android" },
    {id:v1(),brand: "Google", model: "Pixel XL", screenSize: "5.5 inches", batteryLife: "14 hours", price: 769, os: "Android" },
    {id:v1(),brand: "Xiaomi", model: "Mi Mix 2", screenSize: "5.99 inches", batteryLife: "15 hours", price: 399, os: "Android" },
    {id:v1(),brand: "Sony", model: "Xperia XZ1", screenSize: "5.2 inches", batteryLife: "19 hours", price: 449, os: "Android" },
]

////----------------------------------------------------------------------------------------------------------------------
const extendedPhones: ExtendedPhonesType[] = initialState.map(el=>{
   return  {...el,
       availability : Math.random() >= 0.5
       ,discount : Math.floor(Math.random()*20) + 5
   }
})
    ///Расширение стейта новыми ключами Наличия и скидки
///---------------------------------------------------------------------------------------------------------------------

export const PhoneReducer = (state: ExtendedPhonesType[] = extendedPhones, action: any) => {
    switch (action.type) {
        case 'sfdgsd' :{
            return state
        }
        default: return state
    }
};