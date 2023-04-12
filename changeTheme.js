var isDark = false;
function toggleColor() {
	var body = document.getElementsByTagName("body")[0];
    var about= document.getElementById("about");
    var navLinks = document.getElementsByTagName("a");
    var image = document.getElementById("myImage");
    var image1 = "images/logo.png";
    var image2 = "images/logo(1).png";
   

	if (isDark) {
		body.style.backgroundColor = "#fff";
        about.style.backgroundColor="#fff";
        about.style.color="#000";
        image.src=image2;
        
       
        for (var i = 0; i < navLinks.length; i++) {
	         navLinks[i].addEventListener("mouseover", function() {
		         this.style.color = "#4CAF50";
	        });
	            navLinks[i].addEventListener("mouseout", function() {
		        this.style.color = "#000";
	        });
}
		isDark = false;
	} else {
		body.style.backgroundColor = "#000";
        about.style.backgroundColor="#000";
        about.style.color="#fff";
        image.src=image1;
        for (var i = 0; i < navLinks.length; i++) {
	         navLinks[i].addEventListener("mouseover", function() {
		         this.style.color = "#4CAF50";
	        });
	            navLinks[i].addEventListener("mouseout", function() {
		        this.style.color = "#fff";
	        });
		isDark = true;
	}}
}
