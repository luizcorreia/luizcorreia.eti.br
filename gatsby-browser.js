import 'lazysizes'
import ReactGA from 'react-ga';
require('prismjs/themes/prism-tomorrow.css')

ReactGA.initialize('UA-17539934-4');

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 66 // size of the header (sidebar) when mobile
  })
}
