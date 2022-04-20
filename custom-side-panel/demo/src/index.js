import Mirador from 'mirador';
import CustomSidePanel from '../../src/components/index'

const config = { 
  id: 'demo', 
  window: {
    defaultView: 'single',
    sideBarOpenByDefault: true,
  },
  windows: [
    {
      loadedManifest: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest'
    }
  ], 
  translations: { 
    en: { 
      openCompanionWindow_CustomKey1: 'This is a moo'
    }
  }
};

Mirador.viewer(config, CustomSidePanel);
