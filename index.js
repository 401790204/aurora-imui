import {
	NativeModules,
	Platform,
	DeviceEventEmitter
} from 'react-native';

import ChatInput from './ReactNative/chatinput';
import MessageList from './ReactNative/messagelist';
import AndroidPtrLayout from './ReactNative/ptrlayout';

const AuroraIMUIModule = NativeModules.AuroraIMUIModule;

const listeners = {};
const IMUIMessageListDidLoad = "IMUIMessageListDidLoad";

class AuroraIMUIController {
	/**
	 * append messages into messageList's bottom
	 * 
	 * @param {Array} messageList  [message]
	 */
	static appendMessages(messageList) {
		AuroraIMUIModule.appendMessages(messageList)
	}

	/**
	 * update Messages. NOTE: It will replace message according to msgID.
	 * @param {Array} messageList  [message]
	 */
	static updateMessage(messageList) {
		AuroraIMUIModule.updateMessage(messageList)
	}

	/**
	 * remove message from messageList
	 * @param {String} messageId
	 */
	static removeMessage(messageId) {
		AuroraIMUIModule.removeMessage(messageId)
	}

	/**
	 * insert messages into messageList's top
	 * @param {Array} messageList  [message]
	 */
	static insertMessagesToTop(messageList) {
		AuroraIMUIModule.insertMessagesToTop(messageList)
	}

 	/**
	 * remove message from messageList
	 * @param {String} messageId
	 */
	static removeMessage(messageId) {
		AuroraIMUIModule.removeMessage(messageId)
	}

 	/**
	 * stop play voice 
     */
	static stopPlayVoice() {
		AuroraIMUIModule.stopPlayVoice()
	}
	
	/**
	 * scroll messageList to bottom
	 * @param {Boolean} animate 
	 */
	static scrollToBottom(animate) {
		AuroraIMUIModule.scrollToBottom(animate)
	}

	/**
	 * hiden featureView
	 * @param {Boolean} animate 
	 */
	static hidenFeatureView(animate) {
		AuroraIMUIModule.hidenFeatureView(animate)
	}

	/**
	 * stop play voice 
	 */
	static stopPlayVoice() {
		AuroraIMUIModule.stopPlayVoice()
	}

	/**
	 * add listener: messageList did Loaded will call cb
	 * @param {Function} cb 
	 */
	static addMessageListDidLoadListener(cb) {
		listeners[cb] = DeviceEventEmitter.addListener(IMUIMessageListDidLoad,
			() => {
				cb();
			});
	}

	/**
	 * remove listener:
	 * @param {Function} cb 
	 */
	static removeMessageListDidLoadListener(cb) {
		if (!listeners[cb]) {
			return;
		}
		listeners[cb].remove();
		listeners[cb] = null;
	}
}

module.exports = {
	ChatInput: ChatInput,
	MessageList: MessageList,
	AndroidPtrLayout: AndroidPtrLayout,
	AuroraIMUIController: AuroraIMUIController
};