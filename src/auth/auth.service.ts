import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const isValid = await this.userService.validateUser(email, password);

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const payload = { id: isValid.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
