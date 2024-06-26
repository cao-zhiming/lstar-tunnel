const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = ""; // 初始化目标URL为空字符串

  // 检查是否存在query参数
  if (req.query.target) {
    target ="https://github.COM"; // 如果存在query参数，则将其赋值给target变量
  } else {
    // 如果不存在query参数，则设置默认的目标URL
    target = "https://github.com";
  }

  // 创建代理中间件
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 这里可以根据需要进行路径重写
    },
  })(req, res);
};
