import { Quiz } from '@/types/quiz.type';

export const typeNarrowingQuiz: Quiz = {
  title: 'TypeScript 타입 내로잉 마스터하기',
  description:
    'TypeScript의 타입 내로잉 개념과 다양한 타입 가드 사용법을 테스트합니다.',
  categories: [
    {
      title: '기본 개념',
      description: '타입 내로잉의 기본 개념과 typeof 연산자 사용법',
      questions: [
        {
          id: 1,
          question:
            '다음 중 typeof 연산자가 반환할 수 있는 문자열이 아닌 것은?',
          options: ['"object"', '"array"', '"undefined"', '"function"'],
          correctAnswer: 1,
          explanation:
            "JavaScript의 typeof 연산자는 'array'를 반환하지 않습니다. 배열의 경우 typeof는 'object'를 반환합니다. typeof가 반환할 수 있는 값은 'string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', 'function' 입니다.",
        },
        {
          id: 2,
          question: 'typeof null의 결과값은 무엇인가요?',
          options: ['"null"', '"undefined"', '"object"', '"boolean"'],
          correctAnswer: 2,
          explanation:
            "JavaScript에서 typeof null은 'object'를 반환합니다. 이는 JavaScript의 오래된 특성 중 하나로, 타입 체크시 주의해야 할 부분입니다.",
        },
      ],
    },
    {
      title: '타입 가드',
      description: '다양한 타입 가드 테크닉과 사용 사례',
      questions: [
        {
          id: 3,
          question: '다음 중 타입 서술어(Type Predicate)의 올바른 형식은?',
          options: [
            'function isFish(pet): boolean',
            'function isFish(pet): pet is Fish',
            'function isFish(pet): typeof Fish',
            'function isFish(pet): instanceof Fish',
          ],
          correctAnswer: 1,
          explanation:
            "타입 서술어는 'parameterName is Type' 형식을 사용합니다. 이를 통해 TypeScript에게 특정 범위에서의 타입을 명확하게 알려줄 수 있습니다.",
        },
        {
          id: 4,
          question: 'Truthiness 내로잉에서 다음 중 falsy로 평가되지 않는 값은?',
          options: ['0', '""', '[]', 'undefined'],
          correctAnswer: 2,
          explanation:
            "JavaScript에서 빈 배열([])은 truthy 값입니다. falsy 값들은 0, NaN, '', 0n(bigint), null, undefined입니다.",
        },
      ],
    },
    {
      title: '구별된 유니온',
      description: '구별된 유니온과 완전성 검사',
      questions: [
        {
          id: 5,
          question:
            '구별된 유니온(Discriminated Unions)을 사용할 때의 장점이 아닌 것은?',
          options: [
            '타입 안정성 향상',
            '자동으로 메모리 최적화',
            '컴파일러의 타입 추론 지원',
            '실수로 인한 버그 방지',
          ],
          correctAnswer: 1,
          explanation:
            '구별된 유니온은 메모리 최적화와는 관련이 없습니다. 구별된 유니온의 주요 장점은 타입 안정성 향상, 코드 가독성 개선, 컴파일러의 타입 추론 지원, 그리고 버그 방지입니다.',
        },
        {
          id: 6,
          question:
            'never 타입을 사용한 완전성 검사(Exhaustiveness Checking)의 목적은?',
          options: [
            '코드 실행 속도 최적화',
            '메모리 사용량 감소',
            '모든 케이스가 처리되었는지 확인',
            '런타임 에러 감지',
          ],
          correctAnswer: 2,
          explanation:
            'never 타입을 사용한 완전성 검사는 switch문이나 조건문에서 모든 가능한 케이스가 처리되었는지 컴파일 시점에 확인하는 데 사용됩니다.',
        },
      ],
    },
  ],
};
