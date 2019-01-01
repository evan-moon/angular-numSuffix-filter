const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

module.exports = function (input, decimals) {
  let exp;

  if (isNaN(input)) {
    return '';
  }
  if (input < 1000) {
    return input;
  }

  exp = Math.floor(Math.log(input) / Math.log(1000));
  return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
};