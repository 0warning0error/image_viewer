var isPermission = !!(chrome.localFile);
var imgTypeStr = '*.png,*.jpg,*.jpeg,*.webp,*.bmp,*.gif';

chrome.runtime.onMessage.addListener((message, sender, response) => {
	switch(message.cmd) {
		case 'list':
			var url = message.value;
			if (isPermission) {
				chrome.localFile.list(message.value, false, imgTypeStr, (result, idx, list) => {
					if (!result) {
						idx = -1;
						list = [];
					}
					chrome.tabs.sendMessage(sender.tab.id, {
						"cmd": "list",
						"idx": idx,
						"list": list
					});
				});
			}
			else {
				chrome.tabs.sendMessage(sender.tab.id, {
					"cmd": "list",
					"error": "没有权限操作"
				});
			}
			break;
		case 'base64':
			var url = message.value;
			if (isPermission) {
				chrome.localFile.read(message.value, (result, base64) => {
					chrome.tabs.sendMessage(sender.tab.id, {
						"cmd": "base64",
						"base64": base64,
						"error": result ? "" : "非法图片"
					});
				});
			}
			else {
				chrome.tabs.sendMessage(sender.tab.id, {
					"cmd": "base64",
					"error": "没有权限操作"
				});
			}
			break;
		case 'live':
			response(true);
			break;
		case 'report':
			console.log(window.external.dataReport)
			window.external.dataReport(8106, 120211, 0, message.status, 0, 0, '', '', '');
      break;
	}
})