import { UnityProvider } from 'contexts/UnityProvider';
import Play from '../Play';

const unityConfig = {
  loaderUrl: 'https://hereandnow2.s3.ap-southeast-2.amazonaws.com/passagetest/public.loader.js',
  dataUrl: 'https://hereandnow2.s3.ap-southeast-2.amazonaws.com/passagetest/public.data',
  frameworkUrl: 'https://hereandnow2.s3.ap-southeast-2.amazonaws.com/passagetest/public.framework.js',
  codeUrl: 'https://hereandnow2.s3.ap-southeast-2.amazonaws.com/passagetest/public.wasm',
};

const Home = () => {
  return (
    <UnityProvider unityConfig={unityConfig}>
      <Play />
    </UnityProvider>
  );
};

export default Home;
