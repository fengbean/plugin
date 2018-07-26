import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'pagenation',
  templateUrl: './pagenation.component.html',
 styleUrls: ['./pagenation.component.css'],
})
export class PagenationComponent
{
 
 public totalpage=Math.ceil(this.totalitem/this.pageitem);//总页数
 public lastpageitem=this.totalitem % this.pageitem; //最后一页显示的条数,要做判断，是否是最后一页，最后一页显示页数并不一定一样
 public isFirst:boolean=true;//判断是否是第一页
 public isLast:boolean=false;//判断是否是最后一页
 public prepage;//当前页的前一页
 public nextpage;//当前页的后一页
 
  
 private _totalitem;//总条数
 private _pageitem;//每页显示条数
 
 @Input()
 set totalitem(totalitem:any){
   console.log(totalitem,"总数量")
   this._totalitem=totalitem;
  // this.caculatePage();
   this.totalpage= Math.floor((this._totalitem  +  this._pageitem  - 1) / this._pageitem)
    //this.totalpage=Math.ceil(this._totalitem/this._pageitem);//总页数
   // console.log(this.totalpage)
 }
 get totalitem()
  {
    return this._totalitem;
  }

  @Input()
  set pageitem(pageitem:any){
  console.log(pageitem,"展示数量")
   this._pageitem=pageitem;
   this.totalpage= Math.floor((this._totalitem  +  this._pageitem  - 1) / this._pageitem);
    //this.totalpage=Math.ceil(this._totalitem/this._pageitem);//总页数
    //console.log(this.totalpage)
 }
 get pageitem()
  {
    return this._pageitem;
  }



@Output() 
public changepage = new EventEmitter<string>();


 
  private _nowpage;

  public arr=[];

  
  caculatePage()
  {
    this.arr=[];
    for(let i = 1; i <= this.totalitem; i++){
      this.arr.push(i);
      if((i%3)===0&&this. _nowpage===i){
        return this.arr;
      }
      break;
    }
      return this.arr;
  }
  
  set nowpage(nowpage:any)
  {
    this._nowpage=nowpage;
    this.prepage=this._nowpage+1;
    this.nextpage=this._nowpage+2;
    //console.log(this._nowpage,"aa");
    this.isFirst=false;
    this.isLast=false;
   // this.pageitem=10;
    if(this._nowpage===0)
    {
      this.isFirst=true;
      this.isLast=true;
    }
    if(this._nowpage===1)
    {
      //alert("aa")
      this.isFirst=true;
    }
    if(this._nowpage===this.totalpage)
    {
      //this.pageitem=this.lastpageitem;
      this.isLast=true;
    }
  }
  get nowpage()
  {
    return this._nowpage;
  }

 ngOnInit()
 {
   if(this.totalpage>0){
    this.nowpage=1;
   }
   else{
     this.nowpage=0;
   }
  
 }
 addpage()  
{
 // alert(this.nowpage);
  if(this.nowpage<this.totalpage){
    this.nowpage=this.nowpage+1;
    this.changepage.emit(this.nowpage)
  }
}
minuspage(){
  if(this.nowpage>1){
    this.nowpage=this.nowpage-1;
    this.changepage.emit(this.nowpage)
  }
}
firstpage(){
  this.nowpage=1;
  this.changepage.emit(this.nowpage);
}
lastpage(){
   this.nowpage=this.totalpage;
   this.changepage.emit(this.nowpage);
}

 
}
