import { Console } from "@woowacourse/mission-utils";
import { validation } from "./Validation.js";
import { MESSAGE } from "../constants/messages.js";

export const player = {
  input: async function () {
    try {
      const input = await Console.readLineAsync(MESSAGE.PLAYER.INPUT);
      validation.validatePlayerNumber(input);

      return input;
    } catch (error) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
  },
  selectReplayOrExit: async function () {
    const input = await Console.readLineAsync(
      MESSAGE.PLAYER.SELECT_REPLAY_OR_EXIT
    );
    validation.validateSelectReplayOrExit(input);

    if (input === "1") {
      return true;
    }
    if (input === "2") {
      return false;
    }
  },
};
