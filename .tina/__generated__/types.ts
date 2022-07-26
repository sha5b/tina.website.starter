//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export function gql(strings: TemplateStringsArray, ...args: string[]): string {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (args[i] || '')
  })
  return str
}
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
  post: Post;
  postConnection: PostConnection;
  map: Map;
  mapConnection: MapConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryMapArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryMapConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Page | Post | Map;

export type PageBlocksHero = {
  __typename?: 'PageBlocksHero';
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type PageBlocksCtaButton = {
  __typename?: 'PageBlocksCtaButton';
  label?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type PageBlocksCta = {
  __typename?: 'PageBlocksCta';
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  button?: Maybe<PageBlocksCtaButton>;
};

export type PageBlocksQuote = {
  __typename?: 'PageBlocksQuote';
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type PageBlocksGalleryGallery = {
  __typename?: 'PageBlocksGalleryGallery';
  image?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PageBlocksGallery = {
  __typename?: 'PageBlocksGallery';
  gallery?: Maybe<Array<Maybe<PageBlocksGalleryGallery>>>;
};

export type PageBlocksFactFact = {
  __typename?: 'PageBlocksFactFact';
  headline?: Maybe<Scalars['String']>;
  subheadline?: Maybe<Scalars['String']>;
};

export type PageBlocksFact = {
  __typename?: 'PageBlocksFact';
  fact?: Maybe<Array<Maybe<PageBlocksFactFact>>>;
};

export type PageBlocksLogosLogos = {
  __typename?: 'PageBlocksLogosLogos';
  logo?: Maybe<Scalars['String']>;
};

export type PageBlocksLogos = {
  __typename?: 'PageBlocksLogos';
  headline?: Maybe<Scalars['String']>;
  logos?: Maybe<Array<Maybe<PageBlocksLogosLogos>>>;
};

export type PageBlocks = PageBlocksHero | PageBlocksCta | PageBlocksQuote | PageBlocksGallery | PageBlocksFact | PageBlocksLogos;

export type Page = Node & Document & {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Post = Node & Document & {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ogimage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Map = Node & Document & {
  __typename?: 'Map';
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type MapConnectionEdges = {
  __typename?: 'MapConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Map>;
};

export type MapConnection = Connection & {
  __typename?: 'MapConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<MapConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
  updatePost: Post;
  createPost: Post;
  updateMap: Map;
  createMap: Map;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};


export type MutationUpdateMapArgs = {
  relativePath: Scalars['String'];
  params: MapMutation;
};


export type MutationCreateMapArgs = {
  relativePath: Scalars['String'];
  params: MapMutation;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  post?: InputMaybe<PostMutation>;
  map?: InputMaybe<MapMutation>;
};

export type PageBlocksHeroMutation = {
  title?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type PageBlocksCtaButtonMutation = {
  label?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};

export type PageBlocksCtaMutation = {
  title?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  button?: InputMaybe<PageBlocksCtaButtonMutation>;
};

export type PageBlocksQuoteMutation = {
  quote?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
};

export type PageBlocksGalleryGalleryMutation = {
  image?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type PageBlocksGalleryMutation = {
  gallery?: InputMaybe<Array<InputMaybe<PageBlocksGalleryGalleryMutation>>>;
};

export type PageBlocksFactFactMutation = {
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFactMutation = {
  fact?: InputMaybe<Array<InputMaybe<PageBlocksFactFactMutation>>>;
};

export type PageBlocksLogosLogosMutation = {
  logo?: InputMaybe<Scalars['String']>;
};

export type PageBlocksLogosMutation = {
  headline?: InputMaybe<Scalars['String']>;
  logos?: InputMaybe<Array<InputMaybe<PageBlocksLogosLogosMutation>>>;
};

export type PageBlocksMutation = {
  hero?: InputMaybe<PageBlocksHeroMutation>;
  cta?: InputMaybe<PageBlocksCtaMutation>;
  quote?: InputMaybe<PageBlocksQuoteMutation>;
  gallery?: InputMaybe<PageBlocksGalleryMutation>;
  fact?: InputMaybe<PageBlocksFactMutation>;
  logos?: InputMaybe<PageBlocksLogosMutation>;
};

export type PageMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  ogimage?: InputMaybe<Scalars['String']>;
};

export type MapMutation = {
  date?: InputMaybe<Scalars['String']>;
};

export type PagePartsFragment = { __typename?: 'Page', blocks?: Array<{ __typename: 'PageBlocksHero', title?: string | null, subtitle?: string | null, image?: string | null } | { __typename: 'PageBlocksCta', title?: string | null, subtitle?: string | null, button?: { __typename: 'PageBlocksCtaButton', label?: string | null, href?: string | null } | null } | { __typename: 'PageBlocksQuote', quote?: string | null, author?: string | null } | { __typename: 'PageBlocksGallery', gallery?: Array<{ __typename: 'PageBlocksGalleryGallery', image?: string | null, alt?: string | null } | null> | null } | { __typename: 'PageBlocksFact', fact?: Array<{ __typename: 'PageBlocksFactFact', headline?: string | null, subheadline?: string | null } | null> | null } | { __typename: 'PageBlocksLogos', headline?: string | null, logos?: Array<{ __typename: 'PageBlocksLogosLogos', logo?: string | null } | null> | null } | null> | null };

export type PostPartsFragment = { __typename?: 'Post', title?: string | null, category?: Array<string | null> | null, date?: string | null, description?: string | null, ogimage?: string | null };

export type MapPartsFragment = { __typename?: 'Map', date?: string | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksHero', title?: string | null, subtitle?: string | null, image?: string | null } | { __typename: 'PageBlocksCta', title?: string | null, subtitle?: string | null, button?: { __typename: 'PageBlocksCtaButton', label?: string | null, href?: string | null } | null } | { __typename: 'PageBlocksQuote', quote?: string | null, author?: string | null } | { __typename: 'PageBlocksGallery', gallery?: Array<{ __typename: 'PageBlocksGalleryGallery', image?: string | null, alt?: string | null } | null> | null } | { __typename: 'PageBlocksFact', fact?: Array<{ __typename: 'PageBlocksFactFact', headline?: string | null, subheadline?: string | null } | null> | null } | { __typename: 'PageBlocksLogos', headline?: string | null, logos?: Array<{ __typename: 'PageBlocksLogosLogos', logo?: string | null } | null> | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, edges?: Array<{ __typename?: 'PageConnectionEdges', node?: { __typename?: 'Page', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksHero', title?: string | null, subtitle?: string | null, image?: string | null } | { __typename: 'PageBlocksCta', title?: string | null, subtitle?: string | null, button?: { __typename: 'PageBlocksCtaButton', label?: string | null, href?: string | null } | null } | { __typename: 'PageBlocksQuote', quote?: string | null, author?: string | null } | { __typename: 'PageBlocksGallery', gallery?: Array<{ __typename: 'PageBlocksGalleryGallery', image?: string | null, alt?: string | null } | null> | null } | { __typename: 'PageBlocksFact', fact?: Array<{ __typename: 'PageBlocksFactFact', headline?: string | null, subheadline?: string | null } | null> | null } | { __typename: 'PageBlocksLogos', headline?: string | null, logos?: Array<{ __typename: 'PageBlocksLogosLogos', logo?: string | null } | null> | null } | null> | null } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title?: string | null, category?: Array<string | null> | null, date?: string | null, description?: string | null, ogimage?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, edges?: Array<{ __typename?: 'PostConnectionEdges', node?: { __typename?: 'Post', id: string, title?: string | null, category?: Array<string | null> | null, date?: string | null, description?: string | null, ogimage?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type MapQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type MapQuery = { __typename?: 'Query', map: { __typename?: 'Map', id: string, date?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type MapConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type MapConnectionQuery = { __typename?: 'Query', mapConnection: { __typename?: 'MapConnection', totalCount: number, edges?: Array<{ __typename?: 'MapConnectionEdges', node?: { __typename?: 'Map', id: string, date?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  blocks {
    __typename
    ... on PageBlocksHero {
      title
      subtitle
      image
    }
    ... on PageBlocksCta {
      title
      subtitle
      button {
        __typename
        label
        href
      }
    }
    ... on PageBlocksQuote {
      quote
      author
    }
    ... on PageBlocksGallery {
      gallery {
        __typename
        image
        alt
      }
    }
    ... on PageBlocksFact {
      fact {
        __typename
        headline
        subheadline
      }
    }
    ... on PageBlocksLogos {
      headline
      logos {
        __typename
        logo
      }
    }
  }
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  title
  category
  date
  description
  ogimage
}
    `;
export const MapPartsFragmentDoc = gql`
    fragment MapParts on Map {
  date
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
  ) {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
  ) {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const MapDocument = gql`
    query map($relativePath: String!) {
  map(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MapParts
  }
}
    ${MapPartsFragmentDoc}`;
export const MapConnectionDocument = gql`
    query mapConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String) {
  mapConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
  ) {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MapParts
      }
    }
  }
}
    ${MapPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    map(variables: MapQueryVariables, options?: C): Promise<{data: MapQuery, variables: MapQueryVariables, query: string}> {
        return requester<{data: MapQuery, variables: MapQueryVariables, query: string}, MapQueryVariables>(MapDocument, variables, options);
      },
    mapConnection(variables?: MapConnectionQueryVariables, options?: C): Promise<{data: MapConnectionQuery, variables: MapConnectionQueryVariables, query: string}> {
        return requester<{data: MapConnectionQuery, variables: MapConnectionQueryVariables, query: string}, MapConnectionQueryVariables>(MapConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    let data = {};
    try {
      data = await client.request({
        query: doc,
        variables: vars,
      });
    } catch (e) {
      // swallow errors related to document creation
      console.warn("Warning: There was an error when fetching data");
      console.warn(e);
    }

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql" }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

