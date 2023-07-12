import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// типы
import webpack from 'webpack'
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            // если в названии есть .module. - обрабатывай как модуль
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // если это не-модуль - оставь его название как есть
            // local - это хэш
            // если это не дев сборка - оставить только хэш 8 символов
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      // "css-loader",
      "sass-loader",
    ],
  };

  return [ typescriptLoader, cssLoader ]
}
