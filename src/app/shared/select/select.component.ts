import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'select-search',
  templateUrl: './select.component.html',
 styleUrls: ['./select.component.css'],
})
export class SelectComponent
{
    public arr;//初始化数组
    public list;//循环数组
    public selectedvalue="1";
    private _selected;
    public isShowList=false;//下拉框
    public isSelect=false;//选中对象标识
    public brforeSelected;

    constructor(){
        this.list=[
            {
                name:"一级1",
                children:[{value:"1",name:"二级1",isSelect:false},{value:"2",name:"二级2",isSelect:false},{value:"3",name:"二级3",isSelect:false}]
            },
            {
                name:"一级1",
                children:[{value:"4",name:"二级1",isSelect:false},{value:"5",name:"二级2",isSelect:false},{value:"6",name:"二级3",isSelect:false}]
            }
        ]
        let temA=JSON.stringify(this.list);
        this.arr=JSON.parse(temA);
        
    }

    set selected(selected:string){
        // console.log(selected)
        this._selected=selected;
        if(selected!=""){
            let temA=JSON.parse(JSON.stringify(this.arr));
            // console.log("temA",temA)
            this.list=temA.map(element => {
                if(element.hasChild){
                    element.children=element.children.filter(s=>{
                       if(s.name.indexOf(selected)!=-1){
                           return s;
                       }
                    })
                    console.log("element.children",element.children)
                    if(element.children.length==0){
                        element.hasChild=false;
                    }
                }
                return element;
            });
        }else if(selected==""||selected==undefined||selected==null){
            this.list=this.arr;
        }
        
    }
    get selected():string{
        this.list.forEach(element => {
            element.children.forEach(e => {
                if(e.value==this.selectedvalue){
                    e.isSelect=true;
                    this._selected=e.name;
                }else{
                    e.isSelect=false;
                }
            });
        });

        return this._selected;
    }
    
    //选择
    select(obj){
        this.selectedvalue=obj.value;
        this.isShowList=false;
        this.list.forEach(element => {
            element.children.forEach(e => {
                e.isSelect=false;
            });
        });
        obj.isSelect=true;
    }
    showList(){
        this.brforeSelected=this.selected;
        // this.selectedvalue=""
        this.isShowList=true;
        // this._selected=""
        // console.log("pp",this._selected)
    }
    close(){
        setTimeout(()=>this.isShowList=false,300);
        
    }
    
}
