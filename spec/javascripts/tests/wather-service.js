describe('WeatherService', function () {
  var service,
      $q,
      $httpBackend;

  beforeEach(function() {
    module('weather-app')

    inject(function ($injector, _$q_) {

      $httpBackend  = $injector.get('$httpBackend');
      $q = _$q_;
    });
    });

  it("should run a sample test", function () {
    expect(true).toEqual(true);
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});