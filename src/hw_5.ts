// 1.Є функція, яка повертає Promise,
// він повертає масив рядків і чисел, опишіть правильно тип.
// type retFromProm: Array<string | number> =[];

function getPromise (): Promise<Array<number | string>> {
  return new Promise ((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

// 2.Є функція, вона приймає два аргументи, в один потрапляє name і color,
// в іншу частину - position і weight.Потрібно явно вказати, що ці поля з AllType.
// І сама функція повертає AllType.Скористайтеся Pick.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}


function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// 3.Вкажіть дженерики для функції об'єднання об'єктів.

function merge10<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// 4.У вас є наступні класи
// Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.

interface IT {
    title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<IT> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}
