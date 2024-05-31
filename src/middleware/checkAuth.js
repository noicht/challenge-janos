import jwt from "jsonwebtoken";
import { authRepo } from "../repositories/auth.repo.js";
import { JWT_SECRET } from "../config/constants.js";

export const checkAuth = () => {
  return async (req, res, next) => {

    const authHeader = req.get("Authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        status: false,
        error: { message: "INVALID TOKEN" },
      });
    }

    try {

      const decodedToken = jwt.verify(token, JWT_SECRET);

      // req.user=decodedToken.user

      // console.log(req.user)

      if (!decodedToken) {
        return res.status(401).send({
          status: false,
          error: { message: "INVALID TOKEN" },
        });
      }

      const userEmail = decodedToken.user.email;

      const validateUser = await authRepo.findByMail(userEmail);
      console.log(userEmail)

      if (!validateUser) {
        return res.status(401).send({
          status: false,
          error: { message: "INVALID TOKEN" },
        });
      }

      req.user = validateUser;
      next();
    } catch (err) {
      return res.status(401).send({
        status: false,
        error: { message: "INVALID TOKEN" },
      });
    }
  };
};
