import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/bootstrap.min.css', '../css/bootstrap.min.css']
})

export class AppComponent {
  title = 'Marvel VS CAPCOM';
  mainSoundStatus = 1;
  mainAudio = new Audio();
  pikaAudio = new Audio();
  width = screen.width;
  height = screen.height;


  constructor(private router: Router) {
    this.mainSound(this.mainAudio);
    this.playSound(this.mainAudio,0);
    this.pikaSound(this.pikaAudio);
  }

  mainSound(audio: HTMLAudioElement) {
    audio.src = "../assets/Resources/sound.mp3"
  }
  pikaSound(audio: HTMLAudioElement) {
    audio.src = "../assets/Resources/pika.m4a"
  }

  playSound(audio: HTMLAudioElement, mainSoundStatus: number) {
    if(!mainSoundStatus){
      audio.load();
      audio.play()
        .then(() => {
          this.mainSoundStatus = 1;
          console.log("sound playing");})
        .catch(error => {
          console.log(error);
        });
    }else{
      audio.pause();
      this.mainSoundStatus =0;
      console.log("sound paused");
    }

  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
