export function titleCase(str) {
  return str.replaceAll('-', ' ')
            .replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}