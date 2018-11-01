import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerService } from './datepicker.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.less'],
})
export class DatepickerComponent {
    @Input() showWitch;

    //换肤
    badCurly = "style0";
    color(e) {
        this.badCurly = e;
    }
    //语言
    language(e) {
        if (e == 'zh') {
            this.translate.setDefaultLang('zh');

            // the lang to use, if the lang isn't available, it will use the current loader to get them
            this.translate.use('zh');
        } else {
            this.translate.setDefaultLang('en');

            // the lang to use, if the lang isn't available, it will use the current loader to get them
            this.translate.use('en');
        }
    }

    festivalDate = [];
    constructor(private datepickerservice: DatepickerService, private translate: TranslateService) {
        this.getDateSection(this.currentYear, this.currentMonth);
        this.getCountDays(this.currentYear, this.currentMonth);
        this.datepickerservice.getFestival().subscribe(e => {
            console.log("ddddddd", e)
            if (e.code == "200") {
                console.log(";;;;;;;;;;;;;;;;;;;", e.data)
                return this.festivalDate = e.data;
            }
        })

        translate.addLangs(["zh", "en"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    //判断是否为节假日
    fes = '';
    isFes(day, month) {
        this.fes = "";
        this.festivalDate.forEach(e => {
            let dataArr = e.date.split("-");
            if (day == dataArr[1] && month == dataArr[0]) {
                this.fes = e.fes;
                console.log("kkkkkkkkkkkkkkkkkk")
            }
        });
    }
    /**
      * 日期连选，日历，日期时间
      */
    public myDate = new Date();
    currentYear = this.myDate.getFullYear(); //当前年
    currentMonthinvariant = this.myDate.getMonth();   //当月,永远不改变
    currentMonth = this.myDate.getMonth();   //月
    currentDay = this.myDate.getDate();   //日
    totalDay;//当前月总共多少天
    lastMonthDay;//上个月展示多少天
    nextMonthDay;//下个月展示多少天
    currentShow: any = [];//当前月展示的数组

    getCountDays(year, month) {
        this.currentShow = [];
        /* 返回当月,上月，下月的天数 */
        this.totalDay = new Date(Date.UTC(year, month + 1, 0)).getDate();//当月有多少天
        this.lastMonthDay = new Date(Date.UTC(year, month, 1)).getDay();//当月月初是周几
        this.nextMonthDay = new Date(Date.UTC(year, month, this.totalDay)).getDay();//当月月末是周几
        console.log("当年", year)
        console.log("当月", month + 1)
        console.log("当日", this.currentDay)
        console.log("当月的天数", this.totalDay)
        console.log("月初是周几", this.lastMonthDay)
        console.log("月末是周几", this.nextMonthDay)
        //   判断上个需要展示几天，下个月需要展示几天，形成一个数组
        let lastTotalDay = new Date(Date.UTC(year, month, 0)).getDate();
        for (let i = 1; i <= this.lastMonthDay; i++) {
            this.isFes(lastTotalDay, month);
            this.currentShow.push({ name: lastTotalDay, month: month, fes: this.fes });
            lastTotalDay--;
        }
        this.currentShow = this.currentShow.reverse();
        for (let i = 1; i <= this.totalDay; i++) {
            this.isFes(i, (month + 1));
            this.currentShow.push({ name: i, month: month + 1, fes: this.fes })
        }
        let nextMonthShow;
        if (this.nextMonthDay == 6) {
            nextMonthShow = 7;
        }
        else {
            nextMonthShow = 7 - 1 - this.nextMonthDay;
        }
        if (this.currentShow.length < 35) {
            nextMonthShow = nextMonthShow + 7;
        }
        for (let i = 1; i <= nextMonthShow; i++) {
            this.isFes(i, (month + 2));
            this.currentShow.push({ name: i, month: month + 2, fes: this.fes })
        }
        console.log("this.currentShow", this.currentShow);
        return this.currentShow;
    }

    //获取上月数据
    getLastMonth(ele) {
        console.log("this.currentMonth", this.currentMonth)
        if (ele == "lastMonth") {
            if (this.currentMonth == 0) {
                this.currentMonth = 11;
            }
            else {
                this.currentMonth = this.currentMonth - 1;
            }
        }
        else if (ele == "nextMonth") {
            if (this.currentMonth == 11) {
                this.currentMonth = 0;
            }
            else {
                this.currentMonth = this.currentMonth + 1;
                console.log("this.currentMonth", this.currentMonth)
            }
        }
        else if (ele == "lastYear") {
            if (this.currentYear == 1970) {
                this.currentYear = 1970;
            }
            else {
                this.currentYear = this.currentYear - 1;
            }
        }
        else if (ele == "nextYear") {
            this.currentYear = this.currentYear + 1;
        }
        this.getDateSection(this.currentYear, this.currentMonth)
    }

    // 选择日期
    selectedDate = new Date().getDate();
    selectedMonth = new Date().getMonth() + 1;
    currentDetailTime;//当前选择的具体时间
    changeDate(day) {
        this.selectedDate = day.name;
        this.selectedMonth = day.month;
        console.log("+++++++++", day.month);
        this.currentDetailTime = this.currentYear + "-" + this.selectedMonth + "-" + this.selectedDate + "  " + this.selectedhour + ":" + this.selectedminites + ":" + this.selectedsecond

    }


    // 获取当前时间以及选择时间
    selectDate = true;
    hour = this.myDate.getHours(); //获取当前小时数(0-23)
    minites = this.myDate.getMinutes(); //获取当前分钟数(0-59)
    second = this.myDate.getSeconds(); //获取当前秒数(0-59)
    selectedhour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    selectedminites = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
    selectedsecond = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
    public hourArr = [];
    public minitesArr = [];
    public secondArr = [];
    ngOnInit() {
        // this.format(this.myDate);
        let _date = new Date();
        console.log("_date = new Date();", _date)
        //设置初始时间
        for (let i = 0; i < 24; i++) {
            if (i < 10) {
                this.hourArr.push("0" + i)
            }
            else {
                this.hourArr.push(i)
            }

        }
        for (let i = 0; i < 60; i++) {
            if (i < 10) {
                this.minitesArr.push("0" + i)
            }
            else {
                this.minitesArr.push(i)
            }
        }
        this.secondArr = this.minitesArr;
        //设置初始日期区间
        // this.time=this.currentYear+"-"+(this.currentMonth+1)+"-"+this.currentDay+" ~ "+this.currentYear+"-"+(this.currentMonth+1)+"-"+(this.currentDay+1);
        console.log("this.time", this.currentDay)
        this.twoMonth.forEach((e, i) => {
            if (e.month == (this.currentMonth + 1) && this.currentDay == e.name) {
                this.selectStart(e, i)
            }
            if (e.month == (this.currentMonth + 1) && (this.currentDay + 1) == e.name) {
                this.selectStart(e, i)
            }
        })

    }

    //格式化时间
    format(date) {
        let currentYear = date.getFullYear(); //当前年
        let currentMonth = date.getMonth() + 1;   //月
        let currentDay = date.getDate();   //日
        let selectedhour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let selectedminites = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let selectedsecond = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return this.currentDetailTime = currentYear + "-" + currentMonth + "-" + currentDay + "  " + selectedhour + ":" + selectedminites + ":" + selectedsecond;
    }


    @Input()
    set setTime(date) {
        console.log("date++++++++", date)
        this.format(date);
        let currentYear = date.getFullYear(); //当前年
        let currentMonth = date.getMonth();   //月
        this.selectedMonth = date.getMonth() + 1;
        this.currentMonth = date.getMonth();
        this.selectedDate = date.getDate();   //日
        this.currentDay = date.getDate();
        this.currentYear = currentYear;
        console.log("==================", currentYear + "-" + currentMonth + "-" + this.selectedDate)
        this.getCountDays(currentYear, currentMonth);
    }

    get setTime() { return this.setTime; }
    @Input() isReadonly;


    //选择时间
    selectHour(hour) {
        this.selectedhour = hour;
        // this.hour = hour;
        this.currentDetailTime = this.currentYear + "-" + this.selectedMonth + "-" + this.selectedDate + "  " + this.selectedhour + ":" + this.selectedminites + ":" + this.selectedsecond
    }
    selectMinites(minites) {
        this.selectedminites = minites;
        // this.minites = minites;
        this.currentDetailTime = this.currentYear + "-" + this.selectedMonth + "-" + this.selectedDate + "  " + this.selectedhour + ":" + this.selectedminites + ":" + this.selectedsecond
    }
    selectSecond(second) {
        this.selectedsecond = second;
        // this.second = second;
        this.currentDetailTime = this.currentYear + "-" + this.selectedMonth + "-" + this.selectedDate + "  " + this.selectedhour + ":" + this.selectedminites + ":" + this.selectedsecond
    }
    //返回选择日期
    changeSelect(n) {
        if (n == "0") {
            this.selectDate = false;
        } else if (n == "1") {
            this.selectDate = true;
        } else if (n == "2") {
            this.showPopTimePicker = false;
        }
    }
    showPopTimePicker = false;
    showPop() {
        this.showPopTimePicker = true;
    }



    // 日期连选，获取当前月以及下个月
    /**
     * 1.获取当月天数，以及当天，当天之前的天数置灰不能选择
     * 2.获取下月天数
     */
    time = "";
    public twoMonth = [];
    currentMonthArr = [];//当月
    nextMonthArr = [];//下月
    startTime;//开始日期
    endTime;//结束日期
    dateSecond;//日期区间
    startDay;
    endDay;
    getDateSection(year, month) {
        console.log("ddd", month)
        let nextMonth;
        if (month == 11) {
            nextMonth = 0;
        }
        else {
            nextMonth = month + 1;
        }

        // this.totalDay= new Date(Date.UTC(year,month+1, 0)).getDate();
        this.currentMonthArr = this.getCountDays(year, month);
        this.nextMonthArr = this.getCountDays(year, nextMonth);
        this.twoMonth = [];
        this.twoMonth = this.currentMonthArr.concat(this.nextMonthArr);
        this.currentShow = this.currentMonthArr
        console.log("this.currentShow", this.currentShow)
        console.log("this.nextMonthArr", this.nextMonthArr)
        console.log("this.twoMonth", this.twoMonth)
    }
    public temArr = [];
    public selectArr = [];
    selectStart(start, i) {
        console.log(start.month, this.currentMonthinvariant + 1)
        //选择时间必须是今天之后并且当前选择的月份大于或者等于现实当前月或者当前选择月大于现实月
        if (start.name >= this.currentDay && start.month >= (this.currentMonthinvariant + 1) || start.month > (this.currentMonthinvariant + 1)) {
            /**
             * 判断当前选中了几个日期
             * 如果当前没选中日期，则当前选中的日期为开始日期
             * 如果当前已选中一个日期，则当前选中的日期为结束日期
             * 如果当前已选中两个及以上日期，则当前选中的日期为开始日期
             */
            this.selectArr = [];
            console.log("this.selectArr", this.selectArr)
            this.selectArr = this.twoMonth.filter(e => e.isSelect);
            console.log("selectArr", this.selectArr)
            if (this.selectArr.length == 0) {
                start.isSelect = true;
                start.selectTime = true;
                this.startDay = this.currentYear + "-" + start.month + "-" + start.name;
                this.startTime = i;
            }
            else if (this.selectArr.length == 1) {
                this.endTime = i;
                this.endDay = this.currentYear + "-" + start.month + "-" + start.name;
                if (this.endTime > this.startTime) {
                    this.time = this.startDay + " ~ " + this.endDay;
                    for (let j = this.startTime; j <= this.endTime; j++) {
                        this.twoMonth[j].isSelect = true;
                    }
                }
                else {
                    this.time = this.endDay + " ~ " + this.startDay;
                    for (let j = this.endTime; j <= this.startTime; j++) {
                        this.twoMonth[j].isSelect = true;
                    }
                }
                this.showPopRangePicker = false;
            }
            else if (this.selectArr.length >= 2) {
                this.startDay = this.currentYear + "-" + start.month + "-" + start.name;
                this.endDay = "";
                this.time = "";
                this.twoMonth.forEach(e => { e.isSelect = false });
                start.isSelect = true;
                this.startTime = i;
            }

        }
        console.log("this.twoMonth", this.twoMonth)
    }
    showPopRangePicker = false;
    showPop1() {
        this.showPopRangePicker = true;
    }

}
