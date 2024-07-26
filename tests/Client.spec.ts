import { GraphQLClient } from '../src/GraphQLClient';
import fetch from 'cross-fetch';
import { MutationCreatePostArgs, MutationUpdatePostArgs, Post, QueryUserByIdArgs, QueryUsersArgs, User } from './api.type';

let client: GraphQLClient;

describe('Queries to GraphQLPlaceholder', () => {
    beforeAll(() => {
        client = new GraphQLClient({
            uri: `https://graphqlplaceholder.vercel.app/graphql`,
            fetch: fetch as any,
        });
    });

    test('Get number of users', async () => {
        const count = await client
            .query<User[], QueryUsersArgs>(
                'users',
                {},
                {
                    id: true,
                },
            )
            .then((res) => res.toJSON().length);

        expect(count).toBe(10);
    });

    test('Get list of users with pagination', async () => {
        const count = await client
            .query<User[], QueryUsersArgs>(
                'users',
                {
                    first: 5,
                },
                {
                    id: true,
                    name: true,
                    username: true,
                    email: true,
                },
            )
            .then((res) => res.toJSON().length);

        expect(count).toBe(5);
    });

    test('Get user 1', async () => {
        const user = await client
            .query<User, QueryUserByIdArgs>(
                'userById',
                {
                    id: 1,
                },
                {
                    id: true,
                    name: true,
                    username: true,
                    email: true,
                },
            )
            .then((res) => res.toJSON());

        expect(user.id).toBe(1);
    });

    test('Create post', async () => {
        const post = await client
            .mutate<Post, MutationCreatePostArgs>(
                'createPost',
                {
                    post: {
                        userId: 1,
                        title: 'Hello',
                        body: 'Hello World',
                    },
                },
                {
                    id: true,
                    title: true,
                    body: true,
                },
            )
            .then((res) => res.toJSON());

        expect(post.id).toBe(101);
    });

    test('Update post', async () => {
        const post = await client
            .mutate<Post, MutationUpdatePostArgs>(
                'updatePost',
                {
                    postId: 100,
                    post: {
                        userId: 1,
                        title: 'Hello',
                        body: 'Hello World',
                    },
                },
                {
                    id: true,
                    title: true,
                    body: true,
                },
            )
            .then((res) => res.toJSON());

        expect(post.id).toBe(100);
    });
});
