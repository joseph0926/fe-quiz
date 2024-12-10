import { CodeQuizType } from '@/types/quiz.type';

export const typeNarrowingQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: 'Truthiness 타입 가드 이해하기',
    description:
      'Truthiness 타입 가드를 사용한 문자열 배열 처리 함수의 결과를 예측해보세요.',
    code: `function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else {
      console.log(strs);
    }
  }
}

printAll(null);
printAll("hello");
printAll(["hello", "world"]);`,
    answer:
      '함수는 세 케이스 모두 정상 동작합니다. null은 첫 번째 if문에서 걸러지고, 문자열은 typeof 체크에서 object가 아니므로 직접 출력되며, 배열은 object 타입으로 확인되어 반복문으로 처리됩니다.',
    hint: "Truthiness 체크는 null과 undefined를 걸러내는데 유용합니다. typeof 연산자는 'object'와 'string' 구분에 사용됩니다.",
  },
  {
    id: 2,
    title: '동등성 내로잉 테스트',
    description:
      '== null 체크를 사용한 타입 내로잉이 어떻게 동작하는지 맞춰보세요.',
    code: `interface Container {
  value: number | null | undefined;
}

function processValue(container: Container) {
  // == null은 null과 undefined 모두 체크합니다
  if (container.value != null) {
    // 이 시점에서 container.value의 타입은?
    container.value.toFixed(2);
  }
}

const c1: Container = { value: 42 };
const c2: Container = { value: null };
const c3: Container = { value: undefined };

processValue(c1);
processValue(c2);
processValue(c3);`,
    answer:
      'container.value의 타입은 number로 좁혀집니다. != null 체크는 null과 undefined를 모두 제외하므로, 남은 유니온 타입 중 number만 가능합니다. 따라서 toFixed() 메서드 호출이 안전하게 허용됩니다.',
    hint: 'JavaScript에서 == null은 값이 null 또는 undefined인 경우 true를 반환합니다.',
  },
  {
    id: 3,
    title: '구별된 유니온 완전성 검사',
    description:
      'never 타입을 사용한 완전성 검사에서 발생하는 오류를 찾아보세요.',
    code: `type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}`,
    answer:
      '이 코드는 컴파일 에러가 발생합니다. Triangle 타입이 Shape 유니온에 포함되어 있지만, switch 문에서 처리되지 않았기 때문에 default 케이스에서 Triangle 타입을 never 타입에 할당하려 할 때 타입 에러가 발생합니다.',
    hint: 'never 타입은 모든 가능한 타입이 제거된 상태를 나타냅니다. switch 문이 모든 가능한 케이스를 처리하지 않으면 타입 에러가 발생합니다.',
  },
  {
    id: 4,
    title: 'in 연산자 타입 가드 활용',
    description:
      'in 연산자를 사용한 타입 가드에서 옵셔널 프로퍼티 처리를 이해해보세요.',
    code: `type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { 
  swim?: () => void;
  fly?: () => void;
};

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // 이 블록에서 animal의 타입은?
    animal.swim();
  } else {
    // 이 블록에서 animal의 타입은?
    animal.fly();
  }
}

const fish: Fish = { swim: () => console.log("swimming") };
const human: Human = { swim: () => console.log("swimming slowly") };

move(fish);
move(human);`,
    answer:
      "이 코드는 타입 에러가 발생합니다. 'swim' in animal이 true인 경우 animal은 Fish | Human 타입이 되며, Human의 swim은 옵셔널이므로 animal.swim() 호출이 안전하지 않습니다. else 블록에서도 유사한 문제가 발생합니다.",
    hint: 'in 연산자로 체크할 때 옵셔널 프로퍼티는 타입을 완벽하게 좁히지 못할 수 있습니다.',
  },
];
