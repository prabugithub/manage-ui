import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: ({ id: string; name: string; age: number; email: string; workingPosition: number; _id: string; } | { name: string; age: number; email: string; workingPosition: string; id: string; _id: string; })[];
  @Input() userDetails;
  constructor() { }

  ngOnInit() {
    
  }
}

