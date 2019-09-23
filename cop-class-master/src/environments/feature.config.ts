// This feature Configuration is only a first iteration approach to provide
// configuration this should be managed by a separate service and
// provided through an endpoint.
// This file is used to configure the feature Service
// feature Service is for internal use on ht eIntel network since it uses the
// https://enterpriseservices.intel.com/SharedServices/cdisapi/v3/workers/
// to retrieve the users idsid

export const cookieName = 'reuse-user';

// How to configure new features:
// if you use them as Guards for the router then name the feature like the route.path
// Otherwise you can inject the featureService wherever it is required and
// call getUserFeatures the retrieve the enabled features for the user.
// features: IFeatures = {};
// self._featureService.getUserFeatures().then( function (result) {
//          self.features = result;
//        });
// to create conditionals use: *ngIf='features['featurename']'
// if the user has access it will return true otherwise false

export const featureConfig = [
  {
    id: 1,
    name: 'APISupport',
    enabledidsids: [
      'musaeger',
      'jesimpso',
      'bbohling',
      'ooalebio',
      'sgurunat',
      'tinaalam',
      'rpgilroy',
      'mgdanies',
      'bgstaab',
      'dgmeyers',
      'vbhojan',
      'cjschnei',
      'fpviana',
      'lpdufres',
      'ydaim',
      'akagarw1',
      'swathism',
      'jdmcgrew'
    ],
    enabled: false,
    created: '2017-03-13'
  },
  {
    id: 1,
    name: 'trend',
    enabledidsids: [
      'musaeger',
      'jesimpso',
      'bbohling',
      'ooalebio',
      'sgurunat',
      'tinaalam',
      'rpgilroy',
      'mgdanies',
      'bgstaab',
      'dgmeyers',
      'vbhojan',
      'cjschnei',
      'fpviana',
      'lpdufres',
      'ydaim',
      'akagarw1',
      'swathism',
      'jdmcgrew'
    ],
    enabled: false,
    created: '2017-04-05'
  }
];
