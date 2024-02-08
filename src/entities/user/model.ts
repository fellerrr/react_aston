export function getCurrentUser(): string | null {
  return localStorage.getItem('currentUser')
}
