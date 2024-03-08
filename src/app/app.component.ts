import { Component } from '@angular/core';
// import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebClient';
  //isLoading$ = this.loadingService.isLoading$;
  // constructor(private loadingService: LoadingService) {}
}
