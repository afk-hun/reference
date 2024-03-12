export function makeFirstLetterUpperCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function splitText(text: string) {
  const characterNumber = 100;
  let splittedText: string[] = [];
  if (text.length > characterNumber) {
    splittedText.push(text.slice(0, characterNumber));
    splittedText.push(text.slice(characterNumber));
  } else {
    splittedText.push(text);
  }
  return splittedText;
}
