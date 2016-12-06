// - chodzi na ES6
// - https://github.com/ReactiveX/IxJS/tree/master/iterable
// https://github.com/Reactive-Extensions/Rx.NET/tree/master/Ix.NET/Source/System.Interactive
// - jak zrobic aby linq chodzilo w mongo shell ? modul UMD ? czy tam sa generatory ?
// -- generatory i lamby dzialaja, tylko jesli piszemy modulowo ES6 kod, to kod JS sie gubi w mongo shell nie ma modulowosc
// (pewnie jakos sprytnie trzeba wspoldzieli kod, ale miec 2 modulwosci; nalezy pamietac ze dziala JS to jedno,
// ale jeszcze musi dzialac TS)

// todo: fromObject, toObject

// features:
// - leniwosc, kompatybilnosc z LINQ, IxJS
// - mozna korzystac z samych metod osobnych
// - mozna dodawac swoje metody
// - mozna na stronie osadzic tylko to z czego sie faktyczne korzysta
// - TS czyli wypowalnosc (w tym przeladowania, this, dynamiczne dodawanie metod, ...)
// - operatory nie korzystaja z siebie nawazajem



export class Enumerable<T> implements Iterable<T>{
    constructor(public _iterable:Iterable<T>){
    }
    [Symbol.iterator] = function(){
        return this._iterable[Symbol.iterator]();
    };
}