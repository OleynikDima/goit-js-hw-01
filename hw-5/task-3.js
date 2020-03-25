'use script'

class Storage {

    constructor(item){
    this.items = [...item];
    };

    getItems(){
       return this;
    };

    addItem(item){
        this.items.push(item);
    };

    removeItem(item){
        for(let i = 0 ; i < this.items.length; i ++){
            if(this.items[i] === item){
                delete this.items[i];
            }
        }
    }
        
};



const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
