import webpack from 'webpack';
import config from './webpack.config.babel';

const releaseConfig = Object.assign({}, config);

releaseConfig.devtool = 'none';
releaseConfig.plugins.push(
	new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
);

export default releaseConfig;
