/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserContext } from './auth.types';

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest() as any;

    return req.user as UserContext | undefined;
  },
);
