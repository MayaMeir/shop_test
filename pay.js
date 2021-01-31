let recordsString = localStorage.getItem('FinalRecords');
let finalPrice = JSON.parse(recordsString);

let records = localStorage.getItem('Records');
let recordsArr = JSON.parse(records);

let quantitiesString = localStorage.getItem('amounts');
let quantities = JSON.parse(quantitiesString);


function showInfo(){
    let summeryDiv = document.querySelector("#summery");
    let sumPrice = 0;
    let i = 0;
    for (const record of recordsArr){
        summeryDiv.innerHTML += `<div class="card mb-3" style="max-width: 450px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${record.img}" class="card-img" alt="${record.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${record.name}</h5>
              <p class="card-text">${record.name} - ${record.artist}</p>
              <p class="card-text">Amount: ${quantities[i]}</p>
              </p>
            </div>
          </div>
        </div>
      </div>`
      ++i;
    }

    for (const price of finalPrice){
        sumPrice+=price.price;
    }

    summeryDiv.innerHTML += `<div class="col-4" id="price">To Pay: ${sumPrice}$</div>`;

}

showInfo();