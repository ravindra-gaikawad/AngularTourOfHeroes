"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var in_memory_data_service_1 = require("./in-memory-data.service");
describe('InMemoryDataService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(in_memory_data_service_1.InMemoryDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=in-memory-data.service.spec.js.map