import { Quiz } from '@/types/quiz.type';

export const functionTypesQuiz: Quiz = {
  title: 'TypeScript 함수 타입 마스터하기',
  description: 'TypeScript의 다양한 함수 타입과 관련 개념들을 테스트합니다.',
  categories: [
    {
      title: '함수 타입 기본',
      description: '함수 타입 표현식과 호출 시그니처에 대한 이해',
      questions: [
        {
          id: 1,
          question: '다음 중 올바른 함수 타입 표현식은?',
          options: [
            '(string) => void',
            '(x: string) => void',
            'function(string): void',
            'string -> void',
          ],
          correctAnswer: 1,
          explanation:
            "함수 타입 표현식에서는 매개변수 이름을 반드시 포함해야 합니다. '(x: string) => void'는 string 타입의 매개변수 x를 받고 반환값이 없는 함수를 의미합니다. '(string) => void'는 'string'이라는 이름의 any 타입 매개변수를 의미하게 됩니다.",
        },
        {
          id: 2,
          question: '다음 중 호출 시그니처(Call Signature)의 올바른 사용 예는?',
          options: [
            'type Func = { (x: number): string }',
            'type Func = function(x: number): string',
            'type Func = (x: number) -> string',
            'type Func = x: number => string',
          ],
          correctAnswer: 0,
          explanation:
            "호출 시그니처는 객체 타입 문법을 사용하여 정의됩니다. 'type Func = { (x: number): string }'는 number를 받아 string을 반환하는 함수 타입을 올바르게 정의합니다.",
        },
      ],
    },
    {
      title: '제네릭 함수',
      description: '제네릭을 사용한 함수 정의와 제약 조건',
      questions: [
        {
          id: 3,
          question: '다음 중 제네릭 함수에 대한 설명으로 잘못된 것은?',
          options: [
            '타입 매개변수는 최소 두 번 이상 사용되어야 효과적입니다',
            '제네릭 타입은 항상 명시적으로 지정해야 합니다',
            'extends 키워드로 제약 조건을 걸 수 있습니다',
            '타입 추론을 통해 제네릭 타입이 자동으로 결정될 수 있습니다',
          ],
          correctAnswer: 1,
          explanation:
            '제네릭 타입은 TypeScript의 타입 추론을 통해 자동으로 결정될 수 있으며, 항상 명시적으로 지정할 필요는 없습니다. 실제로 대부분의 경우 타입 추론을 활용하는 것이 권장됩니다.',
        },
        {
          id: 4,
          question: '제네릭 제약 조건(Constraints)을 사용하는 주된 목적은?',
          options: [
            '함수의 성능을 향상시키기 위해',
            '특정 속성이나 메서드를 가진 타입만 허용하기 위해',
            '컴파일 시간을 줄이기 위해',
            '함수의 반환 타입을 제한하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            '제네릭 제약 조건은 extends 키워드를 사용하여 특정 속성이나 메서드를 가진 타입만 허용하도록 제한하는 데 사용됩니다. 예를 들어, T extends { length: number }는 length 속성을 가진 타입만 허용합니다.',
        },
      ],
    },
    {
      title: '특수 타입과 함수',
      description: 'void, never, unknown 등 특수 타입들의 이해',
      questions: [
        {
          id: 5,
          question: 'void 타입과 undefined 타입의 차이점으로 올바른 것은?',
          options: [
            'void는 undefined를 포함하는 상위 타입이다',
            'void는 함수가 아무것도 반환하지 않음을 나타내고, undefined는 구체적인 값이다',
            'void와 undefined는 동일한 타입이다',
            'void는 null을 포함하고, undefined는 포함하지 않는다',
          ],
          correctAnswer: 1,
          explanation:
            'void는 함수가 값을 반환하지 않음을 나타내는 타입이고, undefined는 실제 값인 undefined를 나타내는 구체적인 타입입니다. void를 반환 타입으로 가진 함수는 undefined나 다른 값을 반환할 수 있지만, 그 값은 무시됩니다.',
        },
        {
          id: 6,
          question: 'never 타입을 반환하는 함수의 특징은?',
          options: [
            '항상 undefined를 반환한다',
            '어떤 값이든 반환할 수 있다',
            '정상적으로 종료되지 않는다(예: 예외 발생 또는 무한 루프)',
            'void를 반환한다',
          ],
          correctAnswer: 2,
          explanation:
            'never 타입은 함수가 정상적으로 끝까지 실행되지 않음을 나타냅니다. 예를 들어, 항상 예외를 던지거나 무한 루프에 빠지는 함수의 반환 타입으로 사용됩니다.',
        },
      ],
    },
  ],
};
