report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_0_data-qa-card_0_tablet_h.png",
        "test": "../bitmaps_test/20190414-133834/test_test-card-default_0_data-qa-card_0_tablet_h.png",
        "selector": "[data-qa-card]",
        "fileName": "test_test-card-default_0_data-qa-card_0_tablet_h.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "5.75",
          "analysisTime": 11
        },
        "diffImage": "../bitmaps_test/20190414-133834/failed_diff_test_test-card-default_0_data-qa-card_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_0_data-qa-card_0_tablet_h.png",
        "test": "../bitmaps_test/20190414-133834/test_test-card-hover_0_data-qa-card_0_tablet_h.png",
        "selector": "[data-qa-card]",
        "fileName": "test_test-card-hover_0_data-qa-card_0_tablet_h.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "5.75",
          "analysisTime": 11
        },
        "diffImage": "../bitmaps_test/20190414-133834/failed_diff_test_test-card-hover_0_data-qa-card_0_tablet_h.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});