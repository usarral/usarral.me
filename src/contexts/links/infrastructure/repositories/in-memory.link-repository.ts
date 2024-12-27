import { Injectable } from "@nestjs/common";
import { Link } from "@contexts/links/domain/link.entity";
import { LinkRepository } from "@contexts/links/domain/link.repository";

@Injectable()
export class InMemoryLinkRepository extends LinkRepository {
  private links: Link[] = [];

  async save(link: Link): Promise<void> {
    this.links.push(link);
  }
}
