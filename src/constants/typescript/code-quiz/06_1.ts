import { CodeQuizType } from '@/types/quiz.type';

export const genericTypeQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '제네릭 제약 조건 이해하기',
    description:
      '제네릭 타입의 extends 키워드와 제약 조건이 어떻게 동작하는지 예측해보세요.',
    code: `interface HasLength {
  length: number;
}

function processItems<T extends HasLength>(items: T): number {
  return items.length;
}

// 다음 호출 중 올바른 것은?
const len1 = processItems("hello");
const len2 = processItems([1, 2, 3]);
const len3 = processItems({ length: 10, value: 20 });
const len4 = processItems(42);
const len5 = processItems({ value: 10 });`,
    answer:
      'len1, len2, len3는 정상 동작하고, len4와 len5는 타입 에러가 발생합니다. string과 배열은 내장 length 프로퍼티를 가지고 있고, len3의 객체는 명시적으로 length를 포함하고 있습니다. number 타입과 length가 없는 객체는 HasLength 인터페이스를 만족하지 않습니다.',
    hint: 'extends 키워드로 지정된 제약 조건은 해당 타입이나 인터페이스의 모든 필수 프로퍼티를 가지고 있어야 합니다.',
  },
  {
    id: 2,
    title: '제네릭 클래스와 타입 추론',
    description:
      '제네릭 클래스의 타입 추론과 제약이 어떻게 동작하는지 확인해보세요.',
    code: `class DataContainer<T> {
  private data: T;
  
  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }

  setData(newData: T) {
    this.data = newData;
  }
}

// 다음 코드의 타입 안전성을 확인해보세요
const strContainer = new DataContainer("Hello");
const numContainer = new DataContainer(42);

strContainer.setData("World");     // Case 1
strContainer.setData(123);         // Case 2
numContainer.setData(3.14);        // Case 3
const mixed = new DataContainer<string | number>("Hi");
mixed.setData(42);                 // Case 4`,
    answer:
      'Case 1, 3, 4는 정상이고 Case 2는 타입 에러가 발생합니다. TypeScript는 생성자의 인자로부터 T의 타입을 추론하여 strContainer는 string, numContainer는 number로 타입이 고정됩니다. mixed는 명시적으로 union 타입을 지정했으므로 string과 number 모두 허용됩니다.',
    hint: '제네릭 클래스의 타입 매개변수는 인스턴스 생성 시점에 결정되며, 이후 해당 타입만 허용됩니다. 명시적으로 union 타입을 지정하면 여러 타입을 허용할 수 있습니다.',
  },
  {
    id: 3,
    title: 'keyof와 제네릭 제약 조건',
    description:
      'keyof 연산자와 제네릭 제약 조건을 조합하여 사용하는 방법을 이해해보세요.',
    code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// 다음 호출 중 타입 에러가 발생하는 것은?
const name = getProperty(user, "name");
const age = getProperty(user, "age");
const email = getProperty(user, "email");
const id = getProperty(user, "id");
const nameAge = getProperty(user, "name" as "name" | "age");`,
    answer:
      "id를 키로 사용하는 호출만 타입 에러가 발생합니다. K extends keyof T는 K가 T의 키 중 하나여야 함을 의미하며, 'id'는 User 인터페이스의 키가 아닙니다. nameAge는 유효한 키 타입의 union을 사용하므로 정상 동작합니다.",
    hint: 'keyof T는 T 타입의 모든 키의 union 타입을 생성합니다. extends keyof T 제약 조건은 해당 타입의 실제 키만 허용합니다.',
  },
  {
    id: 4,
    title: '제네릭 기본값과 조건부 타입',
    description:
      '제네릭 타입의 기본값과 조건부 타입이 어떻게 상호작용하는지 살펴보세요.',
    code: `interface Container<T = string, U = T extends string ? string[] : number[]> {
  value: T;
  items: U;
}

// 다음 객체 생성 중 유효한 것은?
const c1: Container = {
  value: "hello",
  items: ["a", "b", "c"]
};

const c2: Container<number> = {
  value: 42,
  items: [1, 2, 3]
};

const c3: Container<boolean, string[]> = {
  value: true,
  items: ["x", "y", "z"]
};

const c4: Container<number, string[]> = {
  value: 123,
  items: ["1", "2", "3"]
};`,
    answer:
      'c1, c2, c3, c4 모두 유효합니다. c1은 기본 타입 매개변수를 사용하여 string과 string[]이 됩니다. c2는 T가 number이므로 U는 number[]가 됩니다. c3과 c4는 두 타입 매개변수를 모두 명시적으로 지정하여 조건부 타입을 무시합니다.',
    hint: '제네릭 기본값은 타입이 명시적으로 지정되지 않았을 때 사용됩니다. 조건부 타입은 첫 번째 타입 매개변수에 따라 두 번째 타입을 결정할 수 있게 해줍니다.',
  },
];
