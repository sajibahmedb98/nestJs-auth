import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto) { 
    return this.authService.signUp()
   }

   @Post('signin')
  signIn() { 
    return this.authService.signIn()
   }

   @Post('signout')
  signOut() { 
    return this.authService.signOut()
   }
   
}
