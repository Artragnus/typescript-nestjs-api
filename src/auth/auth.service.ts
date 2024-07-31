import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const isValid = await this.userService.validateUser(
      signInDto.email,
      signInDto.password,
    );

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const payload = { id: isValid.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
