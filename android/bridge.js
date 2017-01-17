var androidBridge = null

function initAndroidWebView() {
    function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady',
                function() {
                    callback(WebViewJavascriptBridge)
                },
                false
            )
        }
    }
    try{
        return new Promise((resolve, reject) => {
            window.onerror = function(err) {
                reject && reject(err)
            }
            // alert('start initing android bridge')
            connectWebViewJavascriptBridge(function(bridge) {
                androidBridge = bridge
                console.log('android bridge inited')
                // alert('android bridge inited')
                resolve && resolve(androidBridge)
            })
        }) 
    }catch(err){
        alert(err)
        reject && reject(err)
    }

}


module.exports=function() {
    if (androidBridge) {
        console.log('android bridge cached')
        return Promise.resolve(androidBridge)
    } else {
        return initAndroidWebView()
    }
}
