module.exports = {
  construct: function(self, options) {
    self.expressMiddleware = function (req, res, next) {
      req.data.cart = req.session.cart || {};
      return next();
    };

    self.apiRoute('post', 'add', function (req, res, next) {
      if (req.session.cart) {
        req.session.cart.push(req.body)
      } else {
        req.session.cart = []
        req.session.cart.push(req.body)
      }
      // req.session.cart = req.body;
      return next(null, { status: 'ok',  cart: req.session.cart })
      // data refers to a result we wish to send back from this endpoint.
    });

    self.apiRoute('get', 'get', function (req, res, next) {
      console.log("we got da cart:", req.session.cart)
      return next(null, { status: 'ok',  cart: req.session.cart })
    });

    //remove item
    self.apiRoute('post', 'remove', function (req, res, next) {
      if (req.session.cart) {
        let updatedCart = req.session.cart.filter((cartItem) => cartItem.title !== req.body.title)
        console.log('updatedCart:', updatedCart)
      } else {
        console.log("nothing in cart")
      }

      return next(null, { status: 'ok',  cart: req.session.cart })
      // data refers to a result we wish to send back from this endpoint.
    })
  }
}


