describe('Greeting Service',

function () {
    var service,
    // Create a spy with the method getEntity. The spy name is used for logging purposes
    restService = jasmine.createSpyObj('RestService', ['getEntity']);

    // Run before each test
    beforeEach(function () {
        service = new GreetingService(restService);
    });

    it('Checks that getHelloMessage returns \"Hello World!\"',

    function () {
        this.fail(Error('implement me!'));
    });

    it('Checks that getHelloMessage contains \"Hello\" and \"World\"',

    function () {
        this.fail(Error('implement me!'));
    });

    it('waits for getGoodbyeMessage to be called',

    function () {
        this.fail(Error('implement me!'));
    });

    it('Checks that getGoodbye calls rest service',

    function () {
        this.fail(Error('implement me!'));
    });

    it('checks that an exception is thrown when calling throwIfTrue with a truthy value',

    function () {
        this.fail(Error('implement me!'));
    });

    it('checks that calling throwIfTrue with a falsy value returns the same value',

    function () {
        this.fail(Error('implement me!'));
    });
});
