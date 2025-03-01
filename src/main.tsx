import ReactDOM from 'react-dom/client';
import { DevSupport } from '@react-buddy/ide-toolbox';
import App from './App';
import { ComponentPreviews, useInitial } from '@/dev';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <App />
  </DevSupport>
);
