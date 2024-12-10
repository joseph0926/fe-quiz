import { CodeQuizType } from '@/types/quiz.type';

export const advancedTypeQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '인덱스 접근 타입의 활용',
    description:
      '중첩된 객체 타입에서 인덱스 접근 타입을 사용하여 특정 프로퍼티의 타입을 추출하는 방법을 이해해보세요.',
    code: `interface API {
  endpoints: {
    user: {
      data: {
        id: number;
        name: string;
        roles: string[];
      };
      error: {
        code: number;
        message: string;
      };
    };
    settings: {
      data: {
        theme: "light" | "dark";
        notifications: boolean;
      };
    };
  };
}

// 다음 타입 정의들의 결과는?
type T1 = API["endpoints"]["user"]["data"];
type T2 = API["endpoints"]["user"]["data"]["roles"][number];
type T3 = API["endpoints"][keyof API["endpoints"]]["data"];
type T4 = API["endpoints"]["invalid"];`,
    answer:
      'T1은 user.data의 전체 객체 타입, T2는 string (배열의 요소 타입), T3는 두 endpoints의 data 타입의 유니온이 됩니다. T4는 존재하지 않는 프로퍼티를 참조하므로 타입 에러가 발생합니다.',
    hint: '인덱스 접근은 배열과 객체 모두에서 작동하며, [number]는 배열의 요소 타입을 추출합니다. 존재하지 않는 프로퍼티 접근은 타입 에러를 발생시킵니다.',
  },
  {
    id: 2,
    title: '조건부 타입과 infer',
    description:
      '조건부 타입과 infer 키워드를 사용하여 함수나 Promise의 타입을 추출하는 방법을 알아보세요.',
    code: `type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type UnpackArray<T> = T extends Array<infer U> ? U : T;

type AsyncData = Promise<number[]>;
type SyncData = string[];

// 다음 타입들의 결과는?
type R1 = UnpackPromise<AsyncData>;  // Case 1
type R2 = UnpackArray<R1>;           // Case 2
type R3 = UnpackPromise<SyncData>;   // Case 3
type R4 = UnpackArray<UnpackPromise<Promise<string[]>>>;  // Case 4

// 그리고 아래 타입은?
type GetterReturn<T> = T extends () => infer R ? R : never;
type R5 = GetterReturn<() => Promise<number>>;
type R6 = GetterReturn<string>;`,
    answer:
      'R1은 number[], R2는 number, R3는 string[] (Promise가 아니므로 그대로), R4는 string입니다. R5는 Promise<number>, R6은 never가 됩니다. 조건부 타입은 타입이 조건을 만족하지 않을 때 else 부분을 사용합니다.',
    hint: 'infer는 제네릭 타입에서 타입을 추출할 때 사용됩니다. 조건부 타입은 체이닝이 가능하며, 조건을 만족하지 않으면 else 부분이 사용됩니다.',
  },
  {
    id: 3,
    title: '매핑된 타입과 키 재매핑',
    description:
      '매핑된 타입과 as 절을 사용하여 객체 타입을 변환하는 방법을 이해해보세요.',
    code: `interface Person {
  name: string;
  age: number;
  email: string;
}

// Readonly와 선택적 프로퍼티 변환
type ReadonlyOptional<T> = {
  readonly [K in keyof T]?: T[K];
};

// Getter 메서드 생성
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

// 특정 타입의 프로퍼티만 선택
type PickByType<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? K : never]: T[K];
};

// 다음 타입들의 결과는?
type T1 = ReadonlyOptional<Person>;
type T2 = Getters<Person>;
type T3 = PickByType<Person, string>;`,
    answer:
      'T1은 모든 프로퍼티가 readonly이고 선택적인 Person, T2는 getName, getAge, getEmail 메서드를 가진 타입, T3는 name과 email 프로퍼티만 포함하는 타입이 됩니다. 매핑된 타입에서 as 절은 프로퍼티 이름을 변환하거나 필터링할 수 있게 해줍니다.',
    hint: '매핑된 타입은 기존 타입의 프로퍼티를 반복하면서 변환합니다. as 절은 키의 이름을 변경하거나, never를 사용하여 특정 프로퍼티를 제외할 수 있습니다.',
  },
  {
    id: 4,
    title: '템플릿 리터럴 타입과 매핑된 타입',
    description:
      '템플릿 리터럴 타입과 매핑된 타입을 조합하여 복잡한 타입 변환을 수행하는 방법을 알아보세요.',
    code: `type EventConfig = {
  click: { x: number; y: number };
  focus: { target: string };
  input: { value: string };
};

// 이벤트 핸들러 타입 생성
type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]: (event: T[K]) => void;
};

// Ref 타입 생성
type MutableRef<T> = {
  [K in keyof T as \`$\${string & K}\`]: {
    get: () => T[K];
    set: (value: T[K]) => void;
  };
};

// 다음 타입들의 결과는?
type Handlers = EventHandlers<EventConfig>;
type Refs = MutableRef<EventConfig>;

// 다음 객체들은 유효한가요?
const handlers: Handlers = {
  onClick: (e) => console.log(e.x, e.y),
  onFocus: (e) => console.log(e.target),
  onInput: (e) => console.log(e.value)
};

const refs: Refs = {
  $click: {
    get: () => ({ x: 0, y: 0 }),
    set: (value) => console.log(value.x, value.y)
  }
};`,
    answer:
      '모든 정의가 유효합니다. Handlers는 onClick, onFocus, onInput 메서드를 가진 타입이 되며, 각 메서드는 해당하는 이벤트 객체를 매개변수로 받습니다. Refs는 $click, $focus, $input 프로퍼티를 가지며, 각각 get/set 메서드를 포함합니다.',
    hint: '템플릿 리터럴 타입을 매핑된 타입의 as 절과 함께 사용하면 프로퍼티 이름을 체계적으로 변환할 수 있습니다. 원본 타입의 타입 정보는 인덱스 접근을 통해 유지됩니다.',
  },
];
