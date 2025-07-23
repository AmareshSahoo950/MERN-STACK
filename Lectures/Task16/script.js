const students = [
  { name: "John Doe", marks: "85%", class: 1, address: "123 Elm St" },
  { name: "Aarav Sharma", marks: "90%", class: 1, address: "456 Oak St" },
  { name: "Saanvi Patel", marks: "75%", class: 1, address: "789 Pine St" },
  { name: "Jake White", marks: "88%", class: 1, address: "101 Maple St" },
  { name: "Ananya Gupta", marks: "92%", class: 1, address: "102 Birch St" },
  { name: "Joe Black", marks: "70%", class: 1, address: "103 Cedar St" },
  { name: "Julie Blue", marks: "85%", class: 1, address: "104 Spruce St" },
  { name: "Jack Grey", marks: "80%", class: 1, address: "105 Willow St" },
  { name: "Judy Red", marks: "78%", class: 1, address: "106 Aspen St" },
  { name: "Jasper Violet", marks: "84%", class: 1, address: "107 Cherry St" },
  { name: "Rajesh Kumar", marks: "89%", class: 2, address: "108 Walnut St" },
  { name: "Bill Green", marks: "76%", class: 2, address: "109 Chestnut St" },
  { name: "Cara White", marks: "95%", class: 2, address: "110 Beech St" },
  { name: "Ritu Singh", marks: "91%", class: 2, address: "111 Cypress St" },
  { name: "Ella Blue", marks: "88%", class: 2, address: "112 Redwood St" },
  { name: "Frank Grey", marks: "79%", class: 2, address: "113 Palm St" },
  { name: "Grace Red", marks: "82%", class: 2, address: "114 Fir St" },
  { name: "Ayaan Verma", marks: "77%", class: 2, address: "115 Sycamore St" },
  { name: "Ivy Brown", marks: "90%", class: 2, address: "116 Magnolia St" },
  { name: "Neha Kapoor", marks: "85%", class: 2, address: "117 Sequoia St" },
  { name: "Kevin White", marks: "87%", class: 3, address: "118 Dogwood St" },
  { name: "Lily Black", marks: "80%", class: 3, address: "119 Poplar St" },
  { name: "Mia Blue", marks: "92%", class: 3, address: "120 Alder St" },
  { name: "Nate Grey", marks: "83%", class: 3, address: "121 Cottonwood St" },
  { name: "Olivia Red", marks: "86%", class: 3, address: "122 Holly St" },
  { name: "Paul Violet", marks: "85%", class: 3, address: "123 Hickory St" },
  { name: "Quinn Brown", marks: "79%", class: 3, address: "124 Juniper St" },
  { name: "Rita Green", marks: "82%", class: 3, address: "125 Palm St" },
  { name: "Sam White", marks: "77%", class: 3, address: "126 Birch St" },
  { name: "Tina Black", marks: "90%", class: 3, address: "127 Cedar St" },
  { name: "Uma Blue", marks: "85%", class: 4, address: "128 Spruce St" },
  { name: "Vera Grey", marks: "87%", class: 4, address: "129 Maple St" },
  { name: "Will Red", marks: "80%", class: 4, address: "130 Willow St" },
  { name: "Xena Violet", marks: "92%", class: 4, address: "131 Elm St" },
  { name: "Yara Brown", marks: "83%", class: 4, address: "132 Oak St" },
  { name: "Zane Green", marks: "86%", class: 4, address: "133 Pine St" },
  { name: "Amy White", marks: "85%", class: 4, address: "134 Cherry St" },
  { name: "Ben Black", marks: "79%", class: 4, address: "135 Beech St" },
  { name: "Cora Blue", marks: "82%", class: 4, address: "136 Fir St" },
  { name: "Dan Grey", marks: "77%", class: 4, address: "137 Aspen St" },
  { name: "Eve Red", marks: "90%", class: 5, address: "138 Redwood St" },
  { name: "Finn Violet", marks: "85%", class: 5, address: "139 Cypress St" },
  { name: "Gina Brown", marks: "87%", class: 5, address: "140 Sycamore St" },
  { name: "Hugo Green", marks: "80%", class: 5, address: "141 Magnolia St" },
  { name: "Iris White", marks: "92%", class: 5, address: "142 Sequoia St" },
  { name: "Jack Black", marks: "83%", class: 5, address: "143 Dogwood St" },
  { name: "Kara Blue", marks: "86%", class: 5, address: "144 Poplar St" },
  { name: "Leo Grey", marks: "85%", class: 5, address: "145 Alder St" },
  { name: "Mona Red", marks: "79%", class: 5, address: "146 Cottonwood St" },
  { name: "Nina Violet", marks: "82%", class: 5, address: "147 Holly St" },
  { name: "Oscar Brown", marks: "77%", class: 6, address: "148 Hickory St" },
  { name: "Pia Green", marks: "90%", class: 6, address: "149 Juniper St" },
  { name: "Quinn White", marks: "85%", class: 6, address: "150 Palm St" },
  { name: "Rose Black", marks: "87%", class: 6, address: "151 Birch St" },
  { name: "Steve Blue", marks: "80%", class: 6, address: "152 Cedar St" },
  { name: "Tara Grey", marks: "92%", class: 6, address: "153 Spruce St" },
  { name: "Uma Red", marks: "83%", class: 6, address: "154 Maple St" },
  { name: "Vince Violet", marks: "86%", class: 6, address: "155 Willow St" },
  { name: "Walt Brown", marks: "85%", class: 6, address: "156 Elm St" },
  { name: "Xena Green", marks: "79%", class: 6, address: "157 Oak St" },
  { name: "Yasmin White", marks: "82%", class: 7, address: "158 Pine St" },
  { name: "Zack Black", marks: "77%", class: 7, address: "159 Cherry St" },
  { name: "Ava Blue", marks: "90%", class: 7, address: "160 Beech St" },
  { name: "Brian Grey", marks: "85%", class: 7, address: "161 Fir St" },
  { name: "Cara Red", marks: "87%", class: 7, address: "162 Aspen St" },
  { name: "Dave Violet", marks: "80%", class: 7, address: "163 Redwood St" },
  { name: "Ella Brown", marks: "92%", class: 7, address: "164 Cypress St" },
  { name: "Finn Green", marks: "83%", class: 7, address: "165 Sycamore St" },
  { name: "Gina White", marks: "86%", class: 7, address: "166 Magnolia St" },
  { name: "Hank Black", marks: "85%", class: 7, address: "167 Sequoia St" },
  { name: "Ivy Blue", marks: "79%", class: 7, address: "168 Dogwood St" },
  { name: "Jack Grey", marks: "82%", class: 8, address: "169 Poplar St" },
  { name: "Kara Red", marks: "77%", class: 8, address: "170 Alder St" },
  { name: "Leo Violet", marks: "90%", class: 8, address: "171 Cottonwood St" },
  { name: "Mona Brown", marks: "85%", class: 8, address: "172 Holly St" },
  { name: "Nina Green", marks: "87%", class: 8, address: "173 Hickory St" },
  { name: "Oscar White", marks: "80%", class: 8, address: "174 Juniper St" },
  { name: "Pia Black", marks: "92%", class: 8, address: "175 Palm St" },
  { name: "Quinn Blue", marks: "83%", class: 8, address: "176 Birch St" },
  { name: "Rose Grey", marks: "86%", class: 8, address: "177 Cedar St" },
  { name: "Steve Red", marks: "85%", class: 8, address: "178 Spruce St" },
  { name: "Tara Violet", marks: "79%", class: 9, address: "179 Maple St" },
  { name: "Uma Brown", marks: "82%", class: 9, address: "180 Willow St" },
  { name: "Vince Green", marks: "77%", class: 9, address: "181 Elm St" },
  { name: "Walt White", marks: "90%", class: 9, address: "182 Oak St" },
  { name: "Xena Black", marks: "85%", class: 9, address: "183 Pine St" },
  { name: "Yasmin Blue", marks: "87%", class: 9, address: "184 Cherry St" },
  { name: "Zack Grey", marks: "80%", class: 9, address: "185 Beech St" },
  { name: "Ava Red", marks: "92%", class: 9, address: "186 Fir St" },
  { name: "Brian Violet", marks: "83%", class: 9, address: "187 Aspen St" },
  { name: "Cara Brown", marks: "86%", class: 9, address: "188 Redwood St" },
  { name: "Dave Green", marks: "85%", class: 10, address: "189 Cypress St" },
  { name: "Ella White", marks: "79%", class: 10, address: "190 Sycamore St" },
  { name: "Finn Black", marks: "82%", class: 10, address: "191 Magnolia St" },
  { name: "Gina Blue", marks: "77%", class: 10, address: "192 Sequoia St" },
  { name: "Hank Grey", marks: "90%", class: 10, address: "193 Dogwood St" },
  { name: "Ivy Red", marks: "85%", class: 10, address: "194 Poplar St" },
  { name: "Jack Violet", marks: "87%", class: 10, address: "195 Alder St" },
  { name: "Kara Brown", marks: "80%", class: 10, address: "196 Cottonwood St" },
  { name: "Leo Green", marks: "92%", class: 10, address: "197 Holly St" },
];

// displayind the student cards------------------------
const studentCards = document.querySelector(".student-cards");

students.forEach((student) => {
  studentCards.innerHTML += `<div class="card">
            <p class="details">Student Name: <span>${student.name}</span></p>
            <p class="details">Marks: <span>${student.marks}</span></p>
            <p class="details">Class: <span>${student.class}</span></p>
            <p class="details">Address: <span>${student.address}</span></p>
          </div>`;
});

// displaying cards based on the results ----------------------
document.querySelector(".search-btn").addEventListener("click", () => {
  document
    .querySelector(".student-section")
    .classList.add("student-section-js");
  let inputValue = document.querySelector(".input-bar").value;
  let resultArray = [];

  resultArray.push(
    students.filter((student) =>
      student.name.toLowerCase().startsWith(inputValue.toLowerCase())
    )
  );

  //message
  const resultMessage = document.querySelector(".result-section p");

  if (resultArray[0].length) {
    if (inputValue) {
      resultMessage.innerHTML = `Search Results for ${inputValue}...`;
    } else {
      resultMessage.style.display = "none";
      document
        .querySelector(".student-section")
        .classList.remove("student-section-js");
    }
  } else {
    resultMessage.innerHTML = `No Results found for ${inputValue}...`;
  }

  console.log(resultArray[0]);

  studentCards.innerHTML = "";
  //Assigning the data to the cards.
  resultArray[0].forEach((result) => {
    studentCards.innerHTML += `<div class="card">
              <p class="details">Student Name: <span>${result.name}</span></p>
              <p class="details">Marks: <span>${result.marks}</span></p>
              <p class="details">Class: <span>${result.class}</span></p>
              <p class="details">Address: <span>${result.address}</span></p>
            </div>`;
  });

  resultArray.shift();
});
