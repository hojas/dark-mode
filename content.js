(function() {
  // 暗黑模式状态
  let isDarkMode = false
  // 初始化标志
  let isInitialized = false

  // 创建样式元素
  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)

  // 模拟颜色方案切换
  function simulateColorScheme(darkMode) {
    // 如果状态没有变化且已初始化，则不做任何操作
    if (isDarkMode === darkMode && isInitialized) return
    
    isDarkMode = darkMode
    isInitialized = true
    
    // 定义暗黑模式的 CSS 滤镜
    const filterValue = 'invert(90%) hue-rotate(180deg) brightness(110%) contrast(90%)'
    // 更新样式内容
    styleElement.textContent = `
      @media (prefers-color-scheme: dark), (prefers-color-scheme: light) {
        html { filter: ${isDarkMode ? filterValue : 'none'} !important }
        img, video, canvas { filter: ${isDarkMode ? 'invert(100%) hue-rotate(180deg)' : 'none'} !important }
      }
    `

    // 模拟 prefers-color-scheme 媒体查询
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    Object.defineProperty(mediaQueryList, 'matches', { value: isDarkMode, configurable: true })
    mediaQueryList.dispatchEvent(new Event('change'))

    // 更新文档根元素的 color-scheme
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light'
  }

  // 切换颜色方案
  function toggleColorScheme() {
    simulateColorScheme(!isDarkMode)
    saveSettings()
  }

  // 保存设置到存储
  function saveSettings() {
    chrome.runtime.sendMessage({
      action: "updateStorage",
      url: window.location.hostname,
      isDarkMode: isDarkMode
    })
  }

  // 从存储加载设置
  function loadSettings() {
    chrome.storage.sync.get(window.location.hostname, function(result) {
      if (result[window.location.hostname] !== undefined) {
        simulateColorScheme(result[window.location.hostname])
      }
    })
  }

  // 初始加载设置
  loadSettings()

  // 监听来自 background 脚本的消息
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleDarkMode") {
      toggleColorScheme()
    }
  })
})()
