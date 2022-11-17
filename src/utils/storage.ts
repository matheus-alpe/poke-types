export function set(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function get(key: string) {
  const value = window.localStorage.getItem(key) || ''
  return value && JSON.parse(value)
}
