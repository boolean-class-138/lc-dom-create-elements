// DOM ELEMENTS
const listElm = document.getElementById("list");

// LOGIC
// let listInnerHtml = '';
// for(let i = 1; i <= 90; i++) {
//     listInnerHtml += `<li>${i}</li>`;
// }

for(let i = 1; i <= 90; i++) {
    const liElm = document.createElement('li');
    liElm.append(i)
    listElm.appendChild(liElm)
}

// STAMPA IN HTML
// listElm.innerHTML = listInnerHtml;

// listElm.innerHTML = `
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
// `;