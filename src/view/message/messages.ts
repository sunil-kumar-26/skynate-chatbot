import { message } from "antd";

const messages = (data: object | any) => {
  if (data.response?.status === 401) {
    message.error(data.response.data.message);
  } 
  if (data.status === 201) {
    message.error(data.response.data.message);
  } 
  else message.success("loged in successfully");
};

export default messages;
