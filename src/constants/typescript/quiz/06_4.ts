import { Quiz } from '@/types/quiz.type';

export const templateLiteralQuiz: Quiz = {
  title: 'TypeScript 템플릿 리터럴 타입 마스터하기',
  description:
    'TypeScript의 템플릿 리터럴 타입과 문자열 조작 기능을 테스트합니다.',
  categories: [
    {
      title: '기본 템플릿 리터럴',
      description: '템플릿 리터럴 타입의 기본 개념과 유니온 타입과의 조합',
      questions: [
        {
          id: 1,
          question:
            "다음 코드의 결과 타입은?\n```typescript\ntype Color = 'red' | 'blue';\ntype Quantity = 'one' | 'two';\ntype SemanticColor = `${Quantity}-${Color}`;```",
          options: [
            "'one-red' | 'one-blue' | 'two-red' | 'two-blue'",
            "'one-red' | 'two-blue'",
            'string',
            '`${Quantity}-${Color}`',
          ],
          correctAnswer: 0,
          explanation:
            "템플릿 리터럴 타입에서 유니온 타입을 사용하면 모든 가능한 조합의 유니온이 생성됩니다. 이 경우 'one-red', 'one-blue', 'two-red', 'two-blue'의 네 가지 조합이 만들어집니다.",
        },
        {
          id: 2,
          question: '다음 중 템플릿 리터럴 타입의 특징이 아닌 것은?',
          options: [
            '런타임에 동적으로 문자열을 생성할 수 있다',
            '유니온 타입과 함께 사용할 수 있다',
            '타입 시스템에서 문자열을 조합할 수 있다',
            '컴파일 시점에 모든 가능한 문자열 조합을 생성한다',
          ],
          correctAnswer: 0,
          explanation:
            '템플릿 리터럴 타입은 타입 시스템의 일부로, 컴파일 시점에서만 작동합니다. 런타임에 동적으로 문자열을 생성하는 것은 JavaScript의 템플릿 리터럴 문자열의 기능입니다.',
        },
      ],
    },
    {
      title: '내장 문자열 조작 타입',
      description:
        'Uppercase, Lowercase, Capitalize, Uncapitalize 타입 유틸리티',
      questions: [
        {
          id: 3,
          question:
            "다음 타입의 결과는?\n```typescript\ntype Greeting = 'Hello World';\ntype Result = `${Uppercase<Greeting>}_${Lowercase<Greeting>}`;```",
          options: [
            "'HELLO WORLD_hello world'",
            "'Hello World_Hello World'",
            "'HELLO WORLD_Hello World'",
            "'Hello World_hello world'",
          ],
          correctAnswer: 0,
          explanation:
            "Uppercase는 문자열을 모두 대문자로, Lowercase는 문자열을 모두 소문자로 변환합니다. 두 결과를 언더스코어로 연결하므로, 결과는 'HELLO WORLD_hello world'가 됩니다.",
        },
        {
          id: 4,
          question: 'Capitalize와 Uncapitalize의 차이점으로 올바른 것은?',
          options: [
            'Capitalize는 모든 단어의 첫 글자를 대문자로 만든다',
            'Uncapitalize는 모든 문자를 소문자로 만든다',
            'Capitalize는 문자열의 첫 글자만 대문자로 만들고, Uncapitalize는 첫 글자만 소문자로 만든다',
            '둘 다 전체 문자열의 대소문자를 변환한다',
          ],
          correctAnswer: 2,
          explanation:
            'Capitalize는 문자열의 첫 글자만 대문자로 변환하고, Uncapitalize는 문자열의 첫 글자만 소문자로 변환합니다. 나머지 문자들은 원래의 대소문자를 유지합니다.',
        },
      ],
    },
    {
      title: '실용적 활용',
      description: '실제 개발 시나리오에서의 템플릿 리터럴 타입 활용',
      questions: [
        {
          id: 5,
          question:
            '다음 이벤트 핸들러 타입의 문제점은?\n```typescript\ntype PropEventSource<Type> = {\n  on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;\n};```',
          options: [
            'string & keyof Type가 잘못된 문법이다',
            '콜백 함수의 매개변수 타입이 너무 광범위하다',
            'eventName의 타입이 너무 제한적이다',
            'on 메서드의 반환 타입이 잘못되었다',
          ],
          correctAnswer: 1,
          explanation:
            '콜백 함수의 매개변수 타입이 any로 되어 있어 타입 안전성이 떨어집니다. 대신 Type[Key]를 사용하여 해당 프로퍼티의 실제 타입을 사용해야 합니다.',
        },
        {
          id: 6,
          question:
            "CSS 클래스 이름을 위한 다음 타입의 결과는?\n```typescript\ntype Direction = 'top' | 'bottom';\ntype Size = 'sm' | 'lg';\ntype Margin = `margin-${Direction}-${Size}`;```",
          options: [
            '4개의 가능한 조합',
            '2개의 가능한 조합',
            '6개의 가능한 조합',
            '무한한 조합',
          ],
          correctAnswer: 0,
          explanation:
            "Direction은 2개('top', 'bottom'), Size는 2개('sm', 'lg')의 값을 가지므로, 총 2 × 2 = 4개의 조합이 생성됩니다: 'margin-top-sm', 'margin-top-lg', 'margin-bottom-sm', 'margin-bottom-lg'",
        },
      ],
    },
  ],
};
