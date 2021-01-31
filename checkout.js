let recordsString = localStorage.getItem('Records');

let recordsArr = JSON.parse(recordsString);


function showChosenRecords(){
    let div = document.querySelector("#chosenRecords");
    let id = 1;

    for (const record of recordsArr){
        div.innerHTML +=`<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${record.img}" class="card-img" alt="${record.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${record.name}</h5>
              <p class="card-text">${record.name} - ${record.artist}</p>
              <h5 class="card-title">${record.price}$</h5>
              <p class="card-text">Quantity: <input type="text" class="form-control" id="quantity${id}">
              </p>
            </div>
          </div>
        </div>
      </div>`
      id++;
    }
}

let amounts = [];
function pay(){
    let finalArr=[];
    let id = 1;
    for (const record of recordsArr){
        let i = 0;
        let amount = document.querySelector(`#quantity${id}`);
        amounts.push(amount.value);
        while (i < amount.value){
            finalArr.push(record);
            ++i;
        }
        id++;
    }
    let finalrecords = JSON.stringify(finalArr); //now its string
        localStorage.setItem('FinalRecords', finalrecords);
        let quantities = JSON.stringify(amounts); //now its string
        localStorage.setItem('amounts', quantities);
        location.href = "pay.html";
}
showChosenRecords();