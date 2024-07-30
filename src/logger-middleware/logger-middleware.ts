import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private prismaService: PrismaService) {}
  async use(req: LoginUserDto, res: any, next: (error?: any) => void) {
    const user = await this.prismaService.user.findUnique({
      where: { email: req.email },
    });

    if (!user) {
      // TODO: Handle this case
    }

    const isValid = req.password === user.password ? next() : ''; // TODO
  }
}
