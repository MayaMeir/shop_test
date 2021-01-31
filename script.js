
class Record {
    constructor(id, name, year, img, artist, genre, price) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.img = img;
        this.artist = artist;
        this.genre = genre;
        this.price = price;

    }
}

const records = [
    new Record(1,'The Black Parade', 2006, 'https://images.genius.com/a41483a521b44b6528ca922fc561be19.1000x1000x1.jpg', 'My Chemical Romance', 'Rock', 20),
    new Record(2,'Closer To God', 1994, 'https://img.discogs.com/aw06qpMXDIDyEevcY-f7EMa1k9I=/fit-in/599x537/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1644296-1297948776.jpeg.jpg', 'Nine Inch Nails', 'Rock', 15),
    new Record(3,'Once', 2004, 'https://img.discogs.com/t5XUoZp9K-F5PuVEw1rm-nsz2nM=/fit-in/500x458/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-672037-1145985015.jpeg.jpg', 'Nightwish', 'Melodic Metal', 10),
    new Record(4,"The Freewheelin' Bob Dylan", 1963, 'https://images-na.ssl-images-amazon.com/images/I/81bANXfbb0L._SL1500_.jpg', 'Bob Dylan', 'Folk', 40),
    new Record(5,'Oops!... I Did It Again', 2000, 'https://img.discogs.com/ESVRsaFWAeDAW2-TpD0zQjVe1Kc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11732183-1521435435-3506.jpeg.jpg', 'Britney Spears', 'Pop', 7),
    new Record(6,'Miss Anthropocene', 2020, 'https://img.discogs.com/IMpOn5abPvQgm3_KnyAd9dwXJrk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14812425-1584788538-6163.jpeg.jpg', 'Grimes', 'Industrial', 50)

];

let chosenItems = [];
function updateCartBtn(id){
    let btn = document.querySelector("#cartBtn");
    for (const record of records){
        if (record.id == id){
            chosenItems.push(record);
        }
    }
    btn.innerHTML = `Shopping Cart ${chosenItems.length}`;
}

function showRecords(){
        let gallery = document.querySelector("#gallery");
        let i = 0;
        gallery.innerHTML = '';
        for (const record of records) {
            gallery.innerHTML += `<div class="col-4" style="display: flex; justify-content: space-around;"><div class="card" style="width:20rem;">
                <img src="${record.img}" class="card-img-top" alt="${record.name}">
                <div class="card-body">
                    <h5 class="card-title">${record.name}</h5>
                    <p class="card-text">${record.artist}</p>
                    <p class="card-text">${record.year}</p>
                    <p class="card-text">${record.genre}</p>
                    <p class="card-text">${record.price}$</p>
                    <button type="button" class="btn btn-outline-info" onclick="updateCartBtn(${record.id})">Add To Cart</button>
                    </div>
            </div>
        </div>
    `
        }
    }
    
    function showGenres(genre){
        let gallery = document.querySelector("#gallery");
        gallery.innerHTML = '';
        for (const record of records){
            if (record.genre == genre){
                gallery.innerHTML += `<div class="col-4" style="display: flex; justify-content: space-around;"><div class="card" style="width:20rem;">
                <img src="${record.img}" class="card-img-top" alt="${record.name}">
                <div class="card-body">
                    <h5 class="card-title">${record.name}</h5>
                    <p class="card-text">${record.artist}</p>
                    <p class="card-text">${record.year}</p>
                    <p class="card-text">${record.genre}</p>
                    <button type="button" class="btn btn-outline-info" onclick="updateCartBtn(${record.id})">Add To Cart</button>
                    </div>
            </div>
        </div>`
            }
        }
        
    }

    function addToLocal() {
        let recordsString = JSON.stringify(chosenItems); //now its string
        localStorage.setItem('Records', recordsString);
        location.href = "checkout.html";

    }
    
showRecords();
