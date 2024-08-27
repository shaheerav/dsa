/*
class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(elem){
        this.queue.push(elem);
    }
    dequeue(){
        if(this.isEmpty){
            "no values in side the queue"
        }
        this.queue.shift()
    }
    isEmpty(){
        return this.size ===0
    }
    front (){
        if(this.isEmpty){
            "no values in side the queue"
        }
        return this.queue[0]
    }
    size(){
        this.queue.length
    }
    display(){
        if(this.isEmpty){
            "no values in side the queue"
        }
        return console.log(this.queue.join(","))
    }
}
const quequ = new Queue();
quequ.enqueue(10);
quequ.enqueue(30);
quequ.display();
quequ.dequeue()
quequ.display();
quequ.enqueue(100);
quequ.enqueue(200)
quequ.enqueue(200);
quequ.display();
quequ.dequeue();
quequ.display();*/


//with object
class Queue{
    constructor(){
        this.item = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(elem){
        this.item[this.rear]= elem;
        this.rear ++
    };
    dequeue(){
        const value = this.item[this.front]
        delete this.item[this.front];
        this.front ++
        return value
    }
    isEmpty(){
        return this.rear - this.front ===0
    }
    peek(){
        if(this.isEmpty()){
            console.log('no element in the array')
        }
        return this.item[this.front];
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.item)
    }

}
const newQue = new Queue()
console.log(newQue.isEmpty())
newQue.enqueue(60)
newQue.enqueue(50)
newQue.enqueue(40)
newQue.enqueue(30)
newQue.print();
newQue.dequeue();
newQue.print();
console.log(newQue.dequeue());
console.log(newQue.size());
console.log(newQue.isEmpty());

