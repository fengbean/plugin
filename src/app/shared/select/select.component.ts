import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'selectss',
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
    @Input()
    treeArr;
    // @Input()
    // showInput=false;
    @Output() voted = new EventEmitter<boolean>();
    vote(name) {
        console.log("ddddd",name)
        this.voted.emit(name);
        console.log("emit",name)
      }
      again(event){
        this.voted.emit(event);
      }

    ngOnInit(){
        // this.treeArr=this.tree(this.listArr,0);
        console.log("jjjjjjjjjjjjjjjjjj",this.treeArr)
    }

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


     /**
     * 无限树循环，利用递归
     * 1.传入数组，以及父元素parentCode
     * 2.循环数组，判断当前数组的的resourceCode是否与传入code相等，相等则push到当前对象的children属相中
     * 3.调用自身函数，传入数组以及当前对象的resourcecode
     * this.tree(this.treeArr,0);
     */
    tree(arr,code) {
        let items= [];
        arr.forEach(e=>{
            if(e.parentCode==code){
                items.push(e);
                if(code!=0){
                    arr.find(e=>e.resourceCode==code).children=items;
                }
                this.tree(arr,e.resourceCode);
            }
        })
        console.log("items",items);
        return items;
    }
    
  
    listArr = [
        {resourceCode: 1, name: '超级管理', parentCode: 0},
        {resourceCode: 2, name: '用户管理', parentCode: 1},
        {resourceCode: 3, name: '部门管理', parentCode: 1},
        {resourceCode: 4, name: '日志管理', parentCode: 1},
        {resourceCode: 5, name: '操作用户', parentCode: 2},
        {resourceCode: 6, name: '查看用户', parentCode: 2},
        {resourceCode: 7, name: '用户新增', parentCode: 5},
        {resourceCode: 8, name: '用户删除', parentCode: 5},
        {resourceCode: 9, name: '用户修改', parentCode: 5},
        {resourceCode: 10, name: '操控部门', parentCode: 3},
        {resourceCode: 11, name: '查看部门', parentCode: 3},
        {resourceCode: 12, name: '部门新增', parentCode: 10},
        {resourceCode: 13, name: '部门删除', parentCode: 10},
        {resourceCode: 14, name: '部门修改', parentCode: 10},
        {resourceCode: 15, name: '日志查看', parentCode: 4},
        {resourceCode: 16, name: '日志导出', parentCode: 4}
      ];
 
      selectValue:any;
      valuechange(item){
        this.selectValue=item;
        console.log(item,this.selectValue)
      }
}
