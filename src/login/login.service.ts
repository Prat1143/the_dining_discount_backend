import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  getLogin(): string {
    return 'Hello World!';
  }

  generateOtp(): number {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log("otp======",otp);
    return otp;
  }
}