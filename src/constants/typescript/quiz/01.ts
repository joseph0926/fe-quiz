import { Quiz } from '@/types/quiz.type';

export const typeScriptQuizOne: Quiz = {
  title: 'TypeScript 기초 퀴즈',
  description:
    'TypeScript의 기본 개념과 타입 시스템에 대한 이해도를 테스트합니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'TypeScript의 기본적인 특징과 JavaScript와의 차이점',
      questions: [
        {
          id: 1,
          question: 'TypeScript는 어떤 언어의 슈퍼셋인가요?',
          options: ['Java', 'JavaScript', 'Python', 'C++'],
          correctAnswer: 1,
          explanation:
            'TypeScript는 JavaScript의 슈퍼셋으로, JavaScript의 모든 기능을 포함하며 추가적인 타입 시스템을 제공합니다.',
        },
        {
          id: 2,
          question: 'TypeScript의 주요 장점이 아닌 것은?',
          options: [
            '컴파일 시점의 타입 검사',
            '런타임 성능 향상',
            '코드의 가독성 향상',
            '더 안전한 리팩토링',
          ],
          correctAnswer: 1,
          explanation:
            'TypeScript는 런타임 성능을 직접적으로 향상시키지 않습니다. 컴파일 후에는 일반 JavaScript로 변환되어 실행됩니다.',
        },
      ],
    },
    {
      title: '타입 시스템',
      description: 'TypeScript의 타입 시스템 이해',
      questions: [
        {
          id: 3,
          question: '다음 중 TypeScript의 기본 타입이 아닌 것은?',
          options: ['string', 'number', 'boolean', 'float'],
          correctAnswer: 3,
          explanation:
            'TypeScript에서 float는 별도의 타입이 아니며, 모든 부동소수점 숫자는 number 타입을 사용합니다.',
        },
        {
          id: 4,
          question: "TypeScript에서 'strict: true' 설정의 효과로 올바른 것은?",
          options: [
            '코드 실행 속도가 향상된다',
            '더 엄격한 타입 검사가 적용된다',
            '자동으로 코드를 최적화한다',
            '모든 타입 선언이 선택적이 된다',
          ],
          correctAnswer: 1,
          explanation:
            'strict 모드는 더 엄격한 타입 검사를 적용하여, 잠재적인 오류를 더 많이 찾아낼 수 있게 해줍니다.',
        },
      ],
    },
    {
      title: '컴파일러 설정',
      description: 'TypeScript 컴파일러 옵션과 설정',
      questions: [
        {
          id: 5,
          question: 'TypeScript 컴파일러를 전역으로 설치하는 명령어는?',
          options: [
            'npm install typescript',
            'npm install -g typescript',
            'npm install --save typescript',
            'npm install --dev typescript',
          ],
          correctAnswer: 1,
          explanation:
            'TypeScript 컴파일러를 전역으로 설치하기 위해서는 npm install -g typescript 명령어를 사용합니다.',
        },
        {
          id: 6,
          question: 'noImplicitAny 설정의 목적은?',
          options: [
            '모든 타입을 명시적으로 선언하도록 강제한다',
            'any 타입의 사용을 완전히 금지한다',
            '암시적 any 타입을 방지한다',
            'any 타입을 자동으로 변환한다',
          ],
          correctAnswer: 2,
          explanation:
            'noImplicitAny 설정은 타입이 명시되지 않아 암시적으로 any가 되는 것을 방지합니다.',
        },
      ],
    },
  ],
};
