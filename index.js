import calcMethod from 'ut-calc-platform-method'
import iosBridge from 'ios/bridge'
import androidBridge from 'android/bridge'

export default calcMethod({
	android:androidBridge,
	ios:iosBridge
})

