export default class EnvProvider {
  static get<T=string>(envName: string): T {
    const value = process.env[envName]
    if (!value) {
      throw new Error(`Environment variable ${envName} not found.`)
    }
    return value as unknown as T;
  }
}
