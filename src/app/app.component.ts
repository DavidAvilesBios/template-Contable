import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('spinInOut', [
      state('in', style({transform: 'rotate(0)', opacity: '1'})),
      transition(':enter', [
        style({transform: 'rotate(-180deg)', opacity: '0'}),
        animate('150ms ease')
      ]),
      transition(':leave', [
        animate('150ms ease', style({transform: 'rotate(180deg)', opacity: '0'}))
      ]),
    ]),
    trigger('preventInitialAnimation', [
      transition(':enter', [
        query(':enter', [], {optional: true})
      ]),
    ]),
  ],
})
export class AppComponent {

  constructor(private router: Router) {}
  title = 'template1-material';
  
  actions = [
    { name: 'Add attachment', icon: 'attachment' },
    { name: 'New folder', icon: 'folder' },
    { name: 'New shared folder', icon: 'folder_shared' },
  ];
  
  items = [
    {title:'Contacts',route:'prueba', icon:'attachment'},
    {title:'Contacts',route:'prueba', icon:'attachment'},
    {title:'Contacts',route:'prueba', icon:'attachment'},
    {title:'Contacts',route:'prueba', icon:'attachment'},
    {title:'Contacts',route:'prueba', icon:'attachment'}
  ]
  

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
