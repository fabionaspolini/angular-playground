import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeng-sample';

  items: MenuItem[] = [{
    label: 'File',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-download' }
    ]
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', icon: 'pi pi-refresh' },
      { label: 'Redo', icon: 'pi pi-repeat' }
    ]
  }];
}
