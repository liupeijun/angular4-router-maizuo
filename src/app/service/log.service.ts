import { Injectable } from '@angular/core';

export const LogFactory = ()=>new LogService(false); //导出工厂方法

@Injectable()
export class LogService {

  constructor(private enable:boolean) { }

  i(message:any){
    if(this.enable){
      console.warn(`Kerwin Design Log:`,message);
    }
  }
}

