declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      FONTEND_URL: string
      HASH_SECRET: string
      DATABASE_URL: string
      PORT?: number
    }
  }
}

export {}
