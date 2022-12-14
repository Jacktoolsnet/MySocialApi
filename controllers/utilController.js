const requestIp = require('request-ip');

exports.getClientIp = (req, res, next) => {
    const client_ip = requestIp.getClientIp(req); 
    res.status(200).send({
      status: {
        code: 200,
        message: 'OK'
      },
      data: {
        client_ip
      }
    });
  }