import { Quiz } from '@/types/quiz.type';

export const typeScriptQuizTwo: Quiz = {
  title: 'TypeScript 기초 퀴즈',
  description:
    'TypeScript의 기본 타입과 문법에 대한 이해도를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 타입',
      description: 'TypeScript의 기본적인 타입들에 대한 이해도를 확인합니다.',
      questions: [
        {
          id: 1,
          question: '다음 중 TypeScript의 기본 타입이 아닌 것은?',
          options: ['string', 'number', 'boolean', 'integer'],
          correctAnswer: 3,
          explanation:
            'integer는 TypeScript의 기본 타입이 아닙니다. TypeScript에서는 모든 숫자가 number 타입으로 표현됩니다.',
        },
        {
          id: 2,
          question: 'TypeScript에서 배열 타입을 선언하는 올바른 방법은?',
          options: [
            'Array<number>',
            'number[]',
            '위의 둘 다',
            '위의 둘 다 아님',
          ],
          correctAnswer: 2,
          explanation:
            'TypeScript에서는 Array<number>와 number[] 두 가지 방식 모두 배열 타입을 선언하는 올바른 방법입니다.',
        },
      ],
    },
    {
      title: '타입 시스템',
      description: 'TypeScript의 타입 시스템 특징에 대한 이해도를 확인합니다.',
      questions: [
        {
          id: 3,
          question: '다음 중 any 타입의 특징으로 옳지 않은 것은?',
          options: [
            '모든 타입의 값을 할당할 수 있다',
            '타입 검사를 비활성화한다',
            '컴파일러가 타입 오류를 더 엄격하게 검사한다',
            'TypeScript의 타입 안전성을 약화시킬 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'any 타입은 오히려 타입 검사를 완화시키며, 컴파일러의 타입 검사를 비활성화합니다.',
        },
        {
          id: 4,
          question: '유니온 타입(Union Type)에 대한 설명으로 올바른 것은?',
          options: [
            '두 타입의 교집합을 나타낸다',
            '두 타입 중 하나가 될 수 있는 값을 나타낸다',
            '두 타입을 하나로 결합한 새로운 타입을 만든다',
            '객체의 모든 속성을 선택적으로 만든다',
          ],
          correctAnswer: 1,
          explanation:
            '유니온 타입(|)은 여러 타입 중 하나가 될 수 있는 값을 표현하는 방법입니다.',
        },
      ],
    },
    {
      title: '인터페이스와 타입 별칭',
      description: '인터페이스와 타입 별칭의 차이점과 특징을 확인합니다.',
      questions: [
        {
          id: 5,
          question:
            '인터페이스(interface)와 타입 별칭(type alias)의 차이점으로 올바른 것은?',
          options: [
            '인터페이스는 객체 타입만 정의할 수 있다',
            '타입 별칭은 extends를 사용할 수 없다',
            '인터페이스는 유니온 타입을 정의할 수 없다',
            '타입 별칭은 객체 타입을 정의할 수 없다',
          ],
          correctAnswer: 0,
          explanation:
            '인터페이스는 객체의 구조를 정의하는 데 특화되어 있으며, 원시 타입의 별칭을 만들 수 없습니다.',
        },
        {
          id: 6,
          question:
            '다음 중 타입 단언(Type Assertion)에 대한 설명으로 올바른 것은?',
          options: [
            '런타임에 타입을 강제로 변환한다',
            '컴파일 시점에만 타입을 지정한다',
            '타입 검사를 완전히 우회한다',
            '모든 타입으로의 변환을 허용한다',
          ],
          correctAnswer: 1,
          explanation:
            '타입 단언은 컴파일 시점에만 영향을 미치며, 런타임에는 어떠한 타입 검사나 변환도 수행하지 않습니다.',
        },
      ],
    },
  ],
};
