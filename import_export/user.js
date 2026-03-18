let user_Name = "Rahul";

let greet = () => {
    console.log("Good Evening");
}

class User {
    constructor() {
        console.log("User class constructor method");
    }
}

export { greet, User };     // ✅ named export
export default user_Name;   // ✅ default export