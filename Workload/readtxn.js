'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    
    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        this.workerIndex = workerIndex;
        this.totalWorkers = totalWorkers;
        this.roundIndex = roundIndex;
        this.roundArguments = roundArguments;
        this.sutAdapter = sutAdapter;
        this.sutContext = sutContext;

        let request ={
            contract: 'uDetails',
            verb: 'setAge',
            args: '10',
        }

        return this.sutAdapter.sendRequests(request);
    }
    
    
    
    async submitTransaction() {
        let txArgs = {
            verb: 'getAge'
        };

        return this.sutAdapter.sendRequests(txArgs);
    }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;