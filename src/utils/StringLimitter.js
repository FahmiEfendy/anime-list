const StringLimitter = (string, num) => {
  const maxLength = num || 400;

  if (string.length > maxLength) return string.substring(0, maxLength) + "...";
  return string;
};

export default StringLimitter;
