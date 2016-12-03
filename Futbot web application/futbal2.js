$(document).ready(function(){
	$("#buyNowButton").click(function(){ //jquery for the buy now button in the product page
		$("#productContent").fadeOut(1000);  //this will fade the product description main content
		$("#hiddenForm").slideDown(1000); // this will slidedown (show) the hidden form
	})
})


function calculateTotal(){
	document.getElementById("subtotal").value="$"+(document.getElementById("cartQuantity").value*document.getElementById("productPrice").innerHTML);
	document.getElementById("shipping").value="Free";
	document.getElementById("GST").value="$"+((document.getElementById("cartQuantity").value*document.getElementById("productPrice").innerHTML)*0.1);

}

function placeInputToCart(){
	document.getElementById("cartQuantity").value = document.getElementById("quantity").value;
	document.getElementById("cartPrice").innerHTML=(document.getElementById("productPrice").innerHTML*document.getElementById("cartQuantity").value);
	document.getElementById("cartImage").src=document.getElementById("productImage").src;
	document.getElementById("cartProductDescription").innerHTML=document.getElementById("productDescription").innerHTML;
	document.getElementById("cartProductName").innerHTML=document.getElementById("productName").innerHTML;
	document.getElementById("productId").value=document.getElementById("productName").innerHTML;
	document.getElementById("formProductSize").value=document.getElementById("productSize").value;
	calculateTotal();

	if (document.getElementById("quantity").value == 0){
		alert("You haven't add the quantity");
	}

}

function updatePrice() { //function to auto update the cart price and subtotals and gst on the hidden form
	var x =document.getElementById("cartQuantity").value;
	document.getElementById("cartPrice").innerHTML=x*document.getElementById("productPrice").innerHTML;
	calculateTotal();
}

function getBackToProductDescription(){ //function from the hidden form back to product description page
		$(document).ready(function(){	
						$("#hiddenForm").slideUp(1000);
						$("#productContent").fadeIn(1000); 
				});
}

function wiggle(){ //function to wiggle this function will only work if the element have position: relative;
	$(document).ready(
		function(){
			$("#cartQuantity").animate({'left':'+=15px'},200);
			$("#cartQuantity").animate({'left':'-=15px'},200);
			$("#cartQuantity").animate({'left':'+=15px'},200);
			$("#cartQuantity").animate({'left':'-=15px'},200);
		}				
	);
};
function wiggle1(){ //function to wiggle this function will only work if the element have position: relative;
	$(document).ready(
		function(){
			$("#formfullname").animate({'left':'+=15px'},200);
			$("#formfullname").animate({'left':'-=15px'},200);
			$("#formfullname").animate({'left':'+=15px'},200);
			$("#formfullname").animate({'left':'-=15px'},200);
		}				
	);
};
function wiggle2(){ //function to wiggle this function will only work if the element have position: relative;
	$(document).ready(
		function(){
			$("#email").animate({'left':'+=15px'},200);
			$("#email").animate({'left':'-=15px'},200);
			$("#email").animate({'left':'+=15px'},200);
			$("#email").animate({'left':'-=15px'},200);
		}				
	);
};
function wiggle3(){ //function to wiggle this function will only work if the element have position: relative;
	$(document).ready(
		function(){
			$("#address").animate({'left':'+=15px'},200);
			$("#address").animate({'left':'-=15px'},200);
			$("#address").animate({'left':'+=15px'},200);
			$("#address").animate({'left':'-=15px'},200);
		}				
	);
};


//this is for the form Validation

function validate(){

			if(document.getElementById("cartQuantity").value == "0")
				{ wiggle();
				alert("you have zero quantity number");
				document.getElementById("cartQuantity").style.borderColor='red';
				document.getElementById("cartQuantity").style.background='yellow';				
				return false;}

			else if(document.getElementById("formfullname").value == "")
				{ wiggle1();
				alert("Oi What's your name?");
				document.getElementById("formfullname").style.borderColor='red';
				document.getElementById("formfullname").style.background='yellow';				
				return false;}
			
			else if(document.getElementById("email").value == "")
				{wiggle2();
				alert("Can I have your email Address please!!");
				document.getElementById("email").style.borderColor='red';
				document.getElementById("email").style.background='yellow';				
				return false;}
				
			else if(document.getElementById("address").value == "")
				{wiggle3();
				alert("How about where you live?");
				document.getElementById("address").style.borderColor='red';
				document.getElementById("address").style.background='yellow';				
				return false;}
			else {
					return true;
				}
				
			}





