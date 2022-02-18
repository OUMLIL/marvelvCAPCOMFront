import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SoundManagement} from "./sound-management";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/bootstrap.min.css']
})

export class AppComponent {
  static title = 'Pokemon STADIUM';
  title : string | undefined;
  soundManagement = new SoundManagement();

  constructor(private router: Router) {
    this.title = AppComponent.title;
    this.soundManagement.mainSound(this.soundManagement.mainAudio);
    this.soundManagement.playSound(this.soundManagement.mainAudio,0);
    this.soundManagement.pikaSound(this.soundManagement.pikaAudio);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
