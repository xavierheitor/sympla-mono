import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MobileUsersService } from 'src/modules/mobile-users/mobile-users.service';

@Injectable()
export class AuthService {
  constructor(
    private mobileUsersService: MobileUsersService,
    private jwtService: JwtService, // ✅ injeção correta
  ) {}

  async validateLogin(matricula: string, senha: string) {
    const user = await this.mobileUsersService.findByMatricula(matricula);

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      throw new UnauthorizedException('Matrícula ou senha inválida');
    }

    const payload = { sub: user.id, matricula: user.matricula };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hora
    const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 dias

    return {
      token: accessToken,
      refreshToken,
      expiresAt,
      refreshTokenExpiresAt,
      usuario: {
        id: user.id,
        nome: user.nome ?? '',
        matricula: user.matricula,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);

      const user = await this.mobileUsersService.findById(payload.sub as string);
      if (!user) throw new ForbiddenException('Usuário não encontrado');

      const newAccessToken = this.jwtService.sign(
        { sub: payload.sub, matricula: payload.matricula },
        { expiresIn: '1h' },
      );

      const newRefreshToken = this.jwtService.sign(
        { sub: payload.sub, matricula: payload.matricula },
        { expiresIn: '7d' },
      );

      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1h
      const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7d

      return {
        token: newAccessToken,
        refreshToken: newRefreshToken,
        expiresAt,
        refreshTokenExpiresAt,
        usuario: {
          id: user.id,
          nome: user.nome ?? '',
          matricula: user.matricula,
        },
      };
    } catch (err) {
      console.error(err);
      throw new ForbiddenException('Refresh token inválido ou expirado');
    }
  }
}
