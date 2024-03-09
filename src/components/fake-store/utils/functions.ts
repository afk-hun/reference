export function makeFirstLetterUpperCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function splitText(text: string) {
  let splittedText: string[] = [];
  if (text.length > 200) {
    splittedText.push(text.slice(0, 200));
    splittedText.push(text.slice(200));
  } else {
    splittedText.push(text);
  }
  return splittedText;
}
