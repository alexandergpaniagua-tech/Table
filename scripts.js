//Available for reproduction under trademark law.
//Made by: Alexander Paniagua ~ Buzz Needs Bees
//Send me a serious inquiry for more code: @yungcollat or buzzsmusic@gmail.com
//Made this with HTML5, CSS3, and JavaScript, can be used offline.
//
//Not for Commercial use. For offline datasheets and accounting.

//Tags for SEO: #Code #Scripts #Datasheets #Data #Datatable #Table #Offline #Program #Excel #Azure #AWS #Forms #Sites #PaaS   
//#platform #collateral #yungcollat

var rows = null;
var columns = null;
var inputElement = document.getElementById("default");


function update() {
//Grabs parameters from user input and prepares row and columns creation
	var rows = document.getElementById("inputRows").value;
	var columns = document.getElementById("inputColumns").value;
	var createRows= "<tr></tr>";
	var createColumns= "<td></td>";

//Simple Script for adding in rows
for(let i = 0;i<rows;i++)
	{
	let Table = document.getElementById("Table");
	Table.innerHTML= Table.innerHTML + createRows;
	}

//Simple Script for adding in columns
for(let n = 0;n<rows;n++)
	{
	let row = document.getElementsByTagName("tr")[n];
		for(let x = 0; x<columns; x++)
		{	
			row.innerHTML = row.innerHTML + createColumns;
		}
	}

//Simple Script for columns and rows
for(let script = 0; script<rows; script++)
	{
		let pointer = document.getElementsByTagName("tr")[script];
		for(let xy = 0; xy<columns; xy++)
		{
			let dataCell = pointer.getElementsByTagName("td")[xy];
			dataCell.setAttribute("onclick", "input("+xy+","+script+")");
		}
	}
}


var input = null;
//Takes input and position of target cell
let userInput = document.getElementById("userInput");

//Numerical Data Entry
//Grab
let number = document.getElementById("input").value;
//Send
function input(x,y){
		//Formula for 2d to 1d input
		let position = (y * columns + x)-1;

		let dataCell = document.getElementsByTagName("td")[position];
		dataCell.value = number;
};


}