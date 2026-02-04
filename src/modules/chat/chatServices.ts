import { getChatHistory, sendChatMessage } from "../../services/chatApi";

export default class chatServices {
  static async sendChatMessageService(params: string) {
    const response = await sendChatMessage(params);
    return response;
  }

  static async getChatHistoryService() {
    const response = await getChatHistory();
    return response;
  }
}
