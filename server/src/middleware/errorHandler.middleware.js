import { StatusCodes } from "http-status-codes";

export const errorHandler = (err, req, res, next) => {
  let errObj = {
    message: err.message || "Something Went Wrong, Please try Again later!",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  };

  res.status(errObj.statusCode).json({
    message: errObj.message,
    stack: errObj.stack,
  });
};
