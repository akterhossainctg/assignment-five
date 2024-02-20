const allBtn = document.getElementsByClassName("add-btn");
let count = 0;


for(const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        console.log("boss select korsi");
        count = count + 1; 
        document.getElementById("seat").innerText=
        count;

    });
}