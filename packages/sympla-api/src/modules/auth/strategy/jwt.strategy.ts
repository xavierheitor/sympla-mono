// src/auth/strategy/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret', // mantenha igual ao jwt.service.ts
    });
    console.log('[JWT STRATEGY] Inicializada com secret:', process.env.JWT_SECRET || 'secret');
  }

  validate(payload: any) {
    console.log('[JWT STRATEGY] Validando payload:', payload);
    console.log('[JWT STRATEGY] Token sub:', payload.sub);
    return { id: payload.sub, ...payload };
  }
}
