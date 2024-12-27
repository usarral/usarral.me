import { Controller, Post, Body } from "@nestjs/common";
import { CreateLinkUseCase } from "@contexts/links/application/create-link-use-case/create-link.use-case";
import { CreateLinkHttpDto } from "@contexts/links/infrastructure/http-api/v1/create-link/create-link.dto";
import { V1_LINKS } from "@contexts/links/infrastructure/http-api/route.constants";

@Controller(V1_LINKS)
export class CreateLinkController {
  constructor(private readonly createLinkUseCase: CreateLinkUseCase) {}

  @Post()
  async run(@Body() createLinkHttpDto: CreateLinkHttpDto) {
  return await this.createLinkUseCase.run({
    url: createLinkHttpDto.url,
    slug: createLinkHttpDto.slug,
    expirationTime: createLinkHttpDto.expirationTime
    })
  }
}
