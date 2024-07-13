/// <reference types="vite/client"/>

interface ImportMetaEnv {
  readonly VITE_APP_OPEN_API_ENCODING_KEY: string;
  readonly VITE_APP_API_KEY: string;
  readonly VITE_APP_AUTH_DOMAIN: string;
  readonly VITE_APP_DATA_BASE_URL: string;
  readonly VITE_APP_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
