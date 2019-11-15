import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLoading = false;
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userService.getUser().subscribe((response: Response) => {
      this.isLoading = false;
      this.users = response;
    });
  }

}
