import { Random } from "@woowacourse/mission-utils";

export class Computer {
  #answer = [];
  #count = { ball: 0, strike: 0 };

  makeAnswer() {
    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  #compareAnswer(input) {
    this.#answer.map((answer, index) => {
      if (input.includes(answer)) {
        let key = "ball";
        if (index === input.indexOf(answer)) {
          key = "strike";
        }
        this.#count = { ...this.#count, [key]: this.#count[key] + 1 };
      }
    });
  }

  #initializeCount() {
    this.#count = { ...this.#count, strike: 0, ball: 0 };
  }

  #printResult() {
    const { strike, ball } = this.#count;
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return;
    }

    Console.print(
      `${ball > 0 ? `${ball}볼 ` : ""}${
        strike > 0 ? `${strike}스트라이크` : ""
      }`
    );

    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}
