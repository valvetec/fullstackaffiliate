declare namespace NodeJS {
    interface ProcessEnv {
      HOST: string
      DATABASEUSER: string
      PASSWORD: string
      DATABASENAME: string
      DIALECT: string
    }
  }