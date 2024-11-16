export const parseTextToMaxNumberOfLines = (description: string) => {
    const maxNumberOfLines = 3;
    const textArray = description.split('\n');
    const text = textArray.slice(0, maxNumberOfLines).join('\n');
    return text;
}