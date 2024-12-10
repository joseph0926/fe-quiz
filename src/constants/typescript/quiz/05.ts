import { Quiz } from '@/types/quiz.type';

export const objectTypesQuiz: Quiz = {
  title: 'TypeScript 객체 타입 마스터하기',
  description: 'TypeScript의 객체 타입과 관련된 다양한 개념들을 테스트합니다.',
  categories: [
    {
      title: '객체 타입 기본',
      description: '객체 타입의 기본 개념과 선언 방법',
      questions: [
        {
          id: 1,
          question:
            '다음 중 TypeScript에서 객체 타입을 정의하는 올바른 방법이 아닌 것은?',
          options: [
            'interface Person { name: string; age: number; }',
            'type Person = { name: string; age: number; }',
            'class Person { name: string; age: number; }',
            'let Person = function(name: string, age: number) {}',
          ],
          correctAnswer: 3,
          explanation:
            'TypeScript에서 객체 타입을 정의하는 주요 방법은 interface, type alias, 그리고 class입니다. 함수 표현식은 객체 타입을 정의하는 방법이 아닌, 함수를 정의하는 방법입니다.',
        },
        {
          id: 2,
          question: 'readonly 수정자(modifier)에 대한 설명으로 올바른 것은?',
          options: [
            '객체의 모든 중첩된 프로퍼티를 불변으로 만든다',
            '프로퍼티의 재할당만 방지하고 객체의 내부 값은 변경 가능하다',
            '객체를 완전히 불변(immutable)하게 만든다',
            'readonly 프로퍼티는 생성자에서도 수정할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'readonly 수정자는 해당 프로퍼티의 재할당만을 방지합니다. 객체나 배열과 같은 참조 타입의 내부 값은 여전히 변경할 수 있습니다. 예를 들어, readonly resident: { name: string }의 경우 resident 자체는 재할당할 수 없지만 resident.name은 변경 가능합니다.',
        },
      ],
    },
    {
      title: '인터페이스와 타입 확장',
      description: '인터페이스 확장과 교차 타입의 이해',
      questions: [
        {
          id: 3,
          question:
            '인터페이스 확장(extends)과 교차 타입(&)의 차이점으로 올바른 것은?',
          options: [
            '교차 타입은 여러 타입을 동시에 확장할 수 없다',
            '인터페이스 확장은 오직 한 개의 인터페이스만 확장할 수 있다',
            '충돌하는 프로퍼티가 있을 때 인터페이스 확장은 컴파일 에러를 발생시키고, 교차 타입은 never 타입을 생성한다',
            '교차 타입은 새로운 프로퍼티를 추가할 수 없다',
          ],
          correctAnswer: 2,
          explanation:
            '충돌하는 프로퍼티 타입이 있을 때, 인터페이스 확장은 명시적인 컴파일 에러를 발생시키는 반면, 교차 타입은 충돌하는 프로퍼티를 never 타입으로 만듭니다. 이는 두 방식의 주요한 차이점 중 하나입니다.',
        },
        {
          id: 4,
          question: '인덱스 시그니처에 대한 설명으로 올바르지 않은 것은?',
          options: [
            '동적인 프로퍼티 이름을 다룰 수 있게 해준다',
            '인덱스 타입으로 boolean을 사용할 수 있다',
            'string과 number 타입의 인덱스를 동시에 사용할 수 있다',
            'readonly 수정자와 함께 사용할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            '인덱스 시그니처에서 사용할 수 있는 타입은 string, number, symbol, 템플릿 리터럴 타입, 또는 이들의 유니온 타입으로 제한됩니다. boolean은 인덱스 타입으로 사용할 수 없습니다.',
        },
      ],
    },
    {
      title: '튜플과 배열',
      description: '튜플 타입과 배열 타입의 특징',
      questions: [
        {
          id: 5,
          question: '튜플 타입의 특징으로 올바른 것은?',
          options: [
            '길이가 가변적이며 어떤 타입이든 포함할 수 있다',
            '각 위치마다 특정 타입이 지정되며 길이가 고정되어 있다',
            '항상 같은 타입의 요소만 포함할 수 있다',
            '인덱스 시그니처를 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            '튜플은 각 위치에 특정 타입이 지정된 고정 길이 배열입니다. 예를 들어 [string, number]는 첫 번째 요소가 string, 두 번째 요소가 number인 길이 2의 배열을 의미합니다. 선택적 요소나 나머지 요소를 사용하여 유연성을 추가할 수도 있습니다.',
        },
        {
          id: 6,
          question: 'readonly 배열과 관련하여 올바른 설명은?',
          options: [
            '요소를 추가하거나 제거할 수는 없지만 기존 요소의 값은 변경할 수 있다',
            '배열의 모든 메서드를 사용할 수 있다',
            '한번 생성된 후에는 어떤 방식으로도 수정할 수 없다',
            'slice()와 같은 비수정 메서드만 사용 가능하다',
          ],
          correctAnswer: 3,
          explanation:
            'readonly 배열(ReadonlyArray<T> 또는 readonly T[])은 배열을 수정하는 메서드(push, pop, splice 등)를 사용할 수 없으며, 인덱스를 통한 요소 수정도 불가능합니다. slice()와 같이 새로운 배열을 반환하는 메서드는 사용 가능합니다.',
        },
      ],
    },
  ],
};
