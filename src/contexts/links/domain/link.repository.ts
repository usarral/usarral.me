import { Link } from "./link.entity";

export abstract class LinkRepository {
  abstract save(link: Link): Promise<void>;
}
