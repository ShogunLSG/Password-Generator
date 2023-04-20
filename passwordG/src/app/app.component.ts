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

  public letters:string = 'abcdefghijklmnopqrstuvwxyz';
  public numbers = '0123456789';
  public symbols = '!@#$%^&*()_+';


  onButtonClick() {
    this.password = 'password1';
    let validChars = '';
    if (this.includeLetters) {
      validChars += this.letters;
    }
    if (this.includeNumbers) {
      validChars += this.numbers;
    }
    if (this.includeSymbols) {
      validChars += this.symbols;
    }
    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword = generatedPassword + validChars[index];
    }
    console.log(`
      About to generate a password with the following:
      Include letters: ${this.includeLetters}
      Include numbers: ${this.includeNumbers}
      Include symbols: ${this.includeSymbols}
      Password length: ${this.passwordLength}
      Generated password: ${generatedPassword}
      `)
      this.password = generatedPassword;
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
    this.passwordLength = parseInt((event.target as HTMLInputElement).value);
    console.log(this.passwordLength);
  }
}
