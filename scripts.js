/**
 *Made by: Alexander Paniagua ~ Buzz Needs Bees
 *Send me a serious inquiry for more code: @yungcollat or buzzsmusic@gmail.com
 *Made this with HTML5, CSS3, and JavaScript, can be used offline.

 *Not for Commercial use. For offline datasheets and accounting.

 *Tags for SEO: #Code #Scripts #Datasheets #Data #Datatable #Table #Offline #Program #Excel #Azure #AWS #Forms #Sites #PaaS   
 *#platform #collateral #yungcollat
 */
var rows = null;
var columns = null;
var inputElement = document.getElementById("default");


function update() {
//Gets the user input on number of rows and columns
	var rows = document.getElementById("inputRows").value;
	var columns = document.getElementById("inputColumns").value;
//HTML5 for creating rows and columns
	var createRows= "<tr></tr>";
	var createColumns= "<td></td>";


//Scripts for rows & columns
for(let i = 0;i<rows;i++)
	{
	let Table = document.getElementById("Table");
	//Simple script: adds a row, & adds rows to pre-existing rows.
	Table.innerHTML= Table.innerHTML + createRows;
	}


for(let n = 0;n<rows;n++)
	{
//Grabs each row by numerical order
	let row = document.getElementsByTagName("tr")[n];
		//Adds columns to each row, number of columns is according.
		for(let x = 0; x<columns; x++)
		{	
			//Simple script: adds columns to the pre-existing rows & columns acorrdingly.
			row.innerHTML = row.innerHTML + createColumns;
		}
	}


for(let in = 0;in<rows;in++)
	{
	let row = document.getElementsByTagName("tr")[in];
		//Script to add a coordinate system to table cells. Later on, used for inputting data to the Table.
		for(let xy = 0; xy<columns; xy++)
		{
			let dataCell = row.getElementsByTagName("td')[xy];
			//Simple Script: Adds coordinates accordingly
			dataCell.setAttribute("coordinate", (xy) + "," + (in));
		}
	}
}
