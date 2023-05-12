function BtnCurrency(){
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("FromCurrency").value;
    let toCurrency = document.getElementById("ToCurrency").value;

    let exchange ={
        USD : 1, //tỉ giá usd
        VND : 23457.49, // tỉ giá usd sang vnd
        JPY : 134.56, // tỉ giá usd sang yên
    };
    let kq = amount * exchange[toCurrency] / exchange[fromCurrency];
    document.getElementById('Result').textContent = "Result: " + kq + " " + `${toCurrency}`;
}