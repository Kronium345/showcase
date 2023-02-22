import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper title="Your own unique NFTs. Go wild!" description="Buy, store and collect NFTs, and exchange and earn crypto. Join 30 million people using Daniel Awolowo's marketplace. " showBtn mockupImg={assets.homeHero} banner="banner" />
      <SectionWrapper title="Smart User Interface Marketplace" description="Experience Daniel Awolowo's great UI NFT Marketplace. Simply spectacular!" mockupImg={assets.homeCards} reverse />
      <Features />
      <SectionWrapper title="Deployment" description="This was built using Expo." mockupImg={assets.feature} reverse />
      <SectionWrapper title="A creative way to showcase the store" description="The app contains 2 screens: the NFT Cards, and the respective details of each one." mockupImg={assets.mockup} banner="banner02" />
      <Download />
    </>
  );
}

export default App;
