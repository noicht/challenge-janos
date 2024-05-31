import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { authRepo } from '../repositories/auth.repo.js';
import { JWT_SECRET, TIME_OUT } from '../config/constants.js'
// import { passworBcrypt } from './../utils'


export const loginUser = async (username ,password) => {

  let user = await authRepo.findByUsername(username);
  console.log(user)
  if (!user) {


    throw new Error('El user o pass son invalidos');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('El user o pass son invalidos');
  }
  const token = jwt.sign({ userId: user._id, user: user._doc }, JWT_SECRET, { expiresIn: TIME_OUT });
  return { ...user._doc , token };
};

export const registerUser = async (username,email ,password) => {
  
  
  let user = await authRepo.findByUsername(username);
  if (user) {
    throw new Error('El user se encuentra registrado');
  }

  let userEmail = await authRepo.findByMail(email)
  if (userEmail) {
    throw new Error('El email se encuentra en uso');
  }

  let hashedPassword = await bcrypt.hash(password,10)

  let userObj = {
    username,
    email,
    password: hashedPassword

  };

  let newUser = await authRepo.create(userObj);
  
  // const token = jwt.sign({ userId: user._id, user: user._doc }, JWT_SECRET, { expiresIn: TIME_OUT });
  return { ...newUser._doc  };
};