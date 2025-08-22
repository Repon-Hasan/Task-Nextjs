import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const userCollection = await dbConnect(collectionNameObject.userCollection);
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Compare hashed password
       // const isValid = await bcrypt.compare(credentials.password, user.password);

        // if (!isValid) {
        //   throw new Error("Invalid password");
        // }

        // Return safe user object (NextAuth session)
        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
