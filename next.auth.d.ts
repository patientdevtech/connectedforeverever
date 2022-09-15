import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

//resource: https://github.import "next-auth/jwt" // Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation declare module "next-auth/jwt" { interface JWT { /** The user's role. */ userRole?: "admin" } }/nextauthjs/next-auth-example/blob/main/next-auth.d.ts