import { Component } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Peeeeeeeeepppaaaaaa';
  public searchResult;
  public searchCount = 0;
  public searchText;
  constructor(private http: Http) {
    this.title = "DatePicker App";
  }

  getUserList() {
    this.http.get('/user')
    .subscribe(result => {
      this.searchResult = result.json();
      this.searchCount = this.searchResult.length
      console.log(this.searchResult);
    });
  }

  onkeyUp(event) {
    this.searchText = event.target.value;
  }

}
