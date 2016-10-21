 function printStar( num ) {
 	// num = 3, i = 0, 1, 2
	for( var i = 0; i < num; i++ ) {
		var string = '';
		// i = 0, j = 0, 1, 2
		// i = 1, j = 0, 1, 2, 3
		// i = 2, j = 0, 1, 2, 3, 4
		for ( var j = 0; j < num+i; j++ ) {
			// ' ' = 0, 1
			// ' ' = 0
			if ( j < num-i-1 )
				string += ' ';
			// * = 2
			// * = 1, 2, 3
			// * = 0, 1, 2, 3, 4
			else
				string += '*';
		}
		console.log( string );
	}
}

var lineNum = prompt("별의 갯수를 입력하세요.", 3);
printStar( parseInt( lineNum ) );