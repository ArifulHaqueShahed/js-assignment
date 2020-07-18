//feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
    
}



//woodCalculator

function woodCalculator(chair, table, bed){
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWood = chairWoodCount + tableWoodCount + bedWoodCount; 
    return totalWood;
}






//brickCalculator

function brickCalculator(value) {
	var first_10 = 15;
	var second_10 = 12;
	var rest_all = 10;
	var bpf = 1000;
	var result = 0;
     if (value <= 10) {
     	var bldng = value * first_10;
     	result = bldng * bpf;
     } else if (value <= 20 && value > 10) {
     	var split1 = value - 10;
     	var bldng = split1 * second_10;
     	var bldng = bldng + 10 * first_10;
     	result = bldng * bpf;
     } else if (value > 20) {
     	var split1 = (value - 20) * rest_all;
     	var split2 = 10 * 15;
     	var split3 = 10 * 12;
     	var bldng = split1 + split2 + split3;
     	result = bldng * bpf;
     }
     return result;
     
}






//tinyFriend

function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length < smallest.length){
            smallest = element;
        }
    }
    return smallest;
}

