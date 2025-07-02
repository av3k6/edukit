var _cartstack = _cartstack || [];
_cartstack.push(['setSiteID', 'k5NdYVpK']); /* required */

var cartstack_cartPageURL = '/cart';
var cartstack_checkoutPageURLs = ['/shipping-address','/update-billing',''];
//var cartstack_successPageURL = '';
var cartstack_successPageURL = '/confirm-order';
var cartstack_isconfirmation = 0;
var cartstack_debug = 0;
var cartstack_trackVisitor = 1;
var cartstack_cartTotal = '';
var cartstack_dataItems = [];
var cartstack_tracking = 0;
var cartstack_pageurl = window.location.href.toLowerCase();

var cartstack_cartitems_cartRow = "form#shippingaddress div|class=cart_lineitem row";
var cartstack_cartitems_quantity = "div.cs_c:quantity_lineitem input|value";
var cartstack_cartitems_productID = "";
var cartstack_cartitems_productName = "a.productinfo";
var cartstack_cartitems_productDesc = "";
var cartstack_cartitems_productURL = "";
var cartstack_cartitems_productURLPrefix = '';
var cartstack_allowEmptyURL = 1;
var cartstack_cartitems_productImageURL = "img.product_thumbnail.img-responsive|src";
var cartstack_cartitems_productImageURLPrefix = 'http://edukit.infrontwebworks.com';
var cartstack_allowEmptyImageURL = 0;
var cartstack_cartitems_productPrice = "div.cs_c:total_lineitem.col-md-1";
var cartstack_cartitems_productImageWidth = "100";
var cartstack_debugCartItems = 0;
var cartstack_cartItems = 0;

if (cartstack_successPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_successPageURL.toLowerCase()) >= 0)
{
	_cartstack.push(['setAPI', 'confirmation']);
	cartstack_isconfirmation = 1;
	if (cartstack_debug) { console.log('cs: confirmation'); }
}
else if (cartstack_cartPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_cartPageURL.toLowerCase()) >= 0)
{
	_cartstack.push(['setAPI', 'tracking']);
	cartstack_cartTotal = 'div#carttotal';
	cartstack_cartItems = 1;
	cartstack_tracking = 1;
	if (cartstack_debug) { console.log('cs: track-cart'); }
}
else
{
	var cartstack_checkoutURLExists = 0;
	for (var i=0; i<cartstack_checkoutPageURLs.length; i++)
	{
		var cartstack_checkoutPageURL = cartstack_checkoutPageURLs[i].toLowerCase();
		if (cartstack_checkoutPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_checkoutPageURL) >= 0)
		{
			cartstack_checkoutURLExists = 1;
		}
	}

	if (cartstack_checkoutURLExists)
	{
		_cartstack.push(['setAPI', 'tracking']);
		if (cartstack_debug) { console.log('cs: track-checkout'); }
	}
	else
	{
		_cartstack.push(['setAPI', 'capture']);
		if (cartstack_debug) { console.log('cs: capture'); }
	}
}
function cartstack_getTracking()
{
	(function(){
		/* Get the end dates... */
		var _endDates = [];
		var _inputs = document.getElementsByTagName('input');
		for(var i = 0; i < _inputs.length; i++)
		{
			var _input = _inputs[i];
			
			if (_input && typeof _input.getAttribute != 'undefined' && _input.getAttribute('name') && _input.getAttribute('name').toLowerCase() == 'enddate' && _input.value.trim().length > 0)
			{
				_endDates.push(_input.value.trim());
			}
		}
		
		var _endDateCount = 0;
		for(var i = 0; i < _cartstack.length; i++)
		{
			if (_cartstack[i][0] == 'setCartItem')
			{
				if (_endDateCount >= _endDates.length)
					break;
				
				var _endDate = _endDates[_endDateCount];
				_endDateCount++;
				
				_cartstack[i][1].customFields = { 'EndDateDisplay' : '<span style="color:red;"><strong>Offer ends: '+_endDate+'</strong></span>' };
			}
		}
	})();
}
(function(){var y = document.getElementsByTagName('script');var l=1;for(var i=0; i < y.length; i++){if (y[i].src == 'https://api.cartstack.com/js/cartstack_utility.js'){l=0;}}if(l){var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://api.cartstack.com/js/cartstack_utility.js';var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}})();
(function(){function cartstack_load(){var y = document.getElementsByTagName('script');var l=1;for(var i=0; i < y.length; i++){if (y[i].src == 'https://api.cartstack.com/js/cartstack.js'){l=0;}}if(l){var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://api.cartstack.com/js/cartstack.js';var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}}if(cartstack_isconfirmation){setTimeout(cartstack_load, 1500);}else{var checkStateCount=0;setTimeout(function checkState(){if(document.readyState==='complete'||checkStateCount>10){cartstack_load();}else{checkStateCount++;setTimeout(checkState, 1500);}},1500);}})();