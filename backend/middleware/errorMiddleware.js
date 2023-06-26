// EXP : to handle the unhandled

// EXP : if page not found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

//EXP : if there's any unhandled error, give 500 instead of 200, if it's not 200 then give 500
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // EXP : if invalid object ID
    if(err.name === 'CastError' && err.kind == 'ObjectId') {
        message = `Resource not found`;
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'ERORZ' : err.stack,
    });
};

export { notFound, errorHandler };