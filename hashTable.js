class HashTable {
    constructor (size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0 ;i< key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }
    set(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index]= [[key,value]]
        }else{
            const sameKeyItem = bucket.find (item =>item[0] ===key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    get(key){
        const index = this.hash(key);
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key);
        this.table[index]= undefined;
    }
    display(){
        for(let i = 0 ; i<this.table.length ;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const hashTable = new HashTable(50);
hashTable.set('name','shaheera');
hashTable.set('age',35);
hashTable.set ('mana','raya');
hashTable.display();
console.log(hashTable.get('name'));
hashTable.remove('age')
console.log('after removing');
hashTable.display();