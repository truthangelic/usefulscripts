// 自动滚动：每隔 1-5 秒向下滚动半屏
// 停止方法：关闭标签页，或运行 clearTimeout(window._autoScrollTimer)

(function() {
  function scrollHalf() {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    // 滚到底就停
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
      console.log('已滚动到底部，自动滚动停止。');
      return;
    }
    window._autoScrollTimer = setTimeout(scrollHalf, 1000 + Math.random() * 4000);
  }
  scrollHalf();
  console.log('自动滚动已启动。');
})();
