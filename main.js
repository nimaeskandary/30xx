$(document).ready(function(){
    //$('#banner').css("width",$(window).width());
    $('.UIDiv').mouseenter(function(){     //makes the left block expand into the user selection boxes
        if($(this).css('height') !== '350px'){
            $(this).animate({
                height: '350px'
            });
            $('#UIone').fadeOut('fast');  //Fades out what did you see bro
            $('.ui-field-contain').css('display','initial');
            $('.btn').css('display','initial'); //shows the button
            $('.label').css('display','initial');
            $('#barGraph').animate({
                top: '550px',
            });
            $('#barTitle').animate({
                top: '520px',
            });
        }
    });
    
    $('.UIDiv').mouseleave(function(){     //makes the left block expand into the user selection boxes
        if($(this).css('height') === '350px'){
            $(this).animate({
                height: '50px'
            });
            $('#UIone').fadeIn('fast');  //Fades out what did you see bro
            $('.ui-field-contain').css('display','none');
            $('.btn').css('display','none'); //shows the button
            $('#barGraph').animate({
                top: '280px',
            });
            $('#comment').remove();
            $('#answer').remove();
            $('#barTitle').animate({
                top: '250px',
            });
        }
    });
    
    $('.btn').click(function(){  //responds to button click, reads in user choices for state and shape
        var stateIndex = document.getElementById("select-choice-1");
        var selectedState = stateIndex.options[stateIndex.selectedIndex].value;
        var shapeIndex = document.getElementById("select-choice-2");
        var selectedShape = shapeIndex.options[shapeIndex.selectedIndex].value;
        parseStateShapeCounter(selectedState,selectedShape);
        
    });

    var mostCommonState = $("#mostStatePie").get(0).getContext("2d");//creates pie chart for the most common states
				//pie chart data
				//sum of values = 360
				var mostCommonStateData = [
					{
						value: variables.mostCommonStates[0][1],
						color: "cornflowerblue",
						highlight: "lightskyblue",
						label: variables.mostCommonStates[0][0]
					},
					{
						value: variables.mostCommonStates[1][1],
						color: "lightgreen",
						highlight: "yellowgreen",
						label: variables.mostCommonStates[1][0]
					},
					{
						value: variables.mostCommonStates[2][1],
						color: "orange",
						highlight: "darkorange",
						label: variables.mostCommonStates[2][0]
					},
						{
						value: variables.mostCommonStates[3][1],
						color: "red",
						highlight: "darkred",
						label: variables.mostCommonStates[3][0]
					},
						{
						value: variables.mostCommonStates[4][1],
						color: "purple",
						highlight: "white",
						label: variables.mostCommonStates[4][0]
					}
				];
				//draw
				var mostCommonStatePieChart = new Chart(mostCommonState).Pie(mostCommonStateData);
				
				var leastCommonState = $("#leastStatePie").get(0).getContext("2d");//creates pie chart for the most common states
				//pie chart data
				//sum of values = 360
				var leastCommonStateData = [
					{
						value: variables.leastCommonStates[0][1],
						color: "purple",
                        highlight: "white",
						label: variables.leastCommonStates[0][0]
					},
					{
						value: variables.leastCommonStates[1][1],
						color: "orange",
                        highlight: "darkorange",
						label: variables.leastCommonStates[1][0]
					},
					{
						value: variables.leastCommonStates[2][1],
						color: "lightgreen",
                        highlight: "yellowgreen",
						label: variables.leastCommonStates[2][0]
					},
						{
						value: variables.leastCommonStates[3][1],
						color: "red",
						highlight: "darkred",
						label: variables.leastCommonStates[3][0]
					},
						{
						value: variables.leastCommonStates[4][1],
						color: "cornflowerblue",
                        highlight: "lightskyblue",
						label: variables.leastCommonStates[4][0]
					}
				];
				//draw
				
				var leastCommonStatePieChart = new Chart(leastCommonState).Pie(leastCommonStateData);
				
				var mostCommonShape = $("#mostShapePie").get(0).getContext("2d");
				//pie chart data
				//sum of values = 360
				var mostCommonShapeData = [
					{
						value: variables.mostCommonShapes[0][1],
						color: "red",
                        highlight: "darkred",
						label: variables.mostCommonShapes[0][0]
					},
					{
						value: variables.mostCommonShapes[1][1],
						color: "purple",
                        highlight: "white",
						label: variables.mostCommonShapes[1][0]
					},
					{
						value: variables.mostCommonShapes[2][1],
						color: "orange",
						highlight: "darkorange",
						label: variables.mostCommonShapes[2][0]
					},
						{
						value: variables.mostCommonShapes[3][1],
						color: "cornflowerblue",
                        highlight: "lightskyblue",
						label: variables.mostCommonShapes[3][0]
					},
						{
						value: variables.mostCommonShapes[4][1],
						color: "lightgreen",
                        highlight: "yellowgreen",
						label: variables.mostCommonShapes[4][0]
					}
				];
				//draw
				
				var mostCommonShapePieChart = new Chart(mostCommonShape).Pie(mostCommonShapeData);
				
				var leastCommonShape = $("#leastShapePie").get(0).getContext("2d");
				//pie chart data
				//sum of values = 360
				var leastCommonShapeData = [
					{
						value: variables.leastCommonShapes[0][1],
						color: "cornflowerblue",
						highlight: "lightskyblue",
						label: variables.leastCommonShapes[0][0]
					},
					{
						value: variables.leastCommonShapes[1][1],
						color: "lightgreen",
						highlight: "yellowgreen",
						label: variables.leastCommonShapes[1][0]
					},
					{
						value: variables.leastCommonShapes[2][1],
						color: "purple",
                        highlight: "white",
						label: variables.leastCommonShapes[2][0]
					},
						{
						value: variables.leastCommonShapes[3][1],
						color: "red",
						highlight: "darkred",
						label: variables.leastCommonShapes[3][0]
					},
						{
						value: variables.leastCommonShapes[4][1],
						color: "orange",
                        highlight: "darkorange",
						label: variables.leastCommonShapes[4][0]
					}
				];
				//draw
				
				var leastCommonShapePieChart = new Chart(leastCommonShape).Pie(leastCommonShapeData);
				
var barData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'Number of Sightings',
            fillColor: 'orange',
            data: [11049, 15353, 18216, 13605, 14151, 18951, 8836]
        }
    ]
};

