function quantity(){
	 
	

		var theForm = document.forms["formular1"];
		
		var selectedArea = theForm.elements["area"];

		var area = parseFloat(selectedArea.value);
		
		var selectedTick = theForm.elements["tick"];
    
		var tick = parseFloat(selectedTick.value);
		
		
		// calculation
		
		var quantity = area * tick * 2;
		var bag = quantity/20;
		var ball = area/60*25;
		var bbag = ball/25;
		var primer = area/140 +1;
				
		// display
			
		var divobj = document.getElementById('quantity');
		 divobj.style.display='block';
		 divobj.innerHTML = "จำนวนสีเทอร์โมพลาสติก "+ quantity.toFixed(2) + " กิโลกรัม" + "</br>" + "จำนวนถุงสีเทอร์โมพลาสติก " + bag.toFixed(0) + " ถุง (20 กิโลกรัม/ถุง)" + "</br>" + "จำนวนลูกแก้วสะท้อนแสง " + ball.toFixed(2) + " กิโลกรัม" + "</br>" 
		 + "จำนวนถุงลูกแก้วสะท้อนแสง " + bbag.toFixed(0) + " ถุง" + "</br>"
		 + "จำนวนน้ำยาประสานไพรเมอร์ " + primer.toFixed(0) + " ปี๊ป (13 กิโลกรัม/ปี๊บ)"
		;	
}

function hide()
{
    var divobj = document.getElementById('quantity');
    divobj.style.display='none';
}