class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restituition' : 0.8, 
		'friction': 3, 
		'density':30
	}
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 30;
        this.height = 90;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("darkgrey");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}