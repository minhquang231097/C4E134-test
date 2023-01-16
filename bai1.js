let a = Number(prompt('Nhập số a'));
let b = Number(prompt('Nhập số b'));
let n = [];
let sum = 0;
const para = document.createElement('p');

while ((isNaN(a) == true) || (a < 0)) {
    a = Number(prompt('Hãy nhập lại số a!'));
}

while ((isNaN(b) == true) || (b < 0)) {
    b = Number(prompt('Hãy nhập lại số b!'));
}

if (a > b) {
    alert('Nhập a và b thoả mãn điều kiện a < b');
} else {
    for (let i = a; i <= b; i++) {
        for (let x = 2; x < i - 1; x++) {
            if (i % x == 0) {
                break;
            } else {
                n.push(i);
                break;
            }
        }
    }
}

for (let i = 0; i < n.length; i++) {
    sum += n[i];
}

console.log('Dãy các số nguyên tố: ' + n);
console.log('Tổng: ' + sum);
para.innerText = `Dãy các số nguyên tố: ${n} và Tổng: ${sum}`;
document.body.appendChild(para);