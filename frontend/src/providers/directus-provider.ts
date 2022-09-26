import { Directus } from "@directus/sdk";

type ResponseImage = {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder: string | null;
  uploaded_by: string | null;
  uploaded_on: string | null;
  modified_by: string | null;
  modified_on: string | null;
  charset: string | null;
  filesize: number;
  width: number;
  height: number;
  description: string | null;
  metadata: Record<string, string | boolean | number> | null;
};

type ResponseTranslatedFields<T> = Array<{ languages_id: string } & T>;

type ResponseContributor = {
  full_name: string;
  id: number;
  sort: number | null;
};

type ResponsePost = {
  id: number;
  author: ResponseContributor;
  image?: ResponseImage;
  publish_date: string;
  slug: string;
  translations: ResponseTranslatedFields<{ title: string; body?: string }>;
};

type Schema = {
  Posts: ResponsePost;
};

export default class DirectusProvider {
  client: Directus<Schema>;

  constructor() {
    const HOST = 'https://ym36dcoe.directus.app';
    this.client = new Directus(HOST);
  }

  async getPosts(
    options: { limit: number; page: number } = { limit: 25, page: 1,
    }
  ) {
    return this.client.items('Posts')
  }

  getTranslatedFieldLanguage<T extends ResponseTranslatedFields<any>>(
    languages: T,
    language: string
  ): T[number] {
    return languages.find((fields) => fields.languages_id === language);
  }
}
