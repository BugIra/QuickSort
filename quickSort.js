function quickSort( arr, first, last ) {
	if( arr.length == 0 ) {
		return;
	}
	if( first >= last ) {
		return;
	}
	var f = first;
	var l = last;
	var m = parseInt( (first + last) / 2 );
	var mid = arr[m];
	while(f <= l) {
		while( arr[f] < arr[m] ) {
			f++;
		}	
		while ( arr[l] > arr[m]){
			l--;
		}
		if( f <= l ) {
			var tmp = arr[f];
			arr[f] = arr[l];
			arr[l] = tmp;
			f++;
			l--;
		}
	}
	if( first < l ) {
		quickSort( arr, first, l );
	}
	if( last > f ) {
		quickSort( arr, f, last );
	}
} 

var arr = [1, 17, 89, 93, 44, 58, 23, 42, 22, 98, 15];
console.log( "Initial array: " + arr);
var first = 0;
var last = arr.length - 1;
quickSort(arr, first, last);
console.log( "Array after quick sort: " + arr);