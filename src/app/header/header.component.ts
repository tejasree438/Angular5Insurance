import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading:string;
  logo:string;
  linkText='Login';

  links:PageLink[];
  constructor() { 
   this.links=[
  {linkText:'Home',linkStyle:'nav-link',linkRef:'home'},
  {linkText:'Products',linkStyle:'nav-link',linkRef:'products'},
  {linkText:'History',linkStyle:'nav-link',linkRef:'history'}
];

this.majHeading="MinBapa Insurance";
this.logo='assets/download.jpg';
  }
  ngOnInit() {
  }
n
}