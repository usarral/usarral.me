import { Module } from '@nestjs/common';
import { ErrorResponseNormalizerFilter } from './error-response-normalizer.filter';

@Module({
  providers: [
    ErrorResponseNormalizerFilter
  ],
  exports: [
    ErrorResponseNormalizerFilter,
    //TODO: Fix why on export app crash   SuccessResponseNormalizerInterceptor


  ]
})
export class ResponseNormalizerModule {
}
