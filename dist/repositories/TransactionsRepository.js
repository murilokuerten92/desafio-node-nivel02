"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var income = this.transactions.reduce(function (total, transaction) {
            if (transaction.type === 'income') {
                return total + transaction.value;
            }
            return total;
        }, 0);
        var outcome = this.transactions.reduce(function (total, transaction) {
            if (transaction.type === 'outcome') {
                return total + transaction.value;
            }
            return total;
        }, 0);
        return {
            income: income,
            outcome: outcome,
            total: income - outcome,
        };
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var newTransaction = new Transaction_1.default({ title: title, value: value, type: type });
        this.transactions.push(newTransaction);
        return newTransaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
