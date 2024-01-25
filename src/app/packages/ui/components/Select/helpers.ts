export const handleSelectedValues = (
  selectedValue?: string[] | string,
): string => {
  if (Array.isArray(selectedValue)) {
    if (selectedValue.length === 0) {
      return 'Not selected';
    }

    const inputText = selectedValue[0];
    const extraPickersValue = selectedValue.length - 1;

    const extraPickersString = `, +${extraPickersValue || ''}`;

    return `${inputText}${extraPickersValue ? extraPickersString : ''}`;
  }

  return `${selectedValue ? selectedValue : 'Not selected'}`;
};
