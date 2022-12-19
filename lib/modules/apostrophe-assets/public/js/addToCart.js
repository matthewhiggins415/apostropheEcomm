$(function() {
    const btn = document.body.querySelector('[data-apostrophe-addToCart]');
    
    if (!btn) {
      return;
    }
    
    const addToCart = () => {
      const value = btn.getAttribute('data-apostrophe-addToCart');
      const data = JSON.parse(value);
      apos.utils.post('/modules/cart/add', data, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log("result from api call:", result)
        }
      })
    };
    
    btn.addEventListener('click', addToCart);
})
// no need to use import/export when no webpack is available
// learn about widget-players to understand how to add javascript excitement to a widget just added to a page. 
// for existing content on page - wait for page to load 



// req.session would be creating server-sidenew api routes on server side and writing apos.utils.post frontend function to hit the endpoints 
// loop through req.session to grab cart items 
// session storage would work - drawback is opening up new tabs it will spoil the session
// checkout button will pass off the req.session to stripe 