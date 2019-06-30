var click_count = 0; 

function swap_colour() {

	click_count+=1;
	console.log(click_count);

	var main_content = document.getElementById("main_content");

	if (click_count == 13) {

		window.location.assign("arme001.html");

	} else {
		main_content.classList.toggle("contentonclick"); 
	}
	

}