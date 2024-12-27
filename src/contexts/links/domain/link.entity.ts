import { randomUUID as uuid } from "node:crypto"; 
export interface PrimitiveLink {
  id: string;
  url: string;
  slug: string;
  expirationDate?: Date;
}
export class Link {
  constructor (private attributes: PrimitiveLink){}
  static create(createLink: {
    url: string;
    slug: string;
    expirationDate?: Date;
  }
  ):Link {
    return new Link({
      id: uuid(),
      url: createLink.url,
      slug: createLink.slug,
      expirationDate: createLink.expirationDate
    })
  }

  toPrimitive():PrimitiveLink {
    return {
      id: this.attributes.id,
      url: this.attributes.url,
      slug: this.attributes.slug,
      expirationDate: this.attributes.expirationDate
    }
  }
}
