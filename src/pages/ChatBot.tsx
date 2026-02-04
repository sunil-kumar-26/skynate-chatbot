import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Drawer, Menu } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import chatServices from "../modules/chat/chatServices";
import ReactMarkdown from "react-markdown";
import { ArrowUpOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { SideBarBottomItems, SideBarTopItems } from "../data/sidebarPropsData";
import { useOutletContext } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}
interface ContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ChatBot = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/auth/login" />;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { isDarkTheme, toggleTheme } = useOutletContext<ContextType>();
  const nevigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const res = await chatServices.getChatHistoryService();
        if (res.data?.messages) {
          setMessages(res.data.messages);
        }
      } catch (err) {
        console.error("Failed to load chat history");
      }
    };
    loadChatHistory();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await chatServices.sendChatMessageService(userMsg.content);
      const aiMsg: Message = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Server error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = (key: string | object) => {
    if (key === "theme") {
      toggleTheme();
    }
    if (key === "home") {
      nevigate("/");
    }
    if (key === "setting") {
    }
    if (key === "logout") {
      localStorage.removeItem("token");
      nevigate("/");
    }
  };

  return (
    <Wrapper>
      <ChatHeader>
        Skynate
        <MenuFoldOutlined
          onClick={() => setIsOpen(!isOpen)}
          className="dashOutLined"
        />
      </ChatHeader>
      {
        <Drawer
          closable={{ "aria-label": "Close Button" }}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Menu
            mode="inline"
            theme={isDarkTheme ? "dark" : "light"}
            items={SideBarTopItems}
            onClick={(value) => handleLogOut(value.key)}
            className="menu"
          />
          <Menu
            mode="inline"
            theme={isDarkTheme ? "dark" : "light"}
            items={SideBarBottomItems}
            onClick={(value) => handleLogOut(value.key)}
            className="menu"
          />
        </Drawer>
      }
      <MessagesArea>
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role}>
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </MessageBubble>
        ))}
        <div ref={messagesEndRef} />
      </MessagesArea>

      <InputArea>
        <Input
          value={input}
          className="input-element"
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={sendMessage}
          placeholder="Ask something..."
        />
        <Button
          type="primary"
          onClick={sendMessage}
          shape="round"
          loading={loading}
        >
          <ArrowUpOutlined />
        </Button>
      </InputArea>
    </Wrapper>
  );
};

export default ChatBot;

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.chatgptBackground};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  padding: 16px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.chatgptHeaderBorder};
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 769px) {
    .dashOutLined {
      display: none;
    }
  }
`;

const MessagesArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  @media (min-width: 1024px) {
    padding-left: calc((100vw - 900px) / 2);
    padding-right: calc((100vw - 900px) / 2);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.chatgptHeaderBorder};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
  }
`;

const MessageBubble = styled.div<{ role: string }>`
  // max-width: ${(p) => (p.role === "user" ? "20%" : "100%")};
  color: ${(p) =>
    p.role === "user"
      ? (props) => props.theme.title
      : (props) => props.theme.title};
  padding: 4px 12px;
  border-radius: 12px;
  line-height: 1.4;
  align-self: ${(p) => (p.role === "user" ? "" : "start")};
  background: ${(p) =>
    p.role === "user"
      ? (props) => props.theme.chatgptInputBackground
      : (props) => props.theme.chatgptBackground};
  white-space: pre-wrap;

  pre {
    max-width: 100%;
    overflow-x: auto;
    background: #1e1e1e;
    color: #fff;
    padding: 12px;
    border-radius: 8px;
    font-size: 13px;
  }

  code {
    white-space: pre-wrap;
    word-break: break-word;
  }

  img {
    max-width: 60%;
    height: auto;
    border-radius: 12px;
    display: block;
  }

  @media (max-width: 767px) {
    max-width: ${(p) => (p.role === "user" ? "80%" : "")};
  }
`;

const InputArea = styled.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  margin-bottom: 18px;
  width: 60%;
  background: ${(props) => props.theme.chatgptInputBackground} !important;
  border-radius: 25px;
  .input-element {
    background: ${(props) => props.theme.chatgptInputBackground} !important;
    color: ${(props) => props.theme.title} !important;
    border: 1px solid ${(props) => props.theme.chatgptInputBackground} !important;
    border-radius: 18px;
    font-weight: 600;
  }
  .ant-input::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 1;
    font-weight: 600;
  }
  .ant-input:focus,
  .ant-input-focused,
  .ant-input:hover {
    border-color: transparent !important;
    box-shadow: none !important;
    outline: none;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;
