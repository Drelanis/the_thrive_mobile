module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      [
        'module-resolver',
        {
          alias: {
            $app: './src/app',
            $layout: './src/app/layout',
            $modules: './src/app/modules',
            $packages: './src/app/packages/ui',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
