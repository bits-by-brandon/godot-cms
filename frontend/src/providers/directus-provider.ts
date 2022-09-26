import { Directus } from "@directus/sdk";
import EnvProvider from "../utility/envProvider";

type ResponseTranslatedFields<T> = Array<{ languages_id: string } & T>;

type ResponsePost = {
  id: number;
};

type Schema = {
  Posts: ResponsePost;
};

export default class DirectusProvider {
  client: Directus<Schema>;

  constructor() {
    const CMS_HOST = EnvProvider.get('FRONTEND_CMS_HOST');
    this.client = new Directus(CMS_HOST);
  }

  async getPosts() {
    return this.client.items('Posts').readByQuery();
  }

  getTranslatedFieldLanguage<T extends ResponseTranslatedFields<any>>(
    languages: T,
    language: string
  ): T[number] {
    return languages.find((fields) => fields.languages_id === language);
  }
}
