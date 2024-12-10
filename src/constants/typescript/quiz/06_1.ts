import { Quiz } from '@/types/quiz.type';

export const genericsQuiz: Quiz = {
  title: 'TypeScript 제네릭 마스터하기',
  description: 'TypeScript의 제네릭 개념과 활용 방법을 테스트합니다.',
  categories: [
    {
      title: '제네릭 기본',
      description: '제네릭의 기본 개념과 문법',
      questions: [
        {
          id: 1,
          question:
            '다음 중 제네릭 함수의 올바른 호출 방법이 아닌 것은?\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}```',
          options: [
            "identity<string>('hello')",
            "identity('hello')",
            "identity<number>('hello')",
            'identity(42)',
          ],
          correctAnswer: 2,
          explanation:
            "제네릭 함수를 호출할 때는 명시적으로 타입을 지정하거나(<string>) 타입 추론을 사용할 수 있습니다. 그러나 명시적 타입과 전달된 값의 타입이 일치해야 합니다. identity<number>('hello')는 number 타입으로 선언했지만 string을 전달하여 타입 불일치 오류가 발생합니다.",
        },
        {
          id: 2,
          question: '제네릭의 주요 장점이 아닌 것은?',
          options: [
            '타입 안전성 보장',
            '코드 재사용성 향상',
            '런타임 성능 최적화',
            '컴파일 시점의 타입 체크',
          ],
          correctAnswer: 2,
          explanation:
            '제네릭은 주로 타입 안전성 보장, 코드 재사용성 향상, 컴파일 시점의 타입 체크를 제공합니다. 런타임 성능 최적화는 제네릭의 주요 목적이 아닙니다. 실제로 제네릭은 컴파일 시점에 타입 정보가 제거되어 런타임 성능에 직접적인 영향을 주지 않습니다.',
        },
      ],
    },
    {
      title: '제네릭 제약조건',
      description: '제네릭 타입 제약의 이해와 활용',
      questions: [
        {
          id: 3,
          question:
            "다음 코드의 출력으로 올바른 것은?\n```typescript\nfunction getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {\n  return obj[key];\n}\nconst obj = { a: 1, b: 'hello' };\nconst value = getProperty(obj, 'c');```",
          options: [
            'undefined',
            '컴파일 에러 발생',
            '런타임 에러 발생',
            'null',
          ],
          correctAnswer: 1,
          explanation:
            "getProperty 함수는 Key extends keyof Type 제약조건을 사용하여 obj의 실제 키만 허용합니다. 'c'는 obj의 키가 아니므로 컴파일 시점에 에러가 발생합니다. 이는 제네릭 제약조건이 타입 안전성을 보장하는 좋은 예시입니다.",
        },
        {
          id: 4,
          question: '제네릭 제약조건을 사용할 때 다음 중 올바른 것은?',
          options: [
            '제약조건은 런타임에 검사된다',
            'extends 키워드는 항상 클래스만 제약조건으로 사용할 수 있다',
            '여러 개의 제약조건을 동시에 적용할 수 있다',
            '제약조건이 있는 타입 매개변수는 기본값을 가질 수 없다',
          ],
          correctAnswer: 2,
          explanation:
            '제네릭 제약조건은 여러 개를 동시에 적용할 수 있습니다. 예를 들어, <T extends A & B>와 같이 사용할 수 있습니다. 제약조건은 컴파일 시점에 검사되며, 인터페이스나 타입 별칭도 제약조건으로 사용할 수 있고, 제약조건이 있는 타입 매개변수도 기본값을 가질 수 있습니다.',
        },
      ],
    },
    {
      title: '고급 제네릭 패턴',
      description: '제네릭의 고급 사용법과 패턴',
      questions: [
        {
          id: 5,
          question: '다음 중 제네릭 클래스에 대한 설명으로 올바르지 않은 것은?',
          options: [
            '정적 멤버는 클래스의 타입 매개변수를 사용할 수 있다',
            '인스턴스 멤버는 클래스의 타입 매개변수를 사용할 수 있다',
            '생성자는 클래스의 타입 매개변수를 사용할 수 있다',
            '제네릭 클래스는 인터페이스를 구현할 수 있다',
          ],
          correctAnswer: 0,
          explanation:
            '제네릭 클래스의 정적 멤버는 클래스의 타입 매개변수를 사용할 수 없습니다. 이는 정적 멤버가 클래스의 인스턴스가 아닌 클래스 자체에 속하기 때문입니다. 타입 매개변수는 인스턴스가 생성될 때 결정되므로 인스턴스 멤버에서만 사용할 수 있습니다.',
        },
        {
          id: 6,
          question:
            '제네릭 타입 매개변수의 기본값에 대한 설명으로 올바른 것은?',
          options: [
            '모든 타입 매개변수는 기본값을 가져야 한다',
            '기본값이 없는 타입 매개변수는 기본값이 있는 타입 매개변수 뒤에 올 수 없다',
            '기본값은 다른 타입 매개변수를 참조할 수 없다',
            '기본값은 런타임에 결정된다',
          ],
          correctAnswer: 1,
          explanation:
            '제네릭 타입 매개변수의 기본값 규칙에서, 기본값이 있는 타입 매개변수는 선택적이 되며, 필수 타입 매개변수(기본값이 없는)는 선택적 매개변수(기본값이 있는) 뒤에 올 수 없습니다. 이는 함수 매개변수의 필수/선택적 매개변수 규칙과 유사합니다.',
        },
      ],
    },
  ],
};
