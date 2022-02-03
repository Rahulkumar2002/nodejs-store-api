const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    return res.status(500).json({ msg: 'There an error occured......' })
}

module.exports = errorHandlerMiddleware