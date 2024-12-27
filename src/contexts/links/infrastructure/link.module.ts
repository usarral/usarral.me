import { Module } from '@nestjs/common';
import { CreateLinkUseCase } from '@contexts/links/application/create-link-use-case/create-link.use-case';
import { LinkRepository } from '@contexts/links/domain/link.repository';
import { CreateLinkController } from '@contexts/links/infrastructure/http-api/v1/create-link/create-link.controller';
import { InMemoryLinkRepository } from '@contexts/links/infrastructure/repositories/in-memory.link-repository';

@Module({
controllers: [CreateLinkController],
providers: [CreateLinkUseCase,
    InMemoryLinkRepository, { provide: LinkRepository, useExisting: InMemoryLinkRepository }],
exports: [CreateLinkUseCase]
})
export class LinkModule {}
