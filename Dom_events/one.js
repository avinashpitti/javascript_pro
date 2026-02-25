function displayDT(){
    let dt = new Date().toLocaleString();
    console.log(dt);
    document.getElementById("result").innerText = dt;
}