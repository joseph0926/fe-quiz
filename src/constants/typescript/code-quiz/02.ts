import { CodeQuizType } from '@/types/quiz.type';

export const codeQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '구조적 타이핑 이해하기',
    description: 'Email과 User 타입의 호환성을 테스트해보세요.',
    code: `type Email = {
  address: string;
}

type User = {
  address: string;
  name: string;
}

function sendEmail(emailInfo: Email) {
  console.log(\`Sending email to: \${emailInfo.address}\`);
}

const email: Email = {
  address: "test@test.com"
};

const user: User = {
  address: "user@test.com",
  name: "Kim"
};

sendEmail(email);   // Case 1
sendEmail(user);    // Case 2: 이 줄은 타입 에러가 발생할까요?`,
    answer:
      'Case 2는 정상적으로 실행됩니다. TypeScript의 구조적 타이핑으로 인해 User 타입이 Email 타입의 필요 속성을 모두 포함하고 있어 호환됩니다.',
    hint: 'TypeScript는 duck typing 원칙을 따릅니다...',
  },
  {
    id: 2,
    title: '유니온 타입과 타입 좁히기',
    description: '다음 함수의 타입 에러를 해결해보세요.',
    code: `function process(input: number | string) {
    console.log(input.toUpperCase());  // 이 줄의 문제를 해결하세요
    console.log(input.toFixed(2));     // 이 줄의 문제를 해결하세요
}`,
    answer: 'typeof 검사를 통한 타입 좁히기가 필요합니다.',
    hint: 'string과 number 타입에 따라 다른 처리가 필요합니다.',
  },
  {
    id: 3,
    title: '인터페이스 확장 이해하기',
    description: '다음 코드의 타입 에러를 찾고 해결해보세요.',
    code: `interface Animal {
  name: string;
  age: number;
}

interface Pet extends Animal {
  owner: string;
}

const cat: Pet = {
  name: "Kitty",
  owner: "John"
}

function printAnimal(animal: Animal) {
  console.log(\`Name: \${animal.name}, Age: \${animal.age}\`);
}

printAnimal(cat); // 이 줄은 실행될까요?`,
    answer:
      'cat 객체에는 필수 속성인 age가 누락되어 있어 Pet 타입 정의에 맞지 않습니다. age 속성을 추가해야 합니다. printAnimal(cat) 호출 자체는 구조적 타이핑에 의해 age만 있다면 정상 실행됩니다.',
    hint: '인터페이스를 확장할 때는 기본 인터페이스의 모든 필수 속성을 포함해야 합니다.',
  },
  {
    id: 4,
    title: '선택적 속성과 타입 추론',
    description:
      '다음 코드에서 발생할 수 있는 런타임 에러를 찾고 수정해보세요.',
    code: `interface User {
  name: string;
  age?: number;
  email?: string;
}

function sendUserEmail(user: User) {
  const emailContent = \`Hello \${user.name}!\`;
  console.log(\`Sending email to: \${user.email.toLowerCase()}\`);
}

const user: User = {
  name: "John"
};

sendUserEmail(user);`,
    answer:
      'user.email이 optional이므로 undefined일 수 있습니다. toLowerCase()를 호출하기 전에 email의 존재 여부를 확인해야 합니다. 옵셔널 체이닝(?.)을 사용하거나 if 문으로 체크해야 합니다.',
    hint: '선택적 속성은 undefined가 될 수 있습니다.',
  },
  {
    id: 5,
    title: '제네릭 함수 구현하기',
    description: '배열의 첫 번째 요소를 반환하는 제네릭 함수를 구현해보세요.',
    code: `// first 함수를 구현해보세요
// 힌트: 빈 배열이 입력될 경우도 고려해야 합니다

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

console.log(first(numbers)); // should return 1
console.log(first(strings)); // should return "a"
console.log(first([])); // should return undefined`,
    answer: `function first<T>(arr: T[]): T | undefined {
  return arr[0];
}`,
    hint: '제네릭 타입 T를 사용하여 어떤 타입의 배열이든 처리할 수 있게 만듭니다.',
  },
  {
    id: 6,
    title: '리터럴 타입과 유니온 타입',
    description: '다음 코드의 타입 오류를 찾고 수정해보세요.',
    code: `type Direction = "left" | "right" | "up" | "down";
type HorizontalDirection = "left" | "right";

function move(direction: HorizontalDirection) {
  console.log(\`Moving \${direction}\`);
}

let userInput: Direction = "up";
move(userInput); // 이 줄의 문제를 해결해보세요`,
    answer:
      "userInput은 Direction 타입이므로 'up'이나 'down'일 수 있어 HorizontalDirection 타입에 할당할 수 없습니다. 타입 단언이나 타입 가드를 사용해 userInput이 'left'나 'right'인 경우만 move 함수에 전달해야 합니다.",
    hint: '리터럴 타입의 유니온에서는 가능한 모든 값이 호환되어야 합니다.',
  },
  {
    id: 7,
    title: '타입 추론과 배열 메서드',
    description: 'map 메서드 사용 시의 타입 추론을 이해해보세요.',
    code: `const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 }
];

const names = users.map(user => user.name);
const ages = users.map(user => user.age);

// 다음 타입은 무엇일까요?
type NamesType = typeof names;
type AgesType = typeof ages;`,
    answer:
      'NamesType은 string[], AgesType은 number[]입니다. TypeScript는 배열의 map 메서드가 반환하는 새 배열의 타입을 콜백 함수의 반환 타입을 기반으로 추론합니다.',
    hint: 'typeof 연산자는 변수나 프로퍼티의 타입을 추출합니다.',
  },
];
