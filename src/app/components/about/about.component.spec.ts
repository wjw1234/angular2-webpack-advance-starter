import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { t } from 'shared/test';
import { AboutComponent } from './about.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [AboutComponent, TestComponent]
  });
};

t.describe('@Component: AboutComponent', () => {

  t.be(testModuleConfig);

  t.it('should work',
    async(() => {
      TestBed.compileComponents()
        .then(() => {
          let fixture = TestBed.createComponent(TestComponent);
          fixture.detectChanges();
          let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

          t.e(getDOM().querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Features');
        });
    }));
});

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent { }
