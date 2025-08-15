import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('[JWT GUARD] Verificando autenticação...');
    const request = context.switchToHttp().getRequest();
    console.log('[JWT GUARD] Headers:', request.headers);
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    console.log('[JWT GUARD] Erro:', err);
    console.log('[JWT GUARD] Usuário:', user);
    console.log('[JWT GUARD] Info:', info);

    if (err || !user) {
      throw err ?? new UnauthorizedException('Token inválido ou expirado');
    }
    return user;
  }
}
