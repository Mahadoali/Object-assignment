// Create a constructor function BankAccount with name and balance Inside, set this.name and this.balance.
// Add method deposit(amount)that Adds amount to balance.
   //  Add method withdraw(amount)that Checks if balance >=amount
 //If yes, subtract and log new balance
   //If no, log “Insufficient funds”.
//Create 3 users using new BankAccount.
//Call deposit() and withdraw() on each.
function BankAccount(name,balance){
    this.name = name
    this.balance = balance
    this.deposit = function(amount){
        this.balance +=amount
        console.log(`${this.name}'s new balance after deposit is ${this.balance}`)
    }
    this.withdraw   = function(amount){

        if(this.balance>=amount){
            this.balance-=amount;
            console.log(`${this.name}'s new balance after withdrawal is ${this.balance}`);

        }else{
            console.log("Insufficient funds.")
        }
    };
}

const user1 = new BankAccount("Alice", 500);
user1.deposit(100);
user1.withdraw(200);
user1.withdraw(500);


const user2 = new BankAccount("Bob",1000);
user2.deposit(200);
user2.withdraw(1500);


const user3 = new BankAccount("Fatumo", 50);
user3.withdraw(50)
user3.withdraw(100)



//Create an object taskList with tasks as an empty array.
 //Add method addTask(task)
//Push task into tasks
 //Add method completeTask(task) Remove task from tasks if it exists.
//Add method listTasks()
   //Loop through tasks and print each one.

const taskList = {
    tasks: [],
    addTask: function(task){
        this.tasks.push(task);
        console.log(`Task added : ${task}`);

    },
    completeTask: function(task){
        const index = this.tasks.indexOf(task);
        if (index!==-1){
       this.tasks.splice(index,1);
       console.log(`Task completed ${task}`);
    
        }else{
            console.log(`Task not found`)
        }
    },
    listTasks:function(){
        console.log("Remaining tasks")
        this.tasks.forEach(task=>console.log(`${task}`))
    }
};
taskList.addTask("Finish homework")
taskList.addTask("Clean the house")
taskList.addTask("Buy groceries")
taskList.completeTask("Clean the house")
taskList.listTasks();


//Create a constructor or object Student with name and scores .
// Add method getAverage()
// Return the average of all scores.

//Add method hasPassed()
   //Return true if average ≥ 50, else false.
//Create two students with scores and test both methods.



function Student (name,scores){
    this.name = name;
    this.scores = scores
    this.getAverage = function(){
        const total = this.scores.reduce((sum,score)=>sum+score,0);
        return total/this.scores.length
    };
    this.hasPassed = function(){
        return this.getAverage()>=50
    };
}
const student1 = new Student("Amina",[60,70,80])
const student2 = new Student("Khalid", [40,30,45]);

console.log(`${student1.name}'s average: ${student1.getAverage()} ${student1.hasPassed()}`)

console.log(`${student2.name}'s average: ${student2.getAverage()}, passed: ${student2.hasPassed()}`);



//Create ShoppingCart object with items as an empty array.
//Add method addItem(item)
// Push item (object with name and price) into array.
// Add method getTotal()
// //Sum all prices in the items array.
//Add 3 items and call getTotal() to get total price.
  
  

    
const ShoppingCart = {
    items: [],
  
    addItem: function(item) {
      this.items.push(item);
      console.log(`Added item: ${item.name} ${item.price}`);
    },
  
    getTotal: function() {
      const total = this.items.reduce((sum, item) => sum + item.price, 0);
      console.log(`Total cost: ${total}`);
    }
  };
  
  ShoppingCart.addItem({ name: "Laptop", price: 800 });
  ShoppingCart.addItem({ name: "Headphones", price: 50 });
  ShoppingCart.addItem({ name: "Watch", price: 20 });
  ShoppingCart.getTotal();
  

  //Create Movie(title, year, rating) constructor.
  //Add method isClassic()
    // Return true if year < 2000.
  //Add method recommend()
// Return Highly recommended! if rating > 8.
// Create at least 3 movie objects and test both methods.

function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
  
    this.isClassic = function() {
      return this.year < 2000;
    };
  
    this.recommend = function() {
      return this.rating > 8 ? "Highly recommended!" : "Recommended";
    };
  }

  const movie1 = new Movie("The Matrix", 1999, 9);
  const movie2 = new Movie("Inception", 2010, 8.8);
  const movie3 = new Movie("Oldboy", 2003, 9.2);
  
  console.log(`${movie1.title} is a classic: ${movie1.isClassic()}, ${movie1.recommend()}`);
  console.log(`${movie2.title} is a classic: ${movie2.isClassic()},${movie2.recommend()}`);
  console.log(`${movie3.title} is a classic: ${movie3.isClassic()},  ${movie3.recommend()}`);