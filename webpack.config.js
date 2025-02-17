const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/bundle/main_bundle.js',
        about: './src/bundle/About_Us_bundle.js',
        business: './src/bundle/Business_bundle.js',
        contact: './src/bundle/Contact_US_bundle.js',
        projects: './src/bundle/Project_and_Achievements_bundle.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
};

//[name] 이거써야 동적으로 이름이 생성이된다.