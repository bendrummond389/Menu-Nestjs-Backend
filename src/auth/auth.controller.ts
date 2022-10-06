import { Body, Controller, Post } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignupInput) {
    return this.authService.createUser(dto);
  }

  @Post('login')
  login(@Body() dto: LoginInput) {
    return this.authService.login(dto);
  }
}
