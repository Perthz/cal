<!-- Calculate Data -->

<script type="text/javascript">
$(document).ready(function(){


	$('input.valid-number').bind('keypress', function(e) {
		return ( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57)) ? false : true ;
	});

	$("#tableData1 button").click(function(){
		var numberCal1 = $("#tableData1 input.inputData1").val();
		var numberCal2 = $("#tableData1 input.inputData2").val();
		var numberCal3 = numberCal1*numberCal2*2;
		var numberCal4 = numberCal3/20;
		var numberCal5 = numberCal1/60*25;
		var numberCal6 = numberCal5/25;
		var numberCal7 = numberCal1/140+1;
		$("#tableData1 span.datatype1").text(numberCal3.toFixed(0));
		$("#tableData1 span.datatype2").text(numberCal4.toFixed(0));
		$("#tableData1 span.datatype3").text(numberCal5.toFixed(0));
		$("#tableData1 span.datatype4").text(numberCal6.toFixed(0));
		$("#tableData1 span.datatype5").text(numberCal7.toFixed(0));
		return false;
	});
	
	$("#tableData2 button").click(function(){
		var numberCal1 = $("#tableData2 input.inputData1").val();
		var numberCal2 = $("#tableData2 input.inputData2").val();
		var numberCal3 = $("#tableData2 input.inputData3").val();
		var numberCal4 = (numberCal1/numberCal2);
		var numberCal5 = (numberCal4/numberCal3)*1000;
		$("#tableData2 span.datatype1").text(numberCal5.toFixed(2));
		return false;
	});
	
	$("#tableData3 button").click(function(){
		var numberCal1 = $("#tableData3 input.inputData1").val();
		var numberCal2 = $("#tableData3 input.inputData2").val();
		var numberCal3 = numberCal1/4;
		var numberCal4 = numberCal2*2;
		var numberCal5 = numberCal2*2;
		var numberCal6 = (numberCal2*1)+(numberCal3*1);
		var numberCal7 = numberCal6*8;
		$("#tableData3 span.datatype1").text(numberCal3.toFixed(0));
		$("#tableData3 span.datatype2").text(numberCal4.toFixed(0));
		$("#tableData3 span.datatype3").text(numberCal5.toFixed(0));
		$("#tableData3 span.datatype4").text(numberCal6.toFixed(0));
		$("#tableData3 span.datatype5").text(numberCal7.toFixed(0));
		$("#tableData3 span.datatype6").text(numberCal6.toFixed(0));
		$("#tableData3 span.datatype7").text(numberCal6.toFixed(0));
		return false;
	});
	
});
</script>
<!-- E:Calculate Data -->