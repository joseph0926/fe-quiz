import { CodeQuizType } from '@/types/quiz.type';

export const functionTypeQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '제네릭 함수의 제약 조건 이해하기',
    description:
      '제네릭 함수의 제약 조건(constraints)과 타입 추론이 어떻게 동작하는지 맞춰보세요.',
    code: `function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// 다음 호출 중 어떤 것이 타입 에러를 발생시킬까요?
const arr = longest([1, 2], [1, 2, 3]);
const str = longest("alice", "bob");
const num = longest(10, 100);
const mix = longest([1, 2], "ab");`,
    answer:
      'num과 mix 호출에서 타입 에러가 발생합니다. number 타입은 length 프로퍼티가 없어서 제약 조건을 만족하지 못하고, 배열과 문자열은 서로 다른 타입이라 Type 매개변수에 할당할 수 없습니다.',
    hint: '제네릭 타입 Type은 length 프로퍼티를 가져야 하며, 함수의 두 매개변수는 동일한 타입이어야 합니다.',
  },
  {
    id: 2,
    title: '함수 오버로드 시그니처 활용',
    description:
      '오버로드된 함수의 타입 체크가 어떻게 동작하는지 예측해보세요.',
    code: `function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// 다음 중 올바른 호출은?
const date1 = makeDate(12345678);
const date2 = makeDate(5, 5, 2025);
const date3 = makeDate(5, 5);
const date4 = makeDate(1, 2, 3, 4);`,
    answer:
      'date1과 date2만 유효한 호출입니다. date3은 오버로드 시그니처와 일치하지 않고(2개 인자), date4는 너무 많은 인자를 전달합니다(4개 인자).',
    hint: '함수 오버로드는 정확히 시그니처와 일치하는 호출만 허용합니다. 구현 시그니처는 모든 오버로드 시그니처와 호환되어야 하지만, 직접 호출할 수는 없습니다.',
  },
  {
    id: 3,
    title: '호출 시그니처와 프로퍼티 이해하기',
    description:
      '함수 타입에 추가 프로퍼티가 있는 경우의 타입 체크를 이해해보세요.',
    code: `type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// 다음 구현 중 올바른 것은?
// 1)
const fn1 = (n: number) => n > 3;
fn1.description = "Check if greater than 3";

// 2)
const fn2: DescribableFunction = (n: number) => n > 3;

// 3)
const fn3: DescribableFunction = {
  description: "Check if greater than 3",
  (n: number): boolean { return n > 3; }
};`,
    answer:
      'fn1만 올바른 구현입니다. fn2는 description 프로퍼티가 없어서 타입 에러가 발생하고, fn3는 객체 리터럴 문법이 잘못되었습니다. 함수에 프로퍼티를 추가하려면 먼저 함수를 정의한 후 프로퍼티를 할당해야 합니다.',
    hint: '호출 가능한 객체 타입은 함수를 정의한 후 프로퍼티를 추가하는 방식으로 구현해야 합니다.',
  },
  {
    id: 4,
    title: 'void 반환 타입의 특수성',
    description:
      'void 반환 타입이 있는 함수 타입의 특별한 할당 규칙을 이해해보세요.',
    code: `type VoidFunc = () => void;

const fn1: VoidFunc = () => {
  return true;
};

const fn2: VoidFunc = () => true;

function fn3(): void {
  return true;
}

// 배열 메서드 예시
const src = [1, 2, 3];
const dst: number[] = [];

src.forEach((el) => dst.push(el));

// 위 코드들 중 타입 에러가 발생하는 것은?`,
    answer:
      'fn3만 타입 에러가 발생합니다. 함수 타입 VoidFunc로 타입 지정된 변수에 할당되는 함수는 값을 반환해도 되지만, 직접 void를 반환 타입으로 명시한 함수는 값을 반환할 수 없습니다. forEach 콜백의 경우 void 반환 타입이 예상되지만 push의 반환값이 무시되므로 문제없습니다.',
    hint: 'void 타입의 특별한 규칙: 함수 타입의 void 반환과 직접 void 반환 선언은 다르게 동작합니다.',
  },
];
