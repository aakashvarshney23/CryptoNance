export interface Wallet{
    id?:string;
    totalamount?:number;
    bitcoinamount?:number; //? - optional
    ethereumamount?:number;
    litecoinamount?:number;
    ripplecurrencyamount?:number;
    transaction?: string;//transaction id - can the map the type of transcation based on the kind of numbe
    //id%0 = buy
    //id%1 = sell
    //id%2 = trade (convert)
}