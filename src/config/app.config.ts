export const __prod__: boolean = process.env.NODE_ENV === 'production' || false
export const appDebug: boolean = process.env.APP_DEBUG === 'true' || !__prod__ || true
export const port = process.env.PORT || 4000
