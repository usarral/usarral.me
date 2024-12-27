import { Module } from '@nestjs/common';
import { HttpApiModule } from './http-api/http-api.module';
import { LoggerModule } from 'src/contexts/shared/logger/infrastructure/logger.module';
import { ConfigModule } from '@nestjs/config'
import { LinkModule } from '@src/contexts/links/infrastructure/link.module';
@Module({
  imports: [HttpApiModule, LinkModule, LoggerModule, ConfigModule.forRoot({isGlobal: true, cache: true})],
  controllers: [],
  providers: [],
})   
export class AppModule {}
