import { authRoutes } from '@auth/routes/authRoutes';
import { Application } from 'express';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
  };
  routes();
};
