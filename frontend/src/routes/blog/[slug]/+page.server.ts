import type {PageServerLoad} from './$types';

export const load: PageServerLoad = ({params}) => {
  return {
    slug: params.slug,
    foo: 'bar',
    num: 42,
    obj: {
      hello: 'world'
    }
  };
}
