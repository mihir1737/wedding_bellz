function checkAuthenticated(req, res, next) {
    console.log(req.body)

    if (req.body.auth)
    {
        return next(req, res)
    }
        else
        return null
    //   if (req.isAuthenticated()) {
    //     return next()
    //   }
    //   res.redirect('/login')
}

function checkNotAuthencticated(req, res, next) {
    console.log('I am checkNotAuthencticated.')
    return next()
    //   if (req.isAuthenticated()) {
    //     return res.redirect('/');
    //   }
    //   return next();
}

module.exports = { checkAuthenticated, checkNotAuthencticated }