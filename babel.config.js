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
            $store: './src/app/store',
            $modules: './src/app/modules',
            $ui: './src/app/packages/ui',
            $icons: './src/app/packages/ui/icons',
            $packages: './src/app/packages',
            $configs: './src/configs',
            $utils: './src/app/utils',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
