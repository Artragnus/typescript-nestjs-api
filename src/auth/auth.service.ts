import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { OutputUserDto } from 'src/users/dto/output-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: OutputUserDto): Promise<{ access_token: string }> {
    const payload = { id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return null;
    }
    return user;
  }
}
