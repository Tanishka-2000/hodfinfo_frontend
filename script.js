const root = document.querySelector('#root')
const themeSwitch = document.querySelector('.switch');
const tableBody = document.querySelector('table tbody');
const rowTemplate = document.querySelector('#table-row-template')

themeSwitch.addEventListener('click', () => {

    themeSwitch.classList.toggle('on');
    let currentTheme = root.className;
    if(currentTheme === 'dark') root.className = 'light';
    else root.className = 'dark';

});

fetch('https://hodlinfo-api.onrender.com')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach((element, i) => {
        addRow(element, i)
    })
});

function addRow(data, i) {
    const clone = rowTemplate.content.cloneNode(true);
    const td = clone.querySelectorAll('td');
    td[0].innerText = i + 1;
    td[2].innerText = data.name;
    td[3].innerText = "₹ " + data.last;
    td[4].innerText = "₹ " + data.buy + " / ₹" + data.sell;
    td[5].innerText = "₹ " + data.volume;
    // td[6].innerText = data.base_unit;
    tableBody.appendChild(clone);
}