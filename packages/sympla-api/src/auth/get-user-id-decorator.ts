// auth/get-user-id.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUsuarioMobileId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user?.sub; // ou o campo que você configurou no JWT
  },
);
