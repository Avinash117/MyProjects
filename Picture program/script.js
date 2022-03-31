// JavaScript Document


// SET GLOBAL VARIABLES

// use this to keep track of tags
var gallery_array = [];


// THIS FUNCTION IS COMPLETE
// It takes 4 parameters and adds a unique element to your grid

function addImage(imgPath, width, height, tag){
	
	//ADDS Image to global array
	gallery_array.push(tag);
	
	//CREATE UNIQUE IMAGE ID BASED ON ARRAY LENGTH
	var id = gallery_array.length - 1;
	
	// CREATES IMAGE OBJECT
	var img = document.createElement("img");
	img.src = imgPath;
	
	if(width != null){
		//img.width = width;
	}
	if(height != null){
		//img.height = height;
	}
	img.id = "img_" + id;
	img.className = "grid_image";
	
	img.setAttribute('onclick','onGalleryImageClick(' + id + ');');
	
	
	// CREATES DIV WRAPPER
	var div = document.createElement("div");
	div.id = "imgHolder_" + id;
	div.className = "grid_element";
	
	// ADDS IMG TO DIV
	div.appendChild(img);
	
	// ADDS DIV TO GRID
	var src = document.getElementById("gallery_grid");
	src.appendChild(div);

}

function turnOffImage(id){
	// this function will set the display property of the grid_element to 'none';
	document.getElementById("imgHolder_"+ id).style.display = "none";
	
	
}

function turnOnImage(id){
	// this function will set the display property of the grid_element to 'inline';
	document.getElementById("imgHolder_"+ id).style.display = "inline";
	
}




// ADD MORE FUNCTIONS HERE

function onImageClick(id){
	
	alert("The image you clicked has the id: " + id);
	
	// CREATES POPUP IMAGE OBJECT
	/*var img = document.createElement("img");
	img.src = document.getElementById("img_"+ id).src;
	img.height = "700";
	
	img.id = "popup_img";
	
	var div = document.createElement("div");
	div.id = "popup";
	div.style.height = "100%";
	div.style.width= "100%";
	div.style.background = "gray";
	div.style.position = "absolute";
	div.style.x = "10";
	div.style.y = "10";
	div.setAttribute('z-index', '1000');
	
	
	// ADDS IMG TO DIV
	div.appendChild(img);
	
	document.body.appendChild(div);*/
	
	
	//document.getElementById("img_"+ id).style.width = "200%";
}


function onFilterClick(tag){
	
	// Do some actions
	alert("The button you clicked has the tag: " + tag);
	
	// loop your array and find which elements contain the tag
		//the array index corresponds to the imgId you want to effect
		// if an array element equals the tag, call turnOnImage(arrayIndex)
		// if not, call turnOffImage(arrayIndex)
	
	// testing the turning off of images
	
	
	if(tag === "all"){
		
		for(let i = 0; i<gallery_array.length; i++){
			turnOnImage(i);
		}
		
	}else{
		for(let i = 0; i<gallery_array.length; i++){
			if(gallery_array[i]=== tag){
				turnOnImage(i);
			}else{
				turnOffImage(i);
			}
		}	 
	}
	
}



// THIS CODE WILL BE RUN AUTOMATICALLY WHEN PAGES LOADS

//addImage( URL, width, height, tags);
// URL is the path string of the image
// Width & height are optional and integers
// tag should be a string

//stars
addImage("https://vignette.wikia.nocookie.net/worldbuilders/images/7/7e/White_Dwarf.jpg/revision/latest/scale-to-width-down/350?cb=20160417151546", 569 , 320,'stars');
addImage("https://mcdn.wallpapersafari.com/medium/93/17/lFCntT.jpg", 800,800, 'stars');
addImage("https://scx1.b-cdn.net/csz/news/800/2016/friendlygian.jpg", 500,500, 'stars');
addImage("https://www.physicsforums.com/attachments/alg_large-sun-jpg.135444/", 700, 700, 'stars');
addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/BrownDwarfComparison-pia12462.jpg/275px-BrownDwarfComparison-pia12462.jpg", 1300,949, 'stars');
addImage("https://preview.redd.it/ibbaa3i1zpay.jpg?width=960&crop=smart&auto=webp&s=4cd58b0cbdb970f472ff6b5e32e445371d07726f", 400, 400, 'stars');

//planets
addImage("https://c.wallhere.com/photos/8e/ba/Elite_Dangerous_space_science_fiction_video_games_planet_stars-107077.png!d", 569 , 320,'planets');
addImage("https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FFuy6wmkJVPMkYwQI_sKvdg%252FThe%2BBlue%2BMarble%252C%2B1972.jpg&width=1200&quality=80", 1200,1200, 'planets');
addImage("http://getwallpapers.com/wallpaper/full/5/4/6/275249.jpg", 500,500, 'planets');
addImage("https://i.pinimg.com/236x/dd/00/99/dd00992248325b7e94479c8bc1ad22b6.jpg", 700, 700, 'planets');


//Space stuff 
addImage("https://i.stack.imgur.com/lKj6w.jpg", 569 , 320,'stuff');
addImage("https://usercontent2.hubstatic.com/14277725_f520.jpg", 800,800, 'stuff');
addImage("https://www.universetoday.com/wp-content/uploads/2013/02/NGC5189.jpg", 500,500, 'stuff');
addImage("https://www.universetoday.com/wp-content/uploads/2010/12/cosmic_web_3smaller.jpg", 700, 700, 'stuff');
addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/07-Laniakea_%28LofE07240%29.png/1024px-07-Laniakea_%28LofE07240%29.png", 700, 700, 'stuff');
addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Local_Group.svg/683px-Local_Group.svg.png", 700, 700, 'stuff');