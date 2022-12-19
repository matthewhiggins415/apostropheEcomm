$(function() {
  const removeBtnArr = document.body.querySelectorAll('[data-apostrophe-removeFromCart]');

  if (!removeBtnArr) {
    return;
  };

  const removeFromCart = (value) => {
    apos.utils.post('/modules/cart/remove', value, function(err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log("result from api call:", result)
      }
    })
  };

  removeBtnArr.forEach((btn) => {
    let value = btn.getAttribute('data-apostrophe-removeFromCart');
    let data = JSON.parse(value);
    btn.addEventListener("click", () => removeFromCart(data));
  })
});