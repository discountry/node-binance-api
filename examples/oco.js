const Binance = require('../node-binance-api.js');

const binance = new Binance().options({
  'APIKEY':'xxxxxx',
  'APISECRET':'xxxxx',
});

// binance.sell("BNBUSDT", 1.0, 50.0);

var side = 'SELL', symbol = 'BTCUSDT', quantity = 0.001, price = 13000, stopPrice = 8000, stopLimitPrice = 7950;
binance.ocOrder(side, symbol, quantity, price, stopPrice, undefined, {}, (err, res) => {
    console.log(err)
    //console.log(res)
});

// binance.allOrderList((value) => console.log(value))