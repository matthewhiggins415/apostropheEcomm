module.exports = {
  construct: function(self, options) {
    self.expressMiddleware = function (req, res, next) {
      req.data.cart = req.session.cart || {};
      console.log("req.data.cart", req.data.cart)
      return next();
    };

    self.apiRoute('post', 'add', function (req, res, next) {
      console.log('req.body in post', req.body)
      console.log("req.session", req.session)
      req.session.cart = req.body;
      return next(null, { status: 'ok',  cart: req.session.cart })
      // data refers to a result we wish to send back from this endpoint.
    });
  }
}


