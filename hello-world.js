function printHelloWorld() {
	console.log('Hello world..!');
	dispalyTime();
}
function displayTime(){
	var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	console.log('Current Time:',time);
}
