module.exports = {
  name: 'hotel-app-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/hotel-app-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
