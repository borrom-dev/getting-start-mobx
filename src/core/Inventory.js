import { observable, when, action } from "mobx";

export default class Inventory {
    items = observable.array();
    cancelTracker = null;

    trackAvailablity(name) {
        this.cancelTracker = when(
            () => {
                const item = this.items.find(x => x.name === name);
                return item ? item.quantity > 0 : false;
            },
            () => {
                console.log(`${name} is now available`);
            }
        )
    }

    addItem = action((name, quantity) => {
        const item = this.items.find(x => x.name === name);
        if(item){
            item.quantity += quantity;
        }else{
            this.items.push({name,  quantity});
        }
    })
}


