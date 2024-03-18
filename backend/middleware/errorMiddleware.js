const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404); // 404 is not found
  next(error); // pass error to next middleware
};

const errorHandler = (err, req, res, next) => {
  // set to 500 if it is 200
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  let message = err.message;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
