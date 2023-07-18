// как собирать проект
export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string    // до точки входа
  build: string    // до папки со сборкой
  html: string     // до index.html
  src: string      // путь до папки src для alias modules
}

export interface BuildEnv {
  mode: BuildMode,
  port: number
}

// опции для настройки самого сборщика
export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}