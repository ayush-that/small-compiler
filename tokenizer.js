function tokenizer(input) {
  let current = 0;
  let tokens = [];
  let WHITESPACE = /\s/;
  let NUMBERS = /[0-9]/;
  let LETTERS = /[a-z]/;

  while (current < input.length) {
    let char = input[current];

    if (char == "(") {
      tokens.push({
        type: "paren",
        value: "(",
      });
      current++;
      continue;
    }

    if (char == ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }

    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    if (NUMBERS.test(char)) {
      let value = "";
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "number",
        value,
      });
      continue;
    }

    if (char == '"') {
      let value = "";
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];
      tokens.push({
        type: "string",
        value,
      });
      continue;
    }

    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "name",
        value,
      });
      continue;
    }
    throw new TypeError("Invalid Input: " + char);
  }
  return tokens;
}

export default tokenizer;
