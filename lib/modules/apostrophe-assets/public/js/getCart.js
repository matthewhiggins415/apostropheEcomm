$(function() {
  const cartPage = document.body.querySelector('.cart-page');

  const getCart = () => {
    apos.utils.get('/modules/cart/get', function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("result from api call:", result);
      }
    })
  };

  // getCart();
});

// make this render.route to render a template of the cart 
// pagination with pieces 