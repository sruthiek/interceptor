import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptors';
  data: any;
  constructor(private dataService: HttpService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        // On successful response, assign the data to the component property
        this.data = response;
      },
      (error) => {
        // Error handling can be done here if needed
        console.error('Error:', error);
      }
    );
  }
}
