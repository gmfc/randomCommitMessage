var Foswig = require('./foswig.js');
var chain = new Foswig(10);

var rawData1 = require('./response1.json');
var rawData2 = require('./response2.json');
var rawData3 = require('./response3.json');
var rawData4 = require('./response4.json');
var rawData5 = require('./response5.json');

function main() {
  var c = 10;
  var ch = 45;
  var n = 15;
  // eu sei
  for (var i = 0; i < rawData1.items.length; i++) {
    chain.addWordToChain(rawData1.items[i].commit.message);
  }
  for (var i = 0; i < rawData2.items.length; i++) {
    chain.addWordToChain(rawData2.items[i].commit.message);
  }
  for (var i = 0; i < rawData3.items.length; i++) {
    chain.addWordToChain(rawData3.items[i].commit.message);
  }
  for (var i = 0; i < rawData4.items.length; i++) {
    chain.addWordToChain(rawData4.items[i].commit.message);
  }
  for (var i = 0; i < rawData5.items.length; i++) {
    chain.addWordToChain(rawData5.items[i].commit.message);
  }
  console.log(">>>>>GERANDO COMMITS RANDOMICOS");
  console.log("");
  for (var i = 0; i < n; i++) {
    console.log(chain.generateWord(c,ch,false));
  }
}

main();
