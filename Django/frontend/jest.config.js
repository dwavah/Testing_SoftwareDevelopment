module.exports = {
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)'  // Transform axios even if in node_modules
    ],
  };
  