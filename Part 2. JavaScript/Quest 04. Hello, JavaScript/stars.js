 function printStar( num ) {
	for( var i = 0; i < num; i++ ) {
		for ( var j = num - 1; j > i; j-- ) {
			console.log(' ');
		}
		for ( var k = 0; k < 2*i + 1; k++ ) {
			console.log('*');
		}
	console.log('\n');
}

var lineNum = prompt("별의 갯수를 입력하세요.", 3);
printStar( parseInt( lineNum ) );