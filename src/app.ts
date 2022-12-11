const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
// =================
function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    console.log("first");
    return param1 + param2;
  } else {
    console.log("second");
    return param1.toString() + param2.toString();
  }
}

console.log(combine(5, "770"))

// ===============
function greeting (action: 'hello' | 'bye') {
  if (action === 'hello') {
    console.log('Hello user!');
  } else {
    console.log('Bye user!');
  }
}

greeting('hello')
greeting('bye')


function returnResult (num: number): number {
  return num;
}

console.log(returnResult(5))

class Person {

}
