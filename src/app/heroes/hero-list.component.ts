import { Component,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { Router, Params } from '@angular/router';
import {Hero} from './hero';
import {heroService} from './hero-service';
@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        (click)  ="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks </button>
    <div class="popup-win"></div>
    <div class="" #mainScreen (mousedown)="mousedown($event)" (mousemove)="dragging($event)" (mouseup)="mouseup($event)" style="width: 320px;height: 350px;position: absolute;top: 50%;left: 50%;margin: 0 auto;z-index: 999;background: #ededed;padding: 10px 15px;line-height: 35px;">
      <div style="position: relative;text-align: center;font-size: 16px;font-weight: bold;  ">客史纪录<span style="position: absolute;right: 15px;color: #2196F3;font-size: 12px;">详细</span></div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            客人类型：散客
          </div>
          <div style="flex: 1;">
              等级：黄金会员
            </div>
        </div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            总入住次数：散客
          </div>
          <div style="flex: 1;">
            总消费金额：黄金会员
          </div>
        </div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            平均房价：散客
          </div>
        </div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            最喜欢入住的房型：大床房
          </div>
        </div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            最喜欢入住的房间：308
          </div>
        </div>
        <div style="display: flex;" class="content-guest">
          <div style="flex: 1;">
            最近一次入住的房间：2017-08-08
          </div>
        </div>
        <div style="text-align: center;margin-top: 20px;">
            <button >
                <span>关闭</span>
              </button>
        </div>
      </div>
  `,
  styles:[`
    .popup-win{
      width:100px;height:100px; background-color:blue; z-index: 1;border-radius:50%; position:absolute;
    }
    .popup-win:hover{
      cursor: move;
    }
  `]
})
export class HeroListComponent {
  heroes:Hero[];
  constructor(
    private router: Router,private HeroService:heroService,private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.heroes=HeroService.HEROES;
  }
  onSelect(hero:Hero)
  {
    this.router.navigate(['/hero',hero.id]);
  }


  @ViewChild('mainScreen') elementView: ElementRef;
  x = 0;
  y = 0;
  l = 0;
  t = 0;
  offx=0;
  offy=0;
  isDown=false;
  mousemoveEvent:any;
  mouseupEvent:any;
  mousedown(e){
      //获取x坐标和y坐标
      this.x = e.clientX ;
      this.y = e.clientY;
      // console.log("this.x",this.x)
      // console.log("this.y",this.y)


      //获取左部和顶部的偏移量
      // this.renderer.setStyle(this.elementView, 'offsetLeft', '10px')
      this.l = this.elementView.nativeElement.offsetLeft;
      this.t = this.elementView.nativeElement.offsetTop;
      // console.log("this.l",this.l)
      // console.log("this.t",this.t)
      this.offx=this.x - this.l;
      this.offy=this.y - this.t;
      // console.log("this.offy",this.offy)
      // console.log("this.offx",this.offx)

      // this.mousemoveEvent = this.renderer.listen(this.elementView.nativeElement, "mousemove", this.dragging);
      // this.mousemoveEvent = this.renderer.listen(this.elementView.nativeElement, "mousemove", this.dragging);
      // this.mouseupEvent = this.renderer.listen(this.elementView.nativeElement, "mouseup", this.mouseup);
      //开关打开
      this.isDown = true;
  }
  dragging(e) {
      if (this.isDown == false) {
          return;
      }
      //获取x和y
      let nx = e.clientX;
      let ny = e.clientY;
      // console.log("this.nx",nx)
      // console.log("this.ny",ny)
      //计算移动后的左偏移量和顶部的偏移量
      let nl = nx - this.offx;
      let nt = ny - this.offy;
      // console.log("this.nl",nl)
      // console.log("this.nl",nl)
      this.elementView.nativeElement.style.left = nl + 'px';
      this.elementView.nativeElement.style.top = nt + 'px';
      // console.log("ll",this.elementView.nativeElement.style.left)
 }
 mouseup(event: any) {
     //开关关闭
      this.isDown = false;
     // Remove listeners
    //  this.mousemoveEvent();
    //  this.mouseupEvent();
 }

 }
