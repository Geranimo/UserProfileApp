import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { Headers, RequestOptions } from '@angular/http';

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

  onSubmit(value: any) {
    let serializedForm = JSON.stringify(value);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     this.http.post('/user', serializedForm, options).subscribe(
          data => { console.log("success!", data);
          this.getUserList();
        },
          error => console.error("couldn't post because", error)
        );
  }

  deleteUser(value: String){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log("Deleting user with id " + value);
    let options = new RequestOptions({ headers: headers });
     this.http.delete('/user/'+ value, options).subscribe(
          data => {

          console.log("user successfully deleted!", data);
           this.getUserList();
        },
          error => console.error("couldn't post because", error)
        );
  }
}
