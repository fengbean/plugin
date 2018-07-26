import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitySelectService} from './citySelect.service';

@Component({
  selector: 'citySelect',
  templateUrl: './citySelect.component.html',
  styleUrls: ['./citySelect.component.css']
})
export class CitySelectComponent
{

  @Input() public isShowThree;
  public pro:any[];
  public cityArr:any[];
  public areaArr:any[];
  constructor(public cityservice:CitySelectService){
    this.pro=this.cityservice.allpro();
  }



  //当前的省,市，区
  private _currentProvinceCode = '';
  @Output() public onVotedpro = new EventEmitter<string>();
  private _currentCityCode = '';
  @Output() public onVotedcity = new EventEmitter<string>();
  private _currentAreaCode = '';
  @Output() public onVotedarea = new EventEmitter<string>();



  //获得省
  @Input()
  set currentProvinceCode(procode: string) {
    this._currentProvinceCode = procode;
    if(procode!="")
    {
      this.cityArr=this.cityservice.allcity(procode)
    }
    this.onVotedpro.emit(this._currentProvinceCode);
    
  }
  get currentProvinceCode(): string {  return this._currentProvinceCode; }

 //获得市
@Input()
  set currentCityCode(citycode:string) {
    this._currentCityCode = citycode;
    if(citycode!="")
    {
      this.areaArr=this.cityservice.allarea(this._currentProvinceCode,this._currentCityCode)
    }
     this.onVotedcity.emit(this._currentCityCode);
     
  }
  get currentCityCode(): string { return this._currentCityCode; }


//获得区
  @Input()
  set currentAreaCode(acode: string) {
    this._currentAreaCode = acode;
    this.onVotedarea.emit(this._currentAreaCode);
    
  }
  get currentAreaCode(): string { return this._currentAreaCode; }


 
}
