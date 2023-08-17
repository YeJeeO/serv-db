/* eslint-disable new-cap */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
       CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      // eslint-disable-next-line no-unused-vars
      async authorize(credentials, req) {
        console.log('credentials', credentials);
        // Return null if user data could not be retrieved

        if ('1111' === credentials.username && '1111' === credentials.password)
          return { id: 'admin', name: 'J Smith', email: 'jsmith@example.com' };
        return null;
      }
    })
  ],
  callbacks: {
    async signIn({ admin, account, profile, email, credentials }) {
      console.debug('>> callback signIn', { admin, account, profile, email, credentials });
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   console.debug('>> callback redirect', { url, baseUrl });
    //   return baseUrl;
    // },
    async session({ session, admin, /* token */ }) {
      console.debug('>> callback session', /* { session, user, token } */);
      session.admin.id = user.id;
      session.admin.role = user.role;
      return session;
    },
    async jwt({ token, admin, account, profile, isNewUser }) {
      console.debug('>> callback jwt', { token, admin, account, profile, isNewUser });
      return token;
    }
  }
};

const resf = NextAuth(authOptions);

export default function wrapForLog(...params) {
  const [req] = params;
  console.debug('**', req.method, ' запрос на', req.url, req.query);
  return resf(...params);
}
