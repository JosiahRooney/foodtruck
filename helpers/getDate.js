module.exports = function getDate(string) {
  let d = new Date(string);
  return String(d).split(' ').slice(0, 4);
}