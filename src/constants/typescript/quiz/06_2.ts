import { Quiz } from '@/types/quiz.type';

export const typeOperatorsQuiz: Quiz = {
  title: 'TypeScript 타입 연산자 마스터하기',
  description: 'TypeScript의 keyof와 typeof 타입 연산자의 이해와 활용',
  categories: [
    {
      title: 'keyof 연산자',
      description: 'keyof 타입 연산자의 동작과 활용',
      questions: [
        {
          id: 1,
          question:
            '다음 코드의 결과로 올바른 것은?\n```typescript\ntype Person = {\n  name: string;\n  age: number;\n  location: string;\n};\ntype PersonKeys = keyof Person;```',
          options: [
            'type PersonKeys = string',
            "type PersonKeys = 'name' | 'age' | 'location'",
            'type PersonKeys = string | number',
            'type PersonKeys = Person',
          ],
          correctAnswer: 1,
          explanation:
            "keyof 연산자는 객체 타입의 모든 키를 문자열 리터럴 유니온으로 추출합니다. 이 경우 Person 타입의 모든 프로퍼티 키인 'name' | 'age' | 'location'이 됩니다.",
        },
        {
          id: 2,
          question:
            '인덱스 시그니처가 있는 타입에 keyof를 사용할 때의 결과로 올바른 것은?\n```typescript\ntype StringMap = { [key: string]: unknown };\ntype Keys = keyof StringMap;```',
          options: ['string', 'unknown', 'string | number', 'never'],
          correctAnswer: 2,
          explanation:
            '문자열 인덱스 시그니처를 가진 타입에 keyof를 사용하면 string | number가 됩니다. 이는 JavaScript에서 객체 키가 항상 문자열로 강제 변환되고, 숫자 키도 허용되기 때문입니다.',
        },
      ],
    },
    {
      title: 'typeof 연산자',
      description: 'typeof 타입 연산자의 사용법과 제한사항',
      questions: [
        {
          id: 3,
          question: '다음 중 typeof 연산자의 올바른 사용이 아닌 것은?',
          options: [
            'type T1 = typeof someVariable',
            'type T2 = typeof someFunction',
            'type T3 = typeof (42).toString',
            "type T4 = typeof console.log('hello')",
          ],
          correctAnswer: 3,
          explanation:
            "typeof는 값이나 식별자의 타입을 참조할 때 사용되며, 실행 시점의 표현식(console.log('hello'))에는 사용할 수 없습니다. typeof는 타입 문맥에서 식별자나 속성 접근에만 사용할 수 있습니다.",
        },
        {
          id: 4,
          question:
            'ReturnType과 typeof를 함께 사용한 다음 코드의 결과는?\n```typescript\nfunction createPoint() {\n  return { x: 10, y: 20 };\n}\ntype PointType = ReturnType<typeof createPoint>;```',
          options: [
            'type PointType = Function',
            'type PointType = { x: 10, y: 20 }',
            'type PointType = { x: number, y: number }',
            'type PointType = typeof createPoint',
          ],
          correctAnswer: 2,
          explanation:
            'ReturnType은 함수 타입의 반환 타입을 추출합니다. typeof createPoint는 함수의 타입을 가져오고, ReturnType은 그 함수의 반환 타입인 { x: number, y: number }를 추출합니다.',
        },
      ],
    },
    {
      title: '실용적 활용',
      description: '타입 연산자의 실제 사용 사례',
      questions: [
        {
          id: 5,
          question:
            "다음 코드에서 getProperty 함수의 key 매개변수가 가질 수 있는 타입은?\n```typescript\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst person = { name: 'John', age: 30 };```",
          options: ['string', "'name' | 'age'", 'keyof typeof person', 'T[K]'],
          correctAnswer: 1,
          explanation:
            "getProperty 함수에서 K는 keyof T로 제한되어 있고, person 객체의 경우 이는 'name' | 'age' 유니온 타입이 됩니다. 이는 타입 안전성을 보장하면서 객체의 프로퍼티에 접근할 수 있게 해줍니다.",
        },
        {
          id: 6,
          question: '다음 중 타입 연산자를 사용한 모범 사례가 아닌 것은?',
          options: [
            '설정 객체의 타입을 정의할 때 typeof 사용',
            '객체의 키를 제한하기 위해 keyof 사용',
            '모든 변수 선언에 typeof 사용',
            '제네릭 함수에서 키 타입을 제한하기 위해 keyof 사용',
          ],
          correctAnswer: 2,
          explanation:
            '모든 변수 선언에 typeof를 사용하는 것은 과도한 사용입니다. TypeScript의 타입 추론을 활용하는 것이 더 좋은 방법이며, typeof는 실제로 필요한 경우(예: 복잡한 객체의 타입 추출, 외부 값의 타입 참조 등)에만 사용해야 합니다.',
        },
      ],
    },
  ],
};
