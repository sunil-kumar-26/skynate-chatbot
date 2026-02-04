import api from "./api";

export const sendChatMessage = (message: string) => {
  return api.post("/api/chat", { message });
};

export const getChatHistory = () => {
  return api.get("/api/chat/history");
};
