module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".json", "ts", "tsx"], 
          alias: {
            '@actions': './src/redux/actions',
            '@components': './src/components',
            '@intefaces': './src/intefaces',
            '@models': './src/models',
            '@redux': './src/redux',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
