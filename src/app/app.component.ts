import { Component, EventEmitter, Input, Output,ElementRef ,Renderer2,ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Directive, HostListener,OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    
//   @ViewChild('div3') div3:ElementRef;
//   @HostListener('mouseenter',['div3']) mouseover() {
//     this.div3.nativeElement.style.border = '1px solid red';
//   };
 
//   @HostListener('mouseleave') mouseleave() {
//     this.div3.nativeElement.style.border = '';
//   }


  move(){
      console.log("kkkkk")
  }
  down(){
      console.log("jjjjjjjjjjj")
  }



  

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','视频广告1']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            width:'auto',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日','ss','gg','ds'],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        textStyle: {
            width:'100px',
        },
        
        series : [
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                barWidth: '23px',
                itemStyle: {
                    color:'#7A8BFF'
                },
                data:[120, 132, 101, 134, 90, 230, 210,89, 101, 134]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '广告',
                itemStyle: {
                    color:'#54C9BA'
                },
                data:[220, 182, 191, 234, 290, 330, 310, 101, 134,468]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                itemStyle: {
                    color:'#4A8BFF'
                },
                data:[150, 232, 201, 154, 190, 330, 410, 101, 134,42]
            },
            {
                name:'视频广告1',
                type:'bar',
                stack: '广告',
                itemStyle: {
                    color:'#69C2FF'
                },
                data:[150, 232, 201, 154, 190, 330, 410, 101, 134,42]
            }
        ]
    };
    option1 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            width:'auto',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日','ss','gg','ds'],
                nameRotate: '48deg'
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        textStyle: {
            width:'100px',
        },
        
        series : [
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                barWidth: '23px',
                itemStyle: {
                    color:'#7A8BFF',
                    barBorderRadius: [15, 15, 0, 0]
                },
                data:[120, 132, 101, 134, 90, 230, 210,89, 101, 134]
            }
        ]
    };
    option2={
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:['#7A8BFE','#C58FFF','#54C9B8','#69C0FF','#4A8BFF'],
        grid:{
            top:'25%',
            left:'25%',
            right:'25%',
            bottom:'25%',
        },
        legend: {
            orient: 'vertical',
            top:50,
            x:'right',
            data:['金天鹅软件管理系统','千里眼系统','智能房价牌系统','会员管理系统','点菜收银机']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'金天鹅软件管理系统'},
                    {value:5, name:'千里眼系统'},
                    {value:5, name:'智能房价牌系统'},
                    {value:10, name:'会员管理系统'},
                    {value:15, name:'点菜收银机'}
                ]
            }
        ]
    };
    setTime;


    name = "fd";
    condition = true;
    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1' },
                {
                    id: 6,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub' }
                    ]
                }
            ]
        }
    ];
    options = {};

    public totalitems = 20;
    public pageitems = 6;
    changepages(showpage) {
        console.log(showpage, "当前页数")
    }



    public setpro = "";
    public setcity = "";
    public setarea = "";
    uiTree;

    constructor(translate: TranslateService) {
        //调用树
        // this.uiTree=this.tree(this.list,0);
        // setTimeout(()=>{
        //   this.setpro="430000";
        //   this.setcity="430200";
        //   this.setarea="430211";
        // },2000);
        //调用日期

        translate.addLangs(["zh", "en"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        

    }

    public flag: string = '3';
    public viewpro;
    public viewcity;
    public viewarea;
    onVotedpro(pro: string) {
        this.viewpro = pro;
        console.log(pro)
    }
    onVotedcity(city: string) {
        this.viewcity = city;
        console.log(city)
    }
    onVotedarea(area: string) {
        this.viewarea = area;
        console.log(area)
    }

    chartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    }


   

    ngOnInit() {
        this.setTime=new Date(2019,1,1);
        this.uiTree=this.tree(this.list,0);
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
    
  
    list = [
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
    treeArr = [
        {
            "id": 105,
            "resourceCode": "C000061306",
            "resourceName": "价格体系",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 121,
            "resourceCode": "C00007",
            "resourceName": "店小二",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "1",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 39,
            "resourceCode": "C000060201",
            "resourceName": "普通预订",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 137,
            "resourceCode": "C00006130702",
            "resourceName": "租借物品列表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061307",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 55,
            "resourceCode": "C000060501",
            "resourceName": "会员",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000605",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 154,
            "resourceCode": "C000060101",
            "resourceName": "服务",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 73,
            "resourceCode": "C000060701",
            "resourceName": "中介",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000607",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 89,
            "resourceCode": "C00006100201",
            "resourceName": "货品入库",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061002",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 104,
            "resourceCode": "C000061305",
            "resourceName": "开票设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 120,
            "resourceCode": "C000061504",
            "resourceName": "夜审",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000615",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 136,
            "resourceCode": "C00006130701",
            "resourceName": "租借物品类型",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061307",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 54,
            "resourceCode": "C000060409",
            "resourceName": "赔偿记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 153,
            "resourceCode": "C000061203",
            "resourceName": "交班报表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000612",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 72,
            "resourceCode": "C00006060106",
            "resourceName": "账务查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 88,
            "resourceCode": "C00006100101",
            "resourceName": "货品列表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061001",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 103,
            "resourceCode": "C000061304",
            "resourceName": "损物赔偿",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 119,
            "resourceCode": "C000061503",
            "resourceName": "走结订单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000615",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 135,
            "resourceCode": "C00006130402",
            "resourceName": "损物赔偿物品",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061304",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 53,
            "resourceCode": "C000060408",
            "resourceName": "租借记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 152,
            "resourceCode": "C000061202",
            "resourceName": "仓库报表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000612",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 71,
            "resourceCode": "C00006060105",
            "resourceName": "账务处理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 87,
            "resourceCode": "C000061001",
            "resourceName": "货品商品管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000610",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 102,
            "resourceCode": "C000061303",
            "resourceName": "交班设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 118,
            "resourceCode": "C000061502",
            "resourceName": "应离未离订单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000615",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 134,
            "resourceCode": "C00006130401",
            "resourceName": "损物赔偿类型",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061304",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 52,
            "resourceCode": "C000060407",
            "resourceName": "失物认领",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 151,
            "resourceCode": "C000061201",
            "resourceName": "营业报表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000612",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 70,
            "resourceCode": "C00006060104",
            "resourceName": "账套管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 86,
            "resourceCode": "C00006100401",
            "resourceName": "仓库管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061004",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 101,
            "resourceCode": "C000061302",
            "resourceName": "财务",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 117,
            "resourceCode": "C000061501",
            "resourceName": "应到未到订单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000615",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 133,
            "resourceCode": "C00006130302",
            "resourceName": "班次管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061303",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 51,
            "resourceCode": "C000060406",
            "resourceName": "日志查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 149,
            "resourceCode": "C0000613060203",
            "resourceName": "配置会员计费",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 69,
            "resourceCode": "C00006060103",
            "resourceName": "收款查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 85,
            "resourceCode": "C000060903",
            "resourceName": "房扫查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000609",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 100,
            "resourceCode": "C000061301",
            "resourceName": "基础设施",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 116,
            "resourceCode": "C000061402",
            "resourceName": "现付账记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000614",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 132,
            "resourceCode": "C00006130301",
            "resourceName": "交班模式",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061303",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 50,
            "resourceCode": "C000060405",
            "resourceName": "预授权查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 148,
            "resourceCode": "C0000613060202",
            "resourceName": "时租房计费",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 68,
            "resourceCode": "C00006060102",
            "resourceName": "行动记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 84,
            "resourceCode": "C000060902",
            "resourceName": "房态日志",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000609",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 99,
            "resourceCode": "C000061101",
            "resourceName": "前台交班",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000611",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 115,
            "resourceCode": "C000061401",
            "resourceName": "现付账",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000614",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 131,
            "resourceCode": "C00006130105",
            "resourceName": "房锁信息",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061301",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 49,
            "resourceCode": "C000060404",
            "resourceName": "发票查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 147,
            "resourceCode": "C0000613060201",
            "resourceName": "全天房计费",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 67,
            "resourceCode": "C00006060101",
            "resourceName": "单位管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 165,
            "resourceCode": "C000061005",
            "resourceName": "固定资产管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000610",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 83,
            "resourceCode": "C000060901",
            "resourceName": "维修记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000609",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 98,
            "resourceCode": "C00006100403",
            "resourceName": "货品规格管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061004",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 114,
            "resourceCode": "C000061315",
            "resourceName": "会员设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 130,
            "resourceCode": "C00006130104",
            "resourceName": "房间信息",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061301",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 48,
            "resourceCode": "C000060403",
            "resourceName": "团队管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 146,
            "resourceCode": "C0000613060103",
            "resourceName": "中介策略",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 66,
            "resourceCode": "C000060601",
            "resourceName": "协议单位",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000606",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 164,
            "resourceCode": "C00006100505",
            "resourceName": "报废管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061005",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 82,
            "resourceCode": "C000060802",
            "resourceName": "积分换房",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000608",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 97,
            "resourceCode": "C00006100402",
            "resourceName": "货品类别管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061004",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 113,
            "resourceCode": "C000061314",
            "resourceName": "库存设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 129,
            "resourceCode": "C00006130103",
            "resourceName": "楼栋楼层",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061301",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 47,
            "resourceCode": "C000060402",
            "resourceName": "订单查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 145,
            "resourceCode": "C0000613060102",
            "resourceName": "单位策略",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 65,
            "resourceCode": "C00006050204",
            "resourceName": "发放日志",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060502",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 163,
            "resourceCode": "C00006100504",
            "resourceName": "维修管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061005",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 81,
            "resourceCode": "C000060801",
            "resourceName": "充值规则",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000608",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 96,
            "resourceCode": "C000061004",
            "resourceName": "设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000610",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 112,
            "resourceCode": "C000061313",
            "resourceName": "夜审设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 128,
            "resourceCode": "C00006130102",
            "resourceName": "虚拟房型",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061301",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 46,
            "resourceCode": "C000060401",
            "resourceName": "预订单查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000604",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 144,
            "resourceCode": "C0000613060101",
            "resourceName": "会员策略",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00006130601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 64,
            "resourceCode": "C00006050203",
            "resourceName": "券查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060502",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 162,
            "resourceCode": "C00006100503",
            "resourceName": "领用易耗物资",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061005",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 80,
            "resourceCode": "C00006070107",
            "resourceName": "佣金策略管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 95,
            "resourceCode": "C000061003",
            "resourceName": "营业点",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000610",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 111,
            "resourceCode": "C000061312",
            "resourceName": "前台业务参数设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 127,
            "resourceCode": "C00006130101",
            "resourceName": "房型维护",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061301",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 45,
            "resourceCode": "C000060304",
            "resourceName": "早餐券管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000603",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 143,
            "resourceCode": "C00006130602",
            "resourceName": "计费规则",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061306",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 63,
            "resourceCode": "C00006050202",
            "resourceName": "赠房券",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060502",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 161,
            "resourceCode": "C00006100502",
            "resourceName": "领用固定资产",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061005",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 79,
            "resourceCode": "C00006070106",
            "resourceName": "佣金管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 94,
            "resourceCode": "C00006100102",
            "resourceName": "商品列表",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061001",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 110,
            "resourceCode": "C000061311",
            "resourceName": "打印设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 126,
            "resourceCode": "C000061102",
            "resourceName": "交班记录",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000611",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 44,
            "resourceCode": "C000060303",
            "resourceName": "时租入住",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000603",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 142,
            "resourceCode": "C00006130601",
            "resourceName": "价格策略",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061306",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 62,
            "resourceCode": "C00006050201",
            "resourceName": "无门槛券",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060502",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 160,
            "resourceCode": "C00006100404",
            "resourceName": "供应商管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061004",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 78,
            "resourceCode": "C00006070105",
            "resourceName": "账务处理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 93,
            "resourceCode": "C000061002",
            "resourceName": "库存管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000610",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 109,
            "resourceCode": "C000061310",
            "resourceName": "酒店硬件",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 125,
            "resourceCode": "C00006050106",
            "resourceName": "储值账单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060501",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 43,
            "resourceCode": "C000060302",
            "resourceName": "团队入住",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000603",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 141,
            "resourceCode": "C00006131102",
            "resourceName": "打印格式",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061311",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 61,
            "resourceCode": "C000060502",
            "resourceName": "券管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000605",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 159,
            "resourceCode": "C000060204",
            "resourceName": "预订单改价",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 77,
            "resourceCode": "C00006070104",
            "resourceName": "收款查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 92,
            "resourceCode": "C00006100204",
            "resourceName": "货品库存统计",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061002",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 108,
            "resourceCode": "C000061309",
            "resourceName": "酒店服务项目",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 124,
            "resourceCode": "C0000703",
            "resourceName": "接收点评消息",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00007",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 42,
            "resourceCode": "C000060301",
            "resourceName": "普通入住",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000603",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 140,
            "resourceCode": "C00006131101",
            "resourceName": "打印参数",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061311",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 60,
            "resourceCode": "C00006050105",
            "resourceName": "操作日志",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060501",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 158,
            "resourceCode": "C000060305",
            "resourceName": "订单改价",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000603",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 76,
            "resourceCode": "C00006070103",
            "resourceName": "账套管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 91,
            "resourceCode": "C00006100203",
            "resourceName": "库存调拨",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061002",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 107,
            "resourceCode": "C000061308",
            "resourceName": "房态设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 123,
            "resourceCode": "C0000702",
            "resourceName": "接收服务订单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00007",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 41,
            "resourceCode": "C000060203",
            "resourceName": "长包房预订",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 139,
            "resourceCode": "C00006130802",
            "resourceName": "间夜数设置",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061308",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 59,
            "resourceCode": "C00006050104",
            "resourceName": "积分查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060501",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 156,
            "resourceCode": "C000060103",
            "resourceName": "单据",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 75,
            "resourceCode": "C00006070102",
            "resourceName": "账务查询",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 106,
            "resourceCode": "C000061307",
            "resourceName": "租赁物品",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000613",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 122,
            "resourceCode": "C0000701",
            "resourceName": "接收维修订单",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C00007",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 40,
            "resourceCode": "C000060202",
            "resourceName": "团队预订",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000602",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 138,
            "resourceCode": "C00006130801",
            "resourceName": "门店房态颜色",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061308",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 56,
            "resourceCode": "C00006050101",
            "resourceName": "会员信息管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060501",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 155,
            "resourceCode": "C000060102",
            "resourceName": "账务",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C0000601",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 74,
            "resourceCode": "C00006070101",
            "resourceName": "中介管理",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000060701",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 90,
            "resourceCode": "C00006100202",
            "resourceName": "货品出库",
            "url": null,
            "isuse": null,
            "sort": null,
            "parentCode": "C000061002",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 27,
            "resourceCode": "C0000604",
            "resourceName": "订单",
            "url": null,
            "isuse": null,
            "sort": "10",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 28,
            "resourceCode": "C0000605",
            "resourceName": "会员",
            "url": null,
            "isuse": null,
            "sort": "11",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 29,
            "resourceCode": "C0000606",
            "resourceName": "单位",
            "url": null,
            "isuse": null,
            "sort": "12",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 30,
            "resourceCode": "C0000607",
            "resourceName": "中介",
            "url": null,
            "isuse": null,
            "sort": "13",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 31,
            "resourceCode": "C0000608",
            "resourceName": "市场活动",
            "url": null,
            "isuse": null,
            "sort": "14",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 32,
            "resourceCode": "C0000609",
            "resourceName": "房间",
            "url": null,
            "isuse": null,
            "sort": "15",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 33,
            "resourceCode": "C0000610",
            "resourceName": "库存",
            "url": null,
            "isuse": null,
            "sort": "16",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 34,
            "resourceCode": "C0000611",
            "resourceName": "交班",
            "url": null,
            "isuse": null,
            "sort": "17",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 35,
            "resourceCode": "C0000612",
            "resourceName": "报表",
            "url": null,
            "isuse": null,
            "sort": "18",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 36,
            "resourceCode": "C0000613",
            "resourceName": "系统",
            "url": null,
            "isuse": null,
            "sort": "19",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 37,
            "resourceCode": "C0000614",
            "resourceName": "现付账",
            "url": null,
            "isuse": null,
            "sort": "20",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 38,
            "resourceCode": "C0000615",
            "resourceName": "夜审",
            "url": null,
            "isuse": null,
            "sort": "21",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 23,
            "resourceCode": "C00006",
            "resourceName": "CPMS",
            "url": null,
            "isuse": null,
            "sort": "6",
            "parentCode": "1",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 24,
            "resourceCode": "C0000601",
            "resourceName": "首页",
            "url": null,
            "isuse": null,
            "sort": "7",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 25,
            "resourceCode": "C0000602",
            "resourceName": "预订",
            "url": null,
            "isuse": null,
            "sort": "8",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 26,
            "resourceCode": "C0000603",
            "resourceName": "入住",
            "url": null,
            "isuse": null,
            "sort": "9",
            "parentCode": "C00006",
            "creator": null,
            "createTime": null,
            "type": "1"
        },
        {
            "id": 2423,
            "resourceCode": "1_21",
            "resourceName": "云服务器",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        },
        {
            "id": 2422,
            "resourceCode": "1_18",
            "resourceName": "云pms",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        },
        {
            "id": 1886,
            "resourceCode": "1_9",
            "resourceName": "服务监控",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        },
        {
            "id": 1884,
            "resourceCode": "1_4",
            "resourceName": "酒店网站",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        },
        {
            "id": 1885,
            "resourceCode": "1_2",
            "resourceName": "酒店预定",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        },
        {
            "id": 1883,
            "resourceCode": "1_1",
            "resourceName": "千里眼监控",
            "url": null,
            "isuse": null,
            "sort": "9999",
            "parentCode": "0",
            "creator": null,
            "createTime": null,
            "type": "2"
        }
    ]






}