var context = document.getElementById('barGraph').getContext('2d');
var clientsChart = new Chart(context).Bar(barData);
				
				
			});
var variables = { //data for the most common states
    data: [],
    mostCommonStates: 
        [['CA',11474],
        ['FL',5346],
        ['WA',5145],
        ['TX',4451],
        ['NY',4026]],
    leastCommonStates: 
        [['ND',171],
        ['DE',248],
        ['SD',254],
        ['WY',262],
        ['RH',380]],
    mostCommonShapes: 
        [['Light',20300],
        ['Circle',9993],
        ['Triangle',9474],
        ['Fireball',7776],
        ['Other',6919]],
    leastCommonShapes: 
        [['Cross',301],
        ['Cone',411],
        ['Teardrop',915],
        ['Egg',925],
        ['Chevron',1138]],
 };


    
				

   var parseStateShapeCounter = function(state,shape){  //parses and interprets data, returns the answer to user input
        Papa.parse('Data/UFO_data.csv', {
            download: true,
            dynamicTyping: true,
            complete: function(results) { //
                variables.data = results.data;
                var tempData = stateShapeCounter(state,shape);
                var stateIndex = document.getElementById("select-choice-1");
                var selectedState = stateIndex.options[stateIndex.selectedIndex].value;
                var shapeIndex = document.getElementById("select-choice-2");
                var selectedShape = shapeIndex.options[shapeIndex.selectedIndex].value;
                $("#answer").remove();
                $("#comment").remove();
                if(shapeIndex !== "Unknown") {
                    $(".UIDiv").append("<p id='answer'>A "+ selectedShape.toLowerCase() +" shaped UFO was seen " + tempData[0] +" </br>time(s) out of " + tempData[1] + 
                    " sightings.</p>");
                    $(".UIDiv").append("<p id='comment'>" + commentGenerator(tempData[0]/tempData[1]) + "</p>");
                } else {
                }
                console.log("Amount of times shape seen: " + tempData[0] + "\nTotal amount of reports: " + tempData[1]);
            }
        });
    }
    
    var stateShapeCounter = function(state,shape){//counts how many times a certain shape occurs per state
        var counter = 0;
        var stateColumn;
        for(var c = 0;c<variables.data[1].length;c++){
            if(variables.data[1][c] === state) stateColumn = c+1;
        }
        for(var y = 0;y<variables.data.length;y++){
            if(variables.data[y][stateColumn] === shape) counter++;
        }
        return [counter,getTotalSightingsByState(stateColumn)];
    }
    
    var getTotalSightingsByState = function(stateColumn){//gets the total amount of ufo sightings
        var counter = 0;
        for(var y = 0;y<variables.data.length;y++){
            if(variables.data[y][stateColumn] !== '') counter++;
        }
        return counter;
    }
    
    
    
  var commentGenerator = function(x){  //generates comments that return based on probability the user saw a UFO
        if(x<.04) return "What you saw was just the moon";
        else if(x<.06) return "That shape in the sky, <br>might've just been a blimp";
        else if(x<.08) return "You saw a UFO, get your tin foil hat!";
        else if(x<.10) return "Call NBC, the world needs to know what you saw.";
        else if(x<.12) return "Hmm that's a tough call, I'm not sure what that was";
        else return "Well, you didn't see a UFO but at <br>least you're not crazy";
    }