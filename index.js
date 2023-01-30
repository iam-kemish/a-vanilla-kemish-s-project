function onOptionChange() {
    let CalenderSelect = document.querySelector("#CalenderSelect").value;
    let yearSelect = document.querySelector("#yearSelect");
    yearSelect.innerHTML = "";   
if (CalenderSelect === "ad") {
    for(let i = 1990; i <= 2000; i++) {
        let yearOption = document.createElement("Option");
        yearOption.value = i;
        yearOption.text = i;
        yearSelect.appendChild(yearOption);
    }
} else if (CalenderSelect === "bs") {
   for(let i = 2047; i <= 2057; i++) {
    let yearOption = document.createElement("Option");
    yearOption.value = i;
    yearOption.text = i;
    yearSelect.appendChild(yearOption)
   }
}
}
let btn = document.querySelector("button")
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let firstName = document.querySelector("#inputEmail4").value;
    let lastName = document.querySelector("#inputAddress").value;
    let address = document.querySelector("#inputAddress2").value;
    let dateOfBirth = document.querySelector("#yearSelect").value;
    let calender = document.querySelector("#CalenderSelect").value;
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("address", address);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("calender", calender);
    alert("saved to local storage");
})