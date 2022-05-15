function verifyToken (req, res, next)  {
    let tokenHeader = req.headers['authorization'] || req.headers['x-access-token'];

    if (tokenHeader.startsWith('Bearer ')) {
        tokenHeader = tokenHeader.slice(7, tokenHeader.length);
        req.token = tokenHeader;
        next();
    } else {
        res.status(403).send({
            message: 'Acess denied'
        });
    }
}

module.exports = verifyToken;
