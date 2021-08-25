class Rock{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restituition' : 0.8, 
		'friction': 0.9, 
		'density':12
	}
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 70;
        this.height = 70;
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}