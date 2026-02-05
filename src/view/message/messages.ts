import { message } from "antd";

const messages = (data: object | any) => {
  if (data.status === 401) {
    message.error(data.response.data.message);
  }
  if (data.status === 201) {
    message.success(data.data.message);
  }
  if (data.status === 200) {
    message.success(data.data.message);
  }
};

export default messages;
