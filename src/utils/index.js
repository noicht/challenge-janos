import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'

export const catchError = (res, error, code = 500) => {
    return res.status(code).json({
      status: false,
      error: { message: error },
    });
  }