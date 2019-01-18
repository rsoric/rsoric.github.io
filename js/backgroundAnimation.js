var animationState = 1;
var animationStates = [1, 2, 3, 4];

function animateFace() 
{
	switch(animationState)
	{
		case 1:
			$("#animatedFace").attr("src","img/background4_1.png");
		break;
		
		case 2:
			$("#animatedFace").attr("src","img/background4_2.png");
		break;
		
		case 3:
			$("#animatedFace").attr("src","img/background4_3.png");
		break;
		
		case 4:
			$("#animatedFace").attr("src","img/background4_4.png");
		break;
	}
	
	var chance = Math.random();
	if (chance > 0.95 && chance <= 0.975) $("#animatedFace").attr("src","img/background4_5.png")
		else if (chance > 0.975) $("#animatedFace").attr("src","img/background4_6.png")
	
}



(function loop() {
    var rand = Math.round(Math.random() * (420 - 75)) + 69;
    setTimeout(function() 
	{
            animateFace();
			
			animationState = animationStates[Math.floor(Math.random()*animationStates.length)];
			
            loop();  
    }, rand);
}());

