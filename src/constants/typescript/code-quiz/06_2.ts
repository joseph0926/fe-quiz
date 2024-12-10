import { CodeQuizType } from '@/types/quiz.type';

export const typeOperatorsQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: 'keyof 연산자와 인덱스 시그니처',
    description:
      'keyof 연산자가 다양한 객체 타입에서 어떻게 동작하는지 예측해보세요.',
    code: `interface StringMap {
  [key: string]: unknown;
}

interface NumberMap {
  [key: number]: string;
}

interface MixedProps {
  name: string;
  age: number;
  [key: string]: string | number;
}

// 다음 타입들의 결과는?
type T1 = keyof StringMap;    // Case 1
type T2 = keyof NumberMap;    // Case 2
type T3 = keyof MixedProps;   // Case 3

// T1, T2, T3는 각각 어떤 타입이 될까요?`,
    answer:
      "T1은 string | number (JavaScript에서 객체 키는 문자열로 강제변환되므로), T2는 number, T3는 'name' | 'age' | string (구체적인 프로퍼티와 인덱스 시그니처의 유니온)가 됩니다.",
    hint: 'keyof는 인덱스 시그니처가 있을 때 특별한 동작을 합니다. string 인덱스는 string | number를, number 인덱스는 number를 생성하며, 구체적인 프로퍼티가 있으면 그것들도 포함됩니다.',
  },
  {
    id: 2,
    title: 'typeof와 ReturnType 활용',
    description:
      'typeof 타입 연산자와 ReturnType 유틸리티 타입의 조합을 이해해보세요.',
    code: `function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}

function processUser() {
  return {
    id: 1,
    name: "John",
    isAdmin: false
  };
}

async function getData() {
  const data = await fetchData("/api/data");
  return { data, timestamp: Date.now() };
}

// 다음 타입 정의 중 올바른 것은?
type T1 = ReturnType<typeof processUser>;
type T2 = ReturnType<typeof getData>;
type T3 = ReturnType<typeof fetchData>;
type T4 = ReturnType<typeof fetchData<string>>;`,
    answer:
      'T1과 T2는 올바르지만, T3와 T4는 타입 에러가 발생합니다. T1은 processUser의 반환 객체 타입이 되고, T2는 Promise<{ data: any, timestamp: number }>가 됩니다. T3와 T4는 제네릭 함수의 ReturnType을 직접 사용하려 했기 때문에 에러가 발생합니다.',
    hint: 'ReturnType은 구체적인 함수 타입에만 사용할 수 있습니다. 제네릭 함수는 구체적인 타입이 결정되지 않아 직접 사용할 수 없습니다.',
  },
  {
    id: 3,
    title: 'typeof 제한사항 이해하기',
    description:
      'typeof 타입 연산자의 사용 가능한 범위와 제한사항을 확인해보세요.',
    code: `const user = {
  name: "John",
  age: 30,
  roles: ["admin", "editor"] as const
};

function getRole() {
  return "user" as const;
}

// 다음 중 올바른 타입 정의는?
type T1 = typeof user.roles[0];
type T2 = typeof getRole();
type T3 = typeof user["name"];
type T4 = typeof (user.age + 1);
type T5 = typeof Date.now();
type T6 = typeof (Math.random() > 0.5 ? "yes" : 123);`,
    answer:
      'T1과 T3는 올바르지만, T2, T4, T5, T6은 타입 에러가 발생합니다. typeof는 값 표현식이나 연산에 직접 사용할 수 없고, 변수나 프로퍼티 참조에만 사용할 수 있습니다.',
    hint: 'typeof 타입 연산자는 식별자(변수명)나 프로퍼티 접근에만 사용할 수 있습니다. 함수 호출이나 연산 표현식에는 사용할 수 없습니다.',
  },
  {
    id: 4,
    title: 'keyof와 typeof 조합하기',
    description:
      'keyof와 typeof를 함께 사용하여 객체의 키 타입을 추출하는 방법을 알아보세요.',
    code: `const config = {
  api: {
    endpoint: "https://api.example.com",
    timeout: 3000,
    retries: 3
  },
  features: {
    darkMode: true,
    notifications: false
  }
} as const;

// 다음 타입 정의들의 결과는?
type ConfigKeys = keyof typeof config;
type ApiKeys = keyof typeof config.api;
type FeatureFlags = (typeof config.features)[keyof typeof config.features];

function getConfigValue<T extends keyof typeof config>(
  key: T
): (typeof config)[T] {
  return config[key];
}

const api = getConfigValue("api");
const features = getConfigValue("features");
const invalid = getConfigValue("invalid");`,
    answer:
      "ConfigKeys는 'api' | 'features', ApiKeys는 'endpoint' | 'timeout' | 'retries', FeatureFlags는 boolean이 됩니다. getConfigValue 함수 호출에서 api와 features는 정상이지만, invalid는 타입 에러가 발생합니다.",
    hint: 'typeof로 객체의 타입을 추출하고 keyof로 키들의 유니온 타입을 얻을 수 있습니다. as const를 사용하면 더 구체적인 타입을 얻을 수 있습니다.',
  },
];
