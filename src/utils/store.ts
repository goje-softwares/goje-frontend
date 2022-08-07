export default class store {
  static has(key: string) {
    return localStorage.getItem(key);
  }

  static get(key: string) {
    return localStorage.getItem(key) ?? null;
  }

  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
