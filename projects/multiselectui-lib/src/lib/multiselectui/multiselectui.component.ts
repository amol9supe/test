import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'multiSelect',
  templateUrl: './multiselectui.component.html',
  styleUrls: ['./multiselectui.component.css']
})
export class MultiselectuiComponent implements OnInit {
	
 countryLists: any;
 address: any;
 @Input() filter: any;
 @Input() filterBy: any;
 @Input() options: any;
 countriesArrTemp: any;
 checkCountriesArr:any = [];
 listHtml:boolean = false;
 arrowDown:string = "arrowDown";
 arrowUp:string = "arrowUp";
 selectedOptionsHtml: string = "";
 selectedOptionsHtmlTemp: string = "";

 constructor() { }

  ngOnInit(): void {

	this.countriesArrTemp = this.options;
	this.countriesArrResult();
  		
  }

  countriesArrResult(){ 
		for(let country of this.options){	
			country.isChecked = false;	
		};
	}

    onChange(event:any) {
    	let isCheck = event.target.checked;
    	if(isCheck == true){
    		this.checkCountriesArr.push(event.target.value)
    	}else{
    		var index = this.checkCountriesArr.indexOf(event.target.value);
			this.checkCountriesArr.splice(index, 1);
    	}
    	console.log(this.checkCountriesArr);

    	

	}

	onClickArrowDown(event:any){
		this.arrowDown = "arrowUp";
		this.listHtml = true;
	}

	onClickArrowUp(event:any){
		this.arrowUp = "arrowDown";
		this.listHtml = false;
	}
	
	searchCountry(filterValue:any){	
		this.listHtml = true;

		let filter = filterValue.target.value;
		let filterBy = this.filterBy;
		this.options = this.countriesArrTemp ;
		if (filter == '') {
			return this.options;
		}

		let filterByCondition = this.filterBy.split(',');

		if(filterByCondition == "label"){
			this.options = this.options.filter( (res: any) => {
				res.isChecked = false;
				for(let countryVal of this.checkCountriesArr){
					console.log(countryVal+'--'+res.label);
					if(countryVal == res.label){
						res.isChecked = true;
					}
				}

		        return res.label.toLowerCase().match(filter.toLowerCase());
		    });
		}else if(filterByCondition == "value"){
			this.options = this.options.filter( (res: any) => {
		        return res.value.toLowerCase().match(filter.toLowerCase());
		    });
		}
	     


	}

}
