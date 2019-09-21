import React from 'react';
import { observable, autorun, action, configure} from 'mobx';
import  Inventory  from './core/Inventory';
configure({
  enforceActions: 'always',
})

let cart = observable({
  items: [],
  itemCount: 0,
  modified: new Date(),

  get description(){
    switch(this.items.length){
      case 0:
        return 'There are no items in the cart';
      case 1:
        return 'There is one item in the cart';
      default:
        return `There are ${this.items.length} items int the cart`;   
    }
  }
});

autorun(() => {
  console.log(`Th Cart contain ${cart.items.length} item(s).`);
});

const incrementCount = action(() => {
  cart.itemCount++;
});

const addItem = action((name, quanity) => {
   const item = cart.items.find(x => x.name === name);
   if(item){
     item.quanity +=1;
   }else{
     cart.items.push({name, quanity});
   }
   cart.modified = new Date();
});

const removeItem = action( name => {
  const item = cart.items.find(x => x.name === name);
  if(item){
    item.quanity -=1;
    if(item.quanity <= 0){
      cart.items.remove(item);
    }
    cart.modified = new Date();
  }
});

incrementCount();


addItem('balloons', 2);
addItem('paint', 1);
removeItem('paint');

const inventory = new Inventory();
inventory.addItem('Shoes', 0);
inventory.trackAvailablity('Shoes');
inventory.addItem('Shoes', 2);
function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
