class CricularQueue{
    constructor(capacity){
        this.item = new Array(capacity);
        this.capacity = capacity
        this.currentLength = 0;
        this.rear = -1;
        this.front =-1;
    }
    isFull (){
        return this.currentLength === this.capacity;
    }
    isEmpty(){
        return this.currentLength ===0;
    }
    enqueue(element){
         if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity;
            this.item[this.rear]=element
            this.currentLength +=1;
            if(this.front ===-1){
                this.front = this.rear;
            }
         }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const remove = this.item[this.front];
        this.item[this.front]= null;
        this.front =(this.front +1) % this.capacity;
        this.currentLength -=1;
        if(this.isEmpty()){
            this.rear =-1;
            this.front =-1;
        }
        return remove;
    }
    peek (){
        return this.item[this.front];
    }
    size(){
        return this.currentLength
    }
    print(){
        if(this.isEmpty()){
            return null
        }
        let i ;
        let str ='';
        for(i = this.front;i!== this.rear;i=i+1 % this.capacity){
            str += this.item[i] +" "
        }
        str += this.item [i];
        console.log(str)
    }
}
const circus = new CricularQueue(5);
circus.enqueue(10)
circus.enqueue(20)
circus.enqueue(30)
circus.enqueue(40)
circus.print();
console.log(circus.isEmpty());
console.log(circus.size());
