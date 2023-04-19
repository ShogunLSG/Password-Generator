import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;


  onButtonClick() {
    this.password = 'password1';
    console.log(`
      About to generate a password with the following:
      Include letters: ${this.includeLetters}
      Include numbers: ${this.includeNumbers}
      Include symbols: ${this.includeSymbols}
      `)
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onLengthInput(event: Event){
    const passwordLength = parseInt((event.target as HTMLInputElement).value);

  }
}
