$(function() {
    var LegArmAr= [];
	LegArmAr[0] = "Squat";
	LegArmAr[1] = "Leg Press";
	LegArmAr[2] = "Deadlift";
	LegArmAr[3] = "Crunches";
	LegArmAr[4] = "Hip Abdductors";
	LegArmAr[5] = "Back Extension";
	LegArmAr[6] = "Lunges";
	LegArmAr[7] = "Chest Fly";
	LegArmAr[8] = "Push Ups";
	LegArmAr[9] = "Biceps Curls";
	LegArmAr[10] = "Upright Rows";
	LegArmAr[11] = "Pull Ups";
	LegArmAr[12] = "Bench Press";
    var rand = "";

    var rand = LegArmAr[Math.floor(Math.random() * LegArmAr.length)];
	

       //We add vPool HTML content to #myDIV
       $('#myDIV').html(rand);
});