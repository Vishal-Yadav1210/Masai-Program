//function to fetch user data(simulating an api call)
function FetchUserdata(url){
    return new Promise(function(resolve){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve([
                    {id:1,name:"Rahul",email:"rahul@gmail.com",age:25},
                    {id:2,name:"Rohit",email:"rohit@gmail.com",age:26},
                    {id:3,name:"Rishab",email:"rishab@gmail.com",age:27},
                ]);
            },1000)
        })
    },

    //function to process user based on minimum age
    function processUser(users,minAge){
        return users.filter(user=>user.age>=minAge)
        .map(user=>({name:user.name,email:user.email}));
    },
    //Closure function for user management
    function createUserManager(){
        let users=[];
        return {
            adduser(user){
                users=[...users,user];
            },
            getusers(){
                return user.map(({name})=>({name}));
            },
            finduserbyname(name){
                return users.find(user=>user.name===name)??"User not found";
            }
        };
    },

    //Execution
    console.log("Fetching user data..."),
    FetchUserdata("https://jsonplaceholder.typicode.com/users").
    then(users=>{
        const processUser=processUser(users,25);
        console.log("Processed users:",processUser);
        const usermanager=createUserManager();
        usermanager.forEach(user=>usermanager.adduser(user));
        console.log("User list (emails hidden):",usermanager.getusers());
        console.log("Find user Alice:",usermanager.finduserbyname("Alice"));
        console.log("Find user Bob:",usermanager.finduserbyname("Bob"));

    });