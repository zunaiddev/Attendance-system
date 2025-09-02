interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_API_HOST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}