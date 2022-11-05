"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _data, _quantidade, _valor;
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(data, quantidade, valor) {
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    return Negociacao;
}());
exports.Negociacao = Negociacao;
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();
