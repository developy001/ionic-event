import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'event-app',
  webDir: 'www'
};
plugins: {
  GoogleMaps: {
    apiKey: "AIzaSyCxu3-GyyzmqrK8tsf3Czdq61FhGSW1iO4"
  }
}

export default config;
