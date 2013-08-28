function quantity(){
	 
	

		var theForm = document.forms["formular1"];
		
		var selectedArea = theForm.elements["area"];

		var area = parseFloat(selectedArea.value);
		
		var selectedTick = theForm.elements["tick"];
    
		var tick = parseFloat(selectedTick.value);
		
		
		// calculation
		
		var quantity = area * tick;
		
		// display unit price
		
		 var divobj = document.getElementById('quantity');
		 divobj.style.display='block';
		 divobj.innerHTML = "ปริมาณสีที่ใช้ "+ quantity.toFixed(2) + " กิโลกรัม";
    
   

		
		
		 
		
	
	
}