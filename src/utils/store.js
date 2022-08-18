export default class store {
  static has(key) {
    return localStorage.getItem(key);
  }

  static get(key) {
    return localStorage.getItem(key) ?? "";
  }

  static set(key, value) {
    localStorage.setItem(key, value);
  }
}
