import { CodeQuizType } from '@/types/quiz.type';

export const templateLiteralQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '템플릿 리터럴과 유니온 타입',
    description:
      '템플릿 리터럴 타입과 유니온 타입의 조합이 어떻게 동작하는지 예측해보세요.',
    code: `type Color = "red" | "blue";
type Quantity = "one" | "two";
type Animal = "fish" | "bird";

type CreatureNames = \`\${Quantity}-\${Color}-\${Animal}\`;
type ColoredAnimals = \`\${Color}-\${Animal}\`;

// 다음 타입 검사의 결과는?
type Test1 = "one-red-fish" extends CreatureNames ? true : false;
type Test2 = "blue-bird" extends CreatureNames ? true : false;
type Test3 = "blue-bird" extends ColoredAnimals ? true : false;
type Test4 = "red-cat" extends ColoredAnimals ? true : false;

// CreatureNames는 몇 개의 가능한 조합을 가지고 있을까요?`,
    answer:
      'Test1은 true, Test2는 false, Test3은 true, Test4는 false입니다. CreatureNames는 총 8개(2×2×2)의 조합을 가집니다. CreatureNames는 모든 부분을 포함해야 하지만, ColoredAnimals는 Color와 Animal만 조합합니다.',
    hint: '템플릿 리터럴과 유니온 타입을 조합하면 가능한 모든 조합이 생성됩니다. 전체 조합의 수는 각 유니온 타입의 멤버 수를 곱한 것과 같습니다.',
  },
  {
    id: 2,
    title: '내장 문자열 조작 타입 활용',
    description:
      'TypeScript의 내장 문자열 조작 유틸리티 타입들의 동작을 이해해보세요.',
    code: `type EventConfig = {
  mousedown: { x: number; y: number };
  mouseup: { x: number; y: number };
};

type EventHandlerName<T extends string> = \`on\${Capitalize<T>}\`;
type HandlerConfig = {
  [K in keyof EventConfig as EventHandlerName<K>]: 
    (event: EventConfig[K]) => void;
};

// 다음 객체는 HandlerConfig 타입에 할당 가능할까요?
const handlers = {
  onMousedown: (e: { x: number; y: number }) => {},
  onMouseup: (e: { x: number; y: number }) => {},
  onmousedown: (e: { x: number; y: number }) => {},
  MouseUp: (e: { x: number; y: number }) => {}
};`,
    answer:
      "첫 두 프로퍼티(onMousedown과 onMouseup)만 올바른 형식입니다. HandlerConfig 타입은 이벤트 이름을 Capitalize하고 'on'을 접두사로 추가하므로, 'onMousedown'과 'onMouseup' 형태만 허용됩니다. onmousedown(소문자 m)과 MouseUp(on 접두사 없음)은 타입 에러가 발생합니다.",
    hint: 'Capitalize 유틸리티는 문자열의 첫 글자만 대문자로 변환합니다. 템플릿 리터럴과 조합하면 일관된 이름 규칙을 강제할 수 있습니다.',
  },
  {
    id: 3,
    title: '중첩된 템플릿 리터럴',
    description:
      '여러 단계의 템플릿 리터럴 타입이 어떻게 조합되는지 살펴보세요.',
    code: `type Size = "small" | "medium" | "large";
type Position = "top" | "bottom";
type Direction = "left" | "right";

type BoxPosition = \`\${Size}-\${Position}\${Capitalize<Direction>}\`;
type StyleClass = \`box-\${BoxPosition}\`;

// 다음 문자열들의 타입 체크 결과는?
const test1: StyleClass = "box-small-topLeft";
const test2: StyleClass = "box-medium-bottomright";
const test3: StyleClass = "box-large-TopRight";
const test4: StyleClass = "box-small-left";
const test5: BoxPosition = "small-topLeft";

// BoxPosition과 StyleClass는 각각 몇 개의 가능한 값을 가질까요?`,
    answer:
      'test1은 정상, test2는 에러(right가 대문자여야 함), test3는 에러(Top이 소문자여야 함), test4는 에러(위치 지정 누락), test5는 정상입니다. BoxPosition은 12개(3×2×2), StyleClass도 12개의 가능한 값을 가집니다.',
    hint: '중첩된 템플릿 리터럴을 사용할 때는 모든 부분이 정확히 지정된 형식을 따라야 합니다. Capitalize는 해당 부분에만 영향을 미칩니다.',
  },
  {
    id: 4,
    title: 'API 경로 생성',
    description:
      '템플릿 리터럴 타입을 사용하여 타입 안전한 API 경로를 생성하는 방법을 이해해보세요.',
    code: `type Version = "v1" | "v2";
type Resource = "users" | "posts" | "comments";
type Action = "get" | "create" | "update" | "delete";

type APIPath = \`/api/\${Version}/\${Resource}\`;
type EndpointPath = \`\${Uppercase<Action>} \${APIPath}\`;

// API 클라이언트 구현
interface APIClient {
  request(path: EndpointPath): Promise<unknown>;
}

// 다음 호출들은 유효할까요?
declare const client: APIClient;

client.request("GET /api/v1/users");
client.request("CREATE /api/v2/posts");
client.request("get /api/v1/comments");
client.request("DELETE /api/v3/users");
client.request("UPDATE /api/v2/posts/123");`,
    answer:
      "첫 두 호출만 유효합니다. 'get'은 대문자여야 하고, 'v3'는 유효한 Version이 아니며, 마지막 경로는 추가적인 세그먼트를 포함하고 있어서 정의된 형식과 맞지 않습니다.",
    hint: '템플릿 리터럴 타입은 정확한 문자열 패턴을 강제합니다. Uppercase 유틸리티와 조합하면 일관된 형식을 보장할 수 있습니다.',
  },
];
