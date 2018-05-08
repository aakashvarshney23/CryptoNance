export interface Wallet{ //shows USD value of each owned amount
    id?:string;
    totalamount?:number; //actual money owned
    bitcoinamount?:number; //? - optional
    ethereumamount?:number;
    litecoinamount?:number;
    ripplecurrencyamount?:number;
    transaction?: string;//transaction id - can the map the type of transcation based on the kind of number
    // sellkey?:number;
    // sellamount?:number; //user can only sell one currency at a time
    //id%0 = buy
    //id%1 = sell
    //id%2 = trade (convert)
}