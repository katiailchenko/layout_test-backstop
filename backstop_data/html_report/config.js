report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Test_0_data-qa-card_0_tablet.png",
        "test": "../bitmaps_test/20190414-121726/backstop_default_Test_0_data-qa-card_0_tablet.png",
        "selector": "[data-qa-card]",
        "fileName": "backstop_default_Test_0_data-qa-card_0_tablet.png",
        "label": "Test",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Test_Hover_0_data-qa-card_0_tablet.png",
        "test": "../bitmaps_test/20190414-121726/backstop_default_Test_Hover_0_data-qa-card_0_tablet.png",
        "selector": "[data-qa-card]",
        "fileName": "backstop_default_Test_Hover_0_data-qa-card_0_tablet.png",
        "label": "Test Hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});