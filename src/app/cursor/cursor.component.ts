import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent {
  cursorPosition = { x: 0, y: 0 };

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorPosition.x = event.clientX;
    this.cursorPosition.y = event.clientY;
  }
}
