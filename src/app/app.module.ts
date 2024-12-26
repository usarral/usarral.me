import { Module } from '@nestjs/common';
import { HttpApiModule } from './http-api/http-api.module';
import { LoggerModule } from 'src/contexts/shared/logger/infrastructure/logger.module';
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [HttpApiModule, LoggerModule, ConfigModule.forRoot({isGlobal: true, cache: true})],
  controllers: [],
  providers: [],
})   
export class AppModule {}
