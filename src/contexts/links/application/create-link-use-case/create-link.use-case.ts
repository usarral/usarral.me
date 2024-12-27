import { Injectable } from "@nestjs/common";
import { Link, PrimitiveLink } from "@contexts/links/domain/link.entity";
import { LinkRepository } from "@contexts/links/domain/link.repository";
import { createLinkDto } from "./create-link.dto";

@Injectable()
export class CreateLinkUseCase {
  constructor(
    private readonly linkRepository: LinkRepository
  ) {}

  async run(createLink: createLinkDto): Promise<{ link: PrimitiveLink }> {
    try{
    const link = Link.create(createLink);
    await this.linkRepository.save(link);
    return { link: link.toPrimitive() };
    } catch (error) {
      console.error(error);
      throw new Error('Error creating link');
  }}
  
}
