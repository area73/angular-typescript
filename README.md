# angular-typescript
Charla demostración Typescript / Angular 2


TAG [pr01]
----------
* Usando Typescript de forma clásica , similar a JS

TAG [pr02]
----------
* Creamos en un único archivo la clase ball 


TAG [pr03]
----------
[pr03a]
* Separamos la clase y el main en archivos 
[pr03b]
* Módulos internos
[pr03c]
* Módulos externos  (utilizamos --module system)


TAG [pro04]
-----------
* creamos la clase  connector y las instanciamos






// TODO
Compiling With tsc
Once you have your definition files, and the compiler, you can run it against your application folder. There are several options we need to pass into the compiler, so instead of doing that on the commandline, TypeScript 1.5 allows us to create a special file called tsconfig.json where it will read the compiler options from.

As an added benefit, if we stick this file into our /app directory, then TypeScript will compile all the files in that directory unless we tell it otherwise.

For detailed information you can read the specifications for the tsconfig.json file.

The TypeScript compiler config file for this project looks like this:

{
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "watch": false,
        "removeComments": true
    }
}





