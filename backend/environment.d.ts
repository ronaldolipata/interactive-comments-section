declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      FONTEND_URL: string
      PORT?: number
    }
  }
}

export {}
