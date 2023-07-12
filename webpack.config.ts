import path from 'path'

// типизация
import webpack from 'webpack'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'


export default (env: BuildEnv) => {
  // список путей для передачи в buildWebpackConfig
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode = env.mode ?? 'development';
  const PORT = env.port ?? 3000;
  const isDev = mode === 'development';

  // сама переменная с конфигом
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths, // это переменная, объявленная выше
    isDev,
    port: PORT
  });
  return config
};