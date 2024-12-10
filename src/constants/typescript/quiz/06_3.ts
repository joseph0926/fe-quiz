import { Quiz } from '@/types/quiz.type';

export const advancedTypesQuiz: Quiz = {
  title: 'TypeScript 고급 타입 조작 마스터하기',
  description: 'TypeScript의 고급 타입 조작 기능과 활용법을 테스트합니다.',
  categories: [
    {
      title: '인덱스 접근 타입',
      description: '타입의 프로퍼티에 접근하고 조작하는 방법',
      questions: [
        {
          id: 1,
          question:
            '다음 코드의 타입 T는 무엇일까요?\n```typescript\ntype Person = {\n  age: number;\n  name: string;\n  alive: boolean;\n};\ntype T = Person[keyof Person];```',
          options: [
            'string',
            'number | string | boolean',
            'Person',
            'keyof Person',
          ],
          correctAnswer: 1,
          explanation:
            "Person[keyof Person]은 Person 타입의 모든 프로퍼티 값의 타입 유니온을 생성합니다. keyof Person은 'age' | 'name' | 'alive'를 생성하고, 이를 인덱스로 사용하면 각 프로퍼티의 타입인 number | string | boolean이 됩니다.",
        },
        {
          id: 2,
          question:
            "다음 인덱스 접근이 유효하지 않은 이유는?\n```typescript\ntype MyArray = string[];\ntype FirstElement = MyArray['push'];```",
          options: [
            '배열의 메서드는 접근할 수 없다',
            '인덱스는 숫자만 사용할 수 있다',
            'push는 예약어이다',
            '배열 타입에는 인덱스 접근을 사용할 수 없다',
          ],
          correctAnswer: 0,
          explanation:
            '배열의 내장 메서드는 타입 시스템에서 인덱스 접근으로 직접 참조할 수 없습니다. 배열의 요소 타입을 얻으려면 MyArray[number]를 사용해야 합니다.',
        },
      ],
    },
    {
      title: '조건부 타입과 추론',
      description: '조건부 타입과 infer 키워드의 활용',
      questions: [
        {
          id: 3,
          question:
            '다음 조건부 타입의 결과는?\n```typescript\ntype IsArray<T> = T extends any[] ? true : false;\ntype Result = IsArray<string[]>;```',
          options: ['false', 'true', 'boolean', 'any[]'],
          correctAnswer: 1,
          explanation:
            'IsArray는 주어진 타입이 배열인지 확인하는 조건부 타입입니다. string[]는 배열 타입이므로 조건이 참이 되어 Result는 true가 됩니다.',
        },
        {
          id: 4,
          question:
            'infer 키워드를 사용한 다음 타입의 결과는?\n```typescript\ntype GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\ntype Result = GetReturnType<() => string>;```',
          options: ['never', 'any', 'string', 'undefined'],
          correctAnswer: 2,
          explanation:
            'GetReturnType은 함수 타입의 반환 타입을 추론합니다. () => string 타입의 함수에서 infer R은 반환 타입 string을 추론하므로, Result는 string이 됩니다.',
        },
      ],
    },
    {
      title: '매핑된 타입과 키 재매핑',
      description: '타입 매핑과 키 변환 기법',
      questions: [
        {
          id: 5,
          question:
            '다음 매핑된 타입의 결과는?\n```typescript\ntype ReadonlyMapped<T> = {\n  readonly [P in keyof T]: T[P];\n};\ninterface Todo {\n  title: string;\n  done: boolean;\n}\ntype ReadonlyTodo = ReadonlyMapped<Todo>;```',
          options: [
            '{ title: string; done: boolean; }',
            '{ readonly title: string; readonly done: boolean; }',
            '{ -readonly title: string; -readonly done: boolean; }',
            'Todo',
          ],
          correctAnswer: 1,
          explanation:
            'ReadonlyMapped는 입력 타입의 모든 프로퍼티에 readonly 수식자를 추가합니다. 따라서 ReadonlyTodo는 모든 프로퍼티가 readonly인 새로운 타입이 됩니다.',
        },
        {
          id: 6,
          question:
            '다음 키 재매핑 타입의 결과로 올바른 것은?\n```typescript\ntype Getters<T> = {\n  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]\n};\ninterface User { name: string; age: number; }\ntype UserGetters = Getters<User>;```',
          options: [
            '{ name: () => string; age: () => number; }',
            '{ getName: string; getAge: number; }',
            '{ getName: () => string; getAge: () => number; }',
            '{ get_name: () => string; get_age: () => number; }',
          ],
          correctAnswer: 2,
          explanation:
            "Getters는 각 프로퍼티를 'get'으로 시작하는 메서드로 변환합니다. Capitalize를 통해 첫 글자가 대문자로 변환되고, 각 프로퍼티는 해당 타입을 반환하는 함수가 됩니다.",
        },
      ],
    },
  ],
};
