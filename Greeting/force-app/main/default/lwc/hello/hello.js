import { LightningElement, api } from 'lwc';

export default class Hello extends LightningElement {
  @api language = 'en';

  get greeting() {
    switch (this.language) {
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'ja': 
        return 'こんにちは';
      case 'hi':
        return 'नमस्ते';
      case 'fa':
        return 'سلام';
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Hallo';
      case 'it':
        return 'Ciao';
      case 'nl':
        return 'Hallo';
      default:
        return 'Hello';
      }
  }
}