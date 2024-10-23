//複製IP
function copyIP() {
    var copyText = document.getElementById("serverIP").textContent;
    navigator.clipboard.writeText(copyText).then(function() {
        const tooltip = document.createElement('div');
        tooltip.textContent = "IP 已複製到剪貼簿: " + copyText;
        tooltip.style.position = 'fixed';
        tooltip.style.bottom = '10px';
        tooltip.style.right = '10px';
        tooltip.style.backgroundColor = '#4CAF50';
        tooltip.style.color = 'white';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);

        setTimeout(() => tooltip.remove(), 3000);
    }, function(err) {
        console.error('複製失敗', err);
    });
}
