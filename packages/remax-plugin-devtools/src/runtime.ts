import { connectToDevTools } from 'react-devtools-core';
import WebSocket from './WebSocket';

let connected = false;

export default {
  onAppConfig({ config }: { config: any }) {
    console.log(config);
    const onLaunch = config.onLaunch;
    config.onLaunch = function (...args: any[]) {
      const watchShake = () => {
        my.watchShake({
          success() {
            my.showActionSheet({
              title: `Remax: ${process.env.NODE_ENV}`,
              items: ['React Devtools'],
              cancelButtonText: '取消',
              success(res: any) {
                if (res.index !== -1 || !connected) {
                  connectToDevTools({
                    websocket: new WebSocket('ws://localhost:8097'),
                  });
                  connected = true;
                }
                watchShake();
              },
              fail() {
                watchShake();
              },
            });
          },
        });
      };
      watchShake();
      if (onLaunch) {
        onLaunch.call(this, ...args);
      }
    };

    return config;
  },
};
