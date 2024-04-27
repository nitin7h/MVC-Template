function middlewareFunction(parameter) {
    return ((req, res, next) => {
        next()
    })
}


module.exports = { middlewareFunction }