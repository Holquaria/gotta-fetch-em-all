import { capitaliseFirstLetter } from "./capitalise";

const moveNameFormatting = (moveName) => {
    const splitArray = moveName.split("-");
    const formattedArray = splitArray.map((string) => {
      return capitaliseFirstLetter(string);
    });
    return formattedArray.join(' ')
  };

module.exports = { moveNameFormatting }