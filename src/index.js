import supportedBrowsers from './supportedBrowsers.js';

if (supportedBrowsers.test(navigator.userAgent)) {
  alert('Your browser is supported.');
} else {
  alert('Your browser is not supported....');
}
