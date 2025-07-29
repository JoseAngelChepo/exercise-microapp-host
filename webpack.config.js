const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path')

module.exports = {
  entry: './src/main.jsx',
  mode: 'development',
  devServer: {
    port: 3000,
    static: './dist',
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_shell',
      remotes: {
        app_products: 'app_products@http://localhost:3001/remoteEntry.js',
        user_angel: `promise new Promise(resolve => {
            fetch("http://localhost:8080/remote.manifest.json")
              .then(res => res.json())
              .then(remotes => {
                const remoteUrl = remotes.user_angel.split("@")[1];
                const remoteGlobal = remotes.user_angel.split("@")[0];
                const script = document.createElement("script");
                script.src = remoteUrl
                script.onload = () => {
                  const proxy = {
                    get: (request) => window[remoteGlobal].get(request),
                    init: (arg) => {
                      try {
                        return window[remoteGlobal].init(arg);
                      } catch (error) {
                        console.log("remote already initialized");
                      }
                    }
                  }
                  resolve(proxy);
                };
                document.head.appendChild(script);
              })
          })
        `,
        user_gabriel: `promise new Promise(resolve => {
            fetch("http://localhost:8080/remote.manifest.json")
              .then(res => res.json())
              .then(remotes => {
                const remoteUrl = remotes.user_gabriel.split("@")[1];
                const remoteGlobal = remotes.user_gabriel.split("@")[0];
                const script = document.createElement("script");
                script.src = remoteUrl
                script.onload = () => {
                  const proxy = {
                    get: (request) => window[remoteGlobal].get(request),
                    init: (arg) => {
                      try {
                        return window[remoteGlobal].init(arg);
                      } catch (error) {
                        console.log("remote already initialized");
                      }
                    }
                  }
                  resolve(proxy);
                };
                document.head.appendChild(script);
              })
          })
        `,
        appAida: `promise new Promise(resolve => {
            fetch("http://localhost:8080/remote.manifest.json")
              .then(res => res.json())
              .then(remotes => {
                const remoteUrl = remotes.appAida.split("@")[1];
                const remoteGlobal = remotes.appAida.split("@")[0];
                const script = document.createElement("script");
                script.src = remoteUrl
                script.onload = () => {
                  const proxy = {
                    get: (request) => window[remoteGlobal].get(request),
                    init: (arg) => {
                      try {
                        return window[remoteGlobal].init(arg);
                      } catch (error) {
                        console.log("remote already initialized");
                      }
                    }
                  }
                  resolve(proxy);
                };
                document.head.appendChild(script);
              })
          })
        `,
        user_jordan: `promise new Promise(resolve => {
            fetch("http://localhost:8080/remote.manifest.json")
              .then(res => res.json())
              .then(remotes => {
                const remoteUrl = remotes.user_jordan.split("@")[1];
                const remoteGlobal = remotes.user_jordan.split("@")[0];
                const script = document.createElement("script");
                script.src = remoteUrl
                script.onload = () => {
                  const proxy = {
                    get: (request) => window[remoteGlobal].get(request),
                    init: (arg) => {
                      try {
                        return window[remoteGlobal].init(arg);
                      } catch (error) {
                        console.log("remote already initialized");
                      }
                    }
                  }
                  resolve(proxy);
                };
                document.head.appendChild(script);
              })
          })
        `,
        user_luis: `promise new Promise(resolve => {
            fetch("http://localhost:8080/remote.manifest.json")
              .then(res => res.json())
              .then(remotes => {
                const remoteUrl = remotes.user_luis.split("@")[1];
                const remoteGlobal = remotes.user_luis.split("@")[0];
                const script = document.createElement("script");
                script.src = remoteUrl
                script.onload = () => {
                  const proxy = {
                    get: (request) => window[remoteGlobal].get(request),
                    init: (arg) => {
                      try {
                        return window[remoteGlobal].init(arg);
                      } catch (error) {
                        console.log("remote already initialized");
                      }
                    }
                  }
                  resolve(proxy);
                };
                document.head.appendChild(script);
              })
          })
        `,
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.1' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.1' },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};