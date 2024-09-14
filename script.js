// 动态插入 NProgress 的样式
const style = document.createElement('style');
style.innerHTML = `
  /* 自定义进度条颜色 */
  #nprogress .bar {
    background: #00bfff !important;  /* 辅色 */
  }

  /* 进度条高度 */
  #nprogress .bar {
    height: 4px;
  }

  /* 进度环颜色 */
  #nprogress .spinner-icon {
    border-top-color: #00bfff; 
    border-left-color: #00bfff;
  }

  /* 添加平滑过渡效果 */
  #nprogress .bar {
    transition: all 0.5s ease;
  }
`;
document.head.appendChild(style);

// 动态引入 NProgress CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css';
document.head.appendChild(link);

// 动态加载 NProgress 脚本
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.js';
script.onload = function() {
  // 开始加载进度条
  NProgress.start();

  // 页面完全加载后停止进度条
  window.onload = function() {
    NProgress.done();
  };
};
document.body.appendChild(script);
