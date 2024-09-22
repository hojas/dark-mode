// 监听扩展图标点击事件
chrome.action.onClicked.addListener(function(tab) {
  // 向当前标签页发送切换暗黑模式的消息
  chrome.tabs.sendMessage(tab.id, {action: "toggleDarkMode"})
})

// 监听来自 content script 的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "updateStorage") {
    // 更新存储中的设置
    chrome.storage.sync.set({[request.url]: request.isDarkMode}, function() {
      console.log('设置已保存')
    })
  }
})
