"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        if (type !== 'income' && type !== 'outcome') {
            throw Error('Transaction Invalid, type is not found.');
        }
        // se o valor do outcome ultrapassar o total não vai ser permitido
        if (type === 'outcome' &&
            this.transactionsRepository.getBalance().total - value < 0) {
            throw Error('value not permitted');
        }
        var transaction = this.transactionsRepository.create({
            title: title,
            value: value,
            type: type,
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
