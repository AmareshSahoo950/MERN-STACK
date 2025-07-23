import { laundryServices as services } from "./services.js";

let i = 0,
  counter = 1,
  value = 0;

let table = [];

mainCaller(i);

function mainCaller(i) {
  bookNow(table);
  if (i >= services.length) {
    i = 0;
    displayItem(services[i]);
  } else displayItem(services[i]);

  const addItem = document.querySelector(".add-item");
  const skipItem = document.querySelector(".skip-item");

  //display-Item
  function displayItem(element) {
    document.querySelector(".display-section").innerHTML = `<img src="${
      element.image
    }" alt="">
            <div class="product-display">
             <p class="product-name">${element.service}</p>
             <p class="product-price"><i class="fa-solid fa-indian-rupee-sign fa-sm" style="color: #4840bf;"></i>${element.price.toFixed(
               2
             )}</p>
            </div>
             <div class="button">
              <button class="skip-item">Skip Item <i class="fa-solid fa-circle-minus fa-lg" style="color: #e60000;"></i></button>
              <button class="add-item">Add Item <i class="fa-solid fa-circle-plus fa-lg" style="color: #00e663;"></i> </button>
            </div>`;
  }

  //add-item
  addItem.addEventListener("click", () => {
    services.forEach((element) => {
      if (element.sno === services[i].sno) {
        document.querySelector(".empty-table-msg").style.display = "none";
        document.querySelector("table tbody").innerHTML += `<tr>
        <td>${counter++}</td>
        <td>${element.service}</td>
        <td><i class="fa-solid fa-indian-rupee-sign fa-sm small-icons"></i>${element.price.toFixed(
          2
        )}</td>
        </tr>`;
        value += element.price;
        insertToTable(element.sno);
        totalAmt(value);
      }
    });
    mainCaller(++i);
  });

  // skip-items
  skipItem.addEventListener("click", () => {
    mainCaller(++i);
    bookNow(table);
  });

  //Total amt
  function totalAmt(value) {
    document.querySelector(".total-amt").innerHTML = `
  <p class="amt-title">Total Amount</p>
  <p><i class="total-amt-symbol fa-solid fa-indian-rupee-sign">${value.toFixed(
    2
  )}</i></p>`;
  }

  //Insert to table
  function insertToTable(sno) {
    console.log(sno);
    services.forEach((element) => {
      if (element.sno === sno) {
        table.push(element);
        console.log(table);
        bookNow(table);
      }
    });
  }
  // --------------------------------------------------------
  function bookNow(table) {
    if (table == "") {
      noAlert();
      document.querySelector(".book-now").addEventListener("click", () => {
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".product-info").style.padding = "2vh 0";
      });
    } else {
      noAlert();
      document.querySelector(".book-now").style.backgroundColor =
        "rgb(48, 56, 149)";
      document.querySelector(".empty-table-msg").style.display = "none";
      afterAlert();
      document.querySelector(".product-info").style.padding = "0";

      document.querySelector(".book-now").addEventListener("click", () => {
        document.querySelector(".confirm").style.display = "block";
        afterAlert();
      });
    }

    console.log(value);
  }
}

function noAlert() {
  document.querySelector(".product-info").style.padding = "0";
  document.querySelector(".alert").style.display = "none";
  document.querySelector(".confirm").style.display = "none";
}

function afterAlert() {
  document.querySelector(".product-info").style.padding = "2vh 0";
  document.querySelector(".alert").style.display = "none";
}
