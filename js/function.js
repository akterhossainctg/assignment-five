// const allBtn = document.getElementsByClassName("add-btn");
// let count = 0;


// for(const btn of allBtn) {
//     btn.addEventListener("click", function (event) {
//         count = count + 1; 
//         var countSeatName = document.getElementById("seat");
//         const seat = event.target.parentNode.childNodes[3].innerText;
//         console.log(seat)

//         const selectedContainer = document.getElementById('selected-container')
//         const div = document.createElement('div');
//         const p1 = document.createElement('p'); 
//         const p2 = document.createElement('p'); 
//         const p3 = document.createElement('p');
//         p1.innerText = seat;
//         p2.innerText = Economy ;
//         p3.innerText = 550 ;
//         div.appendChild(p1);
//         div.appendChild(p2);
//         div.appendChild(p3);
//         selectedContainer.appendChild(div);
        

//     });
// }

// function getConvertedValue(id){
//     const Price = document.getElementById(id).innerText;
//     const convertedPrice = parseInt(Price);
//     return convertedPrice;
// }

let totalPrice =0;
let totalSeatCount = 0;
let currentSeat = 40;



function handleClick(target){
    const displayCountSeat = document.getElementById('seat-count');
    totalSeatCount = totalSeatCount + 1;
    if( totalSeatCount < 5){
        displayCountSeat.innerText=totalSeatCount;
        const displayCurrentSeat = document.getElementById('current-seat');
        currentSeat = currentSeat - 1;
        displayCurrentSeat.innerText=currentSeat;

    }


    const countSeatName = document.getElementById('Selected-containar');
    const SeatName = target.innerText;
    const ol = document.createElement("ol");
    const economy = 'Economy'
    const seatPrice = 550;
    ol.innerHTML =`
    <div class="flex items-center justify-between">    
    <h1> ${SeatName} </h1>
    <h1> ${economy} </h1>
    <h1> ${ seatPrice } </h1>
    </div>
    `
    if(totalSeatCount <5 ){
        
    countSeatName.appendChild(ol);
    const price = parseFloat(ol.innerText.slice(10,14));
    totalPrice = totalPrice + price;
    console.log(typeof totalPrice)
    const countTotalPrice = document.getElementById('total-price')
    countTotalPrice.innerText=totalPrice
    }
    
}
