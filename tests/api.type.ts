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
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['Int'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['String']>;
  updatePost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  post: CreatePostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  post: UpdatePostInput;
  postId: Scalars['Int'];
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id: Scalars['Int'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  albums?: Maybe<Array<Maybe<Album>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  userById?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryAlbumsArgs = {
  albumId?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  commentId?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
};


export type QueryPhotosArgs = {
  albumId?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  photoId?: InputMaybe<Scalars['Int']>;
};


export type QueryPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryTodosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  todoId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<Array<Maybe<Album>>>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type UserAlbumsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserTodosArgs = {
  first?: InputMaybe<Scalars['Int']>;
};
