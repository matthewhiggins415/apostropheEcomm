module.exports = {
  session: {
    // If this still says `undefined`, set a real secret!
    secret: '0adc6f9630b5518c'
  }
};

// make cart module and add routes in within that module. 
// https://v2.docs.apostrophecms.org/advanced-topics/how-apostrophe-handles-requests.html
// https://v2.docs.apostrophecms.org/reference/modules/apostrophe-module/#route-method-path-responder-fn 
// ^ how routes work in a2 
// route, html route, api route, render route, addtask