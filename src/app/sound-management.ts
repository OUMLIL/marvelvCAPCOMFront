export class SoundManagement {

   mainSoundStatus = 1;
   mainAudio = new Audio();
   pikaAudio = new Audio();

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

}
