import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  users;
  showUserDetail = true;
  showCreateUser = false;
  searchText = '';
  userDetails;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userDetails = [
      
    ];
  }
  showUserDetails() {
    this.showUserDetail = true;
    this.showCreateUser = false;
    this.userService.searchUsers(this.searchText as any).subscribe(res => {
      console.log(res);
      this.userDetails = res;
    });
  }
  showCreateUsers() {
    this.showCreateUser = true;
    this.showUserDetail = false;
  }
}
