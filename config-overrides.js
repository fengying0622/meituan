/**
 * Created by Administrator on 2018/1/22.
 */
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config) {
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        style: 'css'
    }], config);
    return config;
};