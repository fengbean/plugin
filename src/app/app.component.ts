import { Component, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

    
    
    name="fd";
    condition=true;
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

  public totalitems=20;
  public pageitems=6;
  changepages(showpage){
    console.log(showpage,"当前页数")
  }



  public setpro="";
  public setcity="";
  public setarea="";


  constructor(){
    // setTimeout(()=>{
    //   this.setpro="430000";
    //   this.setcity="430200";
    //   this.setarea="430211";
    // },2000);
    this.getCountDays(this.currentYear,this.currentMonth);
    this.getDateSection(this.currentYear,this.currentMonth)
  }

  public flag: string = '3';
  public viewpro;
  public viewcity;
  public viewarea;
  onVotedpro(pro:string){
    this.viewpro=pro;
    console.log(pro)
  }
  onVotedcity(city:string){
    this.viewcity=city;
    console.log(city)
  }
  onVotedarea(area:string){
    this.viewarea=area;
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
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
      }
  },
  legend: {
      data:['蒸发量','降水量','平均温度']
  },
  xAxis: [
      {
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
          name:'蒸发量',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
          name:'平均温度',
          type:'line',
          yAxisIndex: 1,
          data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
  ]
  }


  public myDate=new Date();
  currentYear=this.myDate.getFullYear(); //当前年
  currentMonth=this.myDate.getMonth();   //月
  currentDay=this.myDate.getDate();   //日
  totalDay;//当前月总共多少天
  lastMonthDay;//上个月展示多少天
  nextMonthDay;//下个月展示多少天
  currentShow:any=[];//当前月展示的数组

     getCountDays(year,month) {
         this.currentShow=[];
        /* 返回当月,上月，下月的天数 */
        this.totalDay= new Date(Date.UTC(year,month+1, 0)).getDate();
        this.lastMonthDay=new Date(Date.UTC(year,month, 1)).getDay();
        this.nextMonthDay=new Date(Date.UTC(year,month,  this.totalDay)).getDay();
        console.log("当年",year)
        console.log("当月",month+1)
        console.log("当日",this.currentDay)
        console.log("当月的天数",this.totalDay)
        console.log("月初是周几",this.lastMonthDay)
        console.log("月末是周几",this.nextMonthDay)
        //   判断上个需要展示几天，下个月需要展示几天，形成一个数组
        let lastMonthShow;
        // if(this.lastMonthDay==0){
        //     lastMonthShow=7;
        // }
        // else{
            lastMonthShow=this.lastMonthDay;
        // }    
        for(let i=1;i<=lastMonthShow;i++){
            this.currentShow.push({name:i,month:"last"})
        }
        for(let i=1;i<=this.totalDay;i++){
            this.currentShow.push({name:i,month:"current"})
        }
        let nextMonthShow;
        if(this.nextMonthDay==6){
            nextMonthShow=7;
        }
        else{
            nextMonthShow=7-1-this.nextMonthDay;
        }
        if(this.currentShow.length<35){
            nextMonthShow=nextMonthShow+7;
        }
        for(let i=1;i<=nextMonthShow;i++){
            this.currentShow.push({name:i,month:"next"})
        }
        console.log("this.currentShow",this.currentShow);
        return this.currentShow;
    }

//获取上月数据
    getLastMonth(ele){
        if(ele=="lastMonth"){
            if(this.currentMonth==0){
                this.currentMonth=11;
            }
            else{
                this.currentMonth=this.currentMonth-1;
            }
        }
        else if(ele=="nextMonth"){
            if(this.currentMonth==11){
                this.currentMonth=0;
            }
            else{
                this.currentMonth=this.currentMonth+1;
            }
        }
        else if(ele=="lastYear"){
            if(this.currentYear==1970){
                this.currentYear=1970;
            }
            else{
                this.currentYear=this.currentYear-1;
            }
        }
        else if(ele=="nextYear"){
            this.currentYear=this.currentYear+1;
        }
        this.getCountDays(this.currentYear,this.currentMonth);
    }

    // 选择日期
    selectedDate;
    changeDate(day){
        if(day.month=="current"){
            this.selectedDate=day.name;
        }
    }
    

    // 获取当前时间以及选择时间
    selectDate=true;
    hour=this.myDate.getHours(); //获取当前小时数(0-23)
    minites=this.myDate.getMinutes(); //获取当前分钟数(0-59)
    second=this.myDate.getSeconds(); //获取当前秒数(0-59)
    selectedhour;
    selectedminites;
    selectedsecond;
    public hourArr=[];
    public minitesArr=[];
    public secondArr=[];
    ngOnInit() {
        for(let i=0;i<24;i++){
            if(i<10){
                this.hourArr.push("0"+i)
            }
            else{
                this.hourArr.push(i)
            }
            
        }
        for(let i=0;i<60;i++){
            if(i<10){
                this.minitesArr.push("0"+i)
            }
            else{
                this.minitesArr.push(i)
            }
        }
        this.secondArr=this.minitesArr;
    }
    selectHour(hour){
        this.selectedhour=hour;
        this.hour=hour;
    }
    selectMinites(minites){
        this.selectedminites=minites;
        this.minites=minites;
    }
    selectSecond(second){
        this.selectedsecond=second;
        this.second=second;
    }
    changeSelect(n){
        if(n=="0"){
            this.selectDate=false;
        }else{
            this.selectDate=true;
        }
    }


    // 日期连选，获取当前月以及下个月
    /**
     * 1.获取当月天数，以及当天，当天之前的天数置灰不能选择
     * 2.获取下月天数
     */
    public twoMonth=[];
    currentMonthArr=[];//当月
    nextMonthArr=[];//下月
    startTime;//开始日期
    endTime;//结束日期
    dateSecond;//日期区间
    getDateSection(year,month){
        let nextMonth;
        if(month==11){
            nextMonth=0;
        }
        else{
            nextMonth=month+1;
        }
        // this.totalDay= new Date(Date.UTC(year,month+1, 0)).getDate();
        this.currentMonthArr=this.getCountDays(year,month);
        this.nextMonthArr=this.getCountDays(year,nextMonth);
        this.twoMonth=[];
        this.twoMonth=this.currentMonthArr.concat(this.nextMonthArr);
        console.log("this.currentShow",this.currentShow)
        console.log("this.nextMonthArr",this.nextMonthArr)
        console.log("this.twoMonth",this.twoMonth)
    }
    public temArr=[];
    public selectArr=[];
    selectStart(start,i){
        console.log("i",i)
        i=i+1;
        if(i>=this.currentDay){
            /**
             * 判断当前选中了几个日期
             * 如果当前没选中日期，则当前选中的日期为开始日期
             * 如果当前已选中一个日期，则当前选中的日期为结束日期
             * 如果当前已选中两个及以上日期，则当前选中的日期为开始日期
             */
            this.selectArr=[];
            this.selectArr=this.twoMonth.filter(e=>{
                return e.isSelect==true;
            })
            if(this.selectArr.length==0){
                start.isSelect=true;
                this.startTime=start.name;
            }
            else if(this.selectArr.length==1){
                this.endTime=start.name;
                if(this.endTime>this.startTime){
                    for(let i=this.startTime;i<=this.endTime;i++){
                        this.temArr.push(i);
                    }
                }
                else{
                    for(let i=this.endTime;i<=this.startTime;i++){
                        this.temArr.push(i);
                    }
                }
                this.temArr.forEach(e=>{
                    this.twoMonth.forEach(j=>{
                        if(e==j.name){
                            j.isSelect=true;
                        }
                    })
                })
            }
            else if(this.selectArr.length>=2){
                this.temArr=[];
                this.twoMonth.forEach(e=>{e.isSelect=false});
                start.isSelect=true;
                this.startTime=start.name;
            }
            
        }
        console.log("this.temarr",this.temArr)
    }
    selectEnd(end){
        
    }
}
