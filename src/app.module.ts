import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UsersModule,AuthModule,ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
