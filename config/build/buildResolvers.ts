import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'


export function buildResolvers(options: BuildOptions): ResolveOptions {
  return { 
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true, // абсолютные пути в приоритете
    modules: [ options.paths.src, 'node_modules' ], // обращаться через абс. импорт
    mainFiles: ['index'], // какой главный файл в каталоге
    alias: {}  // можно обращаться в src без @
  }
}