let str_arr = process.argv.slice(2);
let lcs = "";
// ternary has higher precedence than -=
for (let i = 0, start = 0, end_margin = 0; i < str_arr.length;
	        start += str_arr[i++].includes(
	       	// end_margin <= 0 
	            lcs = str_arr[0].substr(start, str_arr[0].length - end_margin)
	          ) ? 0 : start > (i = 0) ? -1 : ++end_margin);
console.log(lcs);