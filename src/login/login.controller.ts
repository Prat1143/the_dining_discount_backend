import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getLogin(): string {
    return this.loginService.getLogin();
  }

  @Post('/generateOTP')
  generateOTP(): number {
    return this.loginService.generateOtp();
  }
}
