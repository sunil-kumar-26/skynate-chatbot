import {
  forgotPassword,
  login,
  resetPassword,
  signup,
  verifyEmail,
} from "../../services/authApi";

export default class authServices {
  static async signupService(payload: object) {
    const responseData = await signup(payload);
    return responseData;
  }
  static async loginService(payload: object) {
    const responseData = await login(payload);
    return responseData;
  }

  static async forgotPasswordService(payload: object) {
    try {
      const responseData = await forgotPassword(payload);
      return responseData;
    } catch (err) {
      console.error("Inspect error", err);
    }
  }
  static async resetPasswordService(payload: object) {
    try {
      const responseData = await resetPassword(payload);
      return responseData;
    } catch (err) {
      console.error("Inspect error", err);
    }
  }
  static async verifyEmailService(payload: object) {
    try {
      const responseData = await verifyEmail(payload);
      return responseData;
    } catch (err) {
      console.error("Verify email error", err);
    }
  }
}
