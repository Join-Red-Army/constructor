// как собирать проект
export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  // до точки входа
  entry: string
  // до папки со сборкой
  build: string
  // до index.html 
  html: string
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