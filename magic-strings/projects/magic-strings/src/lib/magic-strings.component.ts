
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'rk-magic-strings',
  template: `
    <input type="text" (keydown.enter)="markForText($event.target)" />
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>
    <div [innerHTML]="controlledContent"></div>
  `,
  styles: [
    `
      .mark {
        background-color: yellow;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringsComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;

  public originalContent = '';
  public controlledContent = '';

  ngAfterViewInit() {
    this.controlledContent = this.originalContent =
      this.content.nativeElement.textContent;
  }

  markForText(target: EventTarget | null) {
    console.log(target, 'TARGET');
    if (target) {
      const typedValue = (target as HTMLInputElement).value;

      this.controlledContent = this.originalContent;
      this.controlledContent = this.originalContent.replace(
        new RegExp(typedValue, 'g'),
        `<span class='mark'>${typedValue}</span>`
      );
    }
  }
}
