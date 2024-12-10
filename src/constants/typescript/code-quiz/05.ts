import { CodeQuizType } from '@/types/quiz.type';

export const objectTypeQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '초과 프로퍼티 검사 이해하기',
    description:
      'TypeScript의 초과 프로퍼티 검사가 언제 발생하고 어떻게 동작하는지 맞춰보세요.',
    code: `interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig) {
  return { color: "white", area: (config.width ?? 10) ** 2 };
}

// 다음 코드 중 타입 에러가 발생하는 것은?
const square1 = createSquare({ width: 100 });
const square2 = createSquare({ width: 100, color: "black" });
const square3 = createSquare({ width: 100, colour: "black" });

const options = { width: 100, colour: "black" };
const square4 = createSquare(options);`,
    answer:
      "square3만 타입 에러가 발생합니다. 객체 리터럴을 직접 전달할 때는 초과 프로퍼티 검사가 발생하여 'colour'가 허용되지 않습니다. 하지만 square4는 중간 변수를 통해 전달하므로 초과 프로퍼티 검사를 우회하게 됩니다.",
    hint: '초과 프로퍼티 검사는 객체 리터럴을 직접 할당할 때만 발생하며, 중간 변수를 사용하거나 타입 단언을 사용하면 우회할 수 있습니다.',
  },
  {
    id: 2,
    title: '교차 타입과 인터페이스 확장의 차이',
    description:
      '교차 타입(&)과 인터페이스 확장(extends)의 동작 방식 차이를 이해해보세요.',
    code: `interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  breed: string;
}

// 방법 1: 인터페이스 확장
interface DetailedDog extends Animal, Dog {}

// 방법 2: 교차 타입
type DetailedDogType = Animal & Dog;

// 다음 객체들 중 어떤 것이 유효할까요?
const dog1: DetailedDog = {
  name: "Max",
  age: 5,
  breed: "Labrador"
};

const dog2: DetailedDogType = {
  name: "Bella",
  age: 3,
  breed: "Poodle"
};

const dog3: DetailedDog = {
  name: "Charlie",
  breed: "Beagle"
};`,
    answer:
      'dog1과 dog2만 유효합니다. dog3은 age 프로퍼티가 없어서 에러가 발생합니다. DetailedDog와 DetailedDogType은 이 경우 동일하게 동작하며, 두 경우 모두 name, age, breed 프로퍼티가 모두 필요합니다. name 프로퍼티는 string 타입으로 일치하므로 문제가 없습니다.',
    hint: '교차 타입과 인터페이스 확장은 프로퍼티 타입이 호환될 때는 비슷하게 동작합니다. 차이점은 충돌하는 프로퍼티 타입이 있을 때 드러납니다.',
  },
  {
    id: 3,
    title: 'readonly 프로퍼티의 동작 이해',
    description:
      'readonly 수정자가 객체의 중첩된 프로퍼티에 어떤 영향을 미치는지 파악해보세요.',
    code: `interface Home {
  readonly address: {
    street: string;
    city: string;
  };
  readonly residents: string[];
}

const home: Home = {
  address: { street: "123 Main St", city: "Boston" },
  residents: ["John", "Jane"]
};

// 다음 중 타입 에러가 발생하는 코드는?
// 1)
home.address = { street: "456 Oak St", city: "Chicago" };

// 2)
home.address.city = "New York";

// 3)
home.residents.push("Jack");

// 4)
home.residents = [...home.residents, "Jack"];`,
    answer:
      '1번과 4번에서 타입 에러가 발생합니다. readonly는 최상위 프로퍼티의 재할당만 방지하고 중첩된 객체의 내부 수정은 허용합니다. 따라서 address 객체 자체나 residents 배열 자체를 재할당하는 것은 불가능하지만, address의 내부 프로퍼티 수정이나 residents 배열의 push는 가능합니다.',
    hint: 'readonly는 얕은(shallow) 불변성만 제공합니다. 깊은(deep) 불변성이 필요하다면 모든 중첩 레벨에 readonly를 적용하거나 유틸리티 타입을 사용해야 합니다.',
  },
  {
    id: 4,
    title: '튜플 타입과 배열 타입의 차이',
    description: '튜플 타입과 일반 배열 타입의 타입 검사 차이를 이해해보세요.',
    code: `// 튜플 타입
type Point = [number, number];
// 배열 타입
type Numbers = number[];

// 다음 할당 중 유효한 것은?
const point1: Point = [1, 2];
const point2: Point = [1, 2, 3];
const point3: Point = [1];

const nums1: Numbers = [1, 2];
const nums2: Numbers = [1, 2, 3];
const nums3: Numbers = [1];

// 선택적 요소를 가진 튜플
type OptionalPoint = [number, number?];
const opt1: OptionalPoint = [1, 2];
const opt2: OptionalPoint = [1];
const opt3: OptionalPoint = [1, 2, 3];`,
    answer:
      'point1, nums1, nums2, nums3, opt1, opt2는 유효하지만 point2, point3, opt3는 에러가 발생합니다. 튜플 타입은 정확한 길이와 각 위치의 타입을 검사하며, 선택적 요소가 있는 경우에도 최대 길이가 제한됩니다. 반면 배열 타입은 길이에 제한이 없습니다.',
    hint: '튜플은 고정된 길이와 위치별 타입을 가지며, 선택적 요소는 튜플의 끝에만 올 수 있습니다. 배열은 임의의 길이를 가질 수 있습니다.',
  },
];
