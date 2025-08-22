import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Export authOptions separately
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
          return {
            id: '1',
            email: 'admin@example.com',
            name: 'Admin User',
            role: 'admin'
          }
        }
        return null;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
};

// Export the handler directly without destructuring
const handler = NextAuth(authOptions);
export default handler;