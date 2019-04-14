const urls = {
  development: 'http://host.docker.internal:8080',
  travis: 'http://127.0.0.1:8080'
}

const basicScenario = {
  label: 'test',
  url: urls.development,
  referenceUrl: '',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ["[data-qa-hidden]"],
  removeSelectors: [],
  hoverSelector: "",
  clickSelector: "",
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true
}

const config = {
  id: 'test',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768
    }
  ],
  scenarios: [
    {
      ...basicScenario,
      label: "test-card-default",
      selectors: ["[data-qa-card]"]
    },
    {
      ...basicScenario,
      label: "test-card-hover",
      selectors: ["[data-qa-card]"],
    }
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}

module.exports = {
  urls,
  config
};
