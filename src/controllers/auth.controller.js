import { loginUser, registerUser } from "../services/auth.service.js";
import { catchError } from "../utils/index.js";


export const registerController = async (req, res) => {
    try {
      const { username,email ,password } = req.body;
      const auth = await registerUser( username, email,password);
      return res.json({ status: true, data: auth });
    } catch (error) {
      return catchError(res, error.message);
    }
  };

export const loginController = async (req, res) => {
  try {
    const { username ,password } = req.body;
    const auth = await loginUser(username, password);
    return res.json({ status: true, data: auth });
  } catch (error) {
    return catchError(res, error.message);
  }
};