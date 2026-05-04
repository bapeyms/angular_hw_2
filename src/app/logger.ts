import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {

  log(message: string) {
    console.log('[LOG]: ', message);
  }

  warn(message: string) {
    console.log('[WARN]: ', message);
  }

  error(message: string) {
    console.log('[ERROR]: ', message);
  }
}
