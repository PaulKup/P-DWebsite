export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/[\r\n\t]+/g, ' ')
}

export function clampLength(input: string, max: number): string {
  return input.length > max ? input.slice(0, max) : input
}
