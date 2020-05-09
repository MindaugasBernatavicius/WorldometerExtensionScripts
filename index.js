const COUNTRY_NAME = 1;
const TOTAL_INFECTED = 3;
$('#main_table_countries_today > tbody:nth-child(2) > tr').toArray()
	.filter(x => { 
		if((x.className === 'odd' || x.className === 'even') && 
			(x.childNodes[COUNTRY_NAME].textContent == 'France' || 
				x.childNodes[COUNTRY_NAME].textContent == 'Germany' ||
				x.childNodes[COUNTRY_NAME].textContent == 'Spain' ||
				x.childNodes[COUNTRY_NAME].textContent == 'Portugal' ||
				x.childNodes[COUNTRY_NAME].textContent == 'Italy' ||
				x.childNodes[COUNTRY_NAME].textContent == 'UK')
		) return x; })
	.forEach(y => console.log(y.childNodes[TOTAL_INFECTED].textContent));
	
  
// TODO ::
// 1. make it tab aware (now vs yesterday).
// 2. perform reduction on multiple variables
// 3. add final tempermonkey script
// 4. blog it, video it 
