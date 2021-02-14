function data() {
  return [1, , 3, 4, 5];
}

const [first, second = 2, third, ...rest] = data();

console.log({ first }, { second }, { third }, { rest });
