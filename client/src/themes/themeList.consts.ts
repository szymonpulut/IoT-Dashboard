export const THEME_LIST = { DARK: 'DARK', LIGHT: 'LIGHT' } as const

export type ThemeList = keyof typeof THEME_LIST
