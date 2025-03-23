// 예시 문제 1

function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

// 아래에 주어진 케이스에 대응할 수 있도록 `add` 함수를 작성해주세요.
// 주어진 두 가지 케이스 외에는 대응하지 않아도 됩니다.
const six = add(1)(2)(3);
const ten = add(2)(3)(5);

console.log(six); // 6
console.log(ten); // 10
