
module.exports = {
  devServer: {
    host: "localhost",
    port: "8082",
    open: true,
    proxy: 'http://127.0.0.1:8081'
  }
}


