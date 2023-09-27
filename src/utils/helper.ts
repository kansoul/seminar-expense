export function getSavedState(key: string) {
  if (key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
  return [];
}

export function saveState(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
