'use script'

class Storage {

    constructor(item){
    this.items = item;
    };

    getItems(){
       return this.items;
    };

    addItem(item){
        this.items.push(item);
    };

    removeItem(item){
            const a = this.items.indexOf(item);
            this.items.splice(a, 1);
    };
        
};



const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
