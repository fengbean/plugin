import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SelectComponent} from './select.component'

@Component({
  selector: 'select-search',
  templateUrl: './select.component.1.html',
 styleUrls: ['./select.component.css'],
})
export class SelectShowComponent
{
    @Input()
    treeArrS;
    selectValue:string;
    onVoted(value){
        this.selectValue=value;
        console.log(value,this.selectValue)
    }

    showList:boolean=false;
    showTree(){
        console.log("jjjj")
        this.showList ? this.showList=false : this.showList=true;
    }
}
