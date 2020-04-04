---
title: "TypeScript: Declarando Mongoose Schema + Model"
date: "2020-04-04"
layout: post
image: /assets/img/2020-04-04-typescript-declarando-mongoose-schema-model/typegoose.jpg
description: 'TypeScript: Declarando Mongoose Schema + Model'
introduction: 'TypeScript: Declarando Mongoose Schema + Model'
twitter_text: 'TypeScript: Declarando Mongoose Schema + Model'
main-class: dev
color: '#df6e21'
tags:
  - dev
  - mongoose
  - typescript
  - mongodb
  - nodejs
  - javascript
  - expressjs
---

Então você está começando com o TypeScript e pretende usar o MongoDB e o Mongoose. Ótimo. Agora você precisa definir seu "schema" e modelo.

O que um bom desenvoldedor Typescript deve fazer?

Bem, primeiro passamos ao yarn para instalar os arquivos de dependências e suas declarações. ( você pode usar o npm, btw )

## Início

Começaremos instalando o mongoose e as declarações de tipo, usando as nova definição @types.
```bash
$ yarn add mongoose
$ yarn add @types/mongoose -D
$ yarn add @types/mongodb -D
```

## Interface

Primeiro, vamos criar uma interface pública para o nosso modelo.

Neste exemplo, vou usar um User. Criei um novo arquivo em src/interfaces/user.ts:

```js
export interface UserInterface {
  email?: string;
  firstName?: string;
  lastName?: string;
}
```

## Schema + Model

Para o "schema" e "model", eu coloquei ambos em um novo arquivo em src/models/user.ts

```js
import { Document, Schema, model} from "mongoose";
import { UserInterface } from "../interfaces/user";

export interface UserModelInterface extends UserInterface, Document {
  fullName(): string;
}

export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
UserSchema.pre("save", function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

export default model<UserModelInterface>("User", UserSchema);
```

## Vamos analisar o que fizemos aqui:

- Primeiro importamos Document, Schema e model do mongoose.
- Importamos também a interface UserInterface que criamos anteriormente.
- Em seguida criamos o UserModelInterface, observe que ele estende Document e UserInterface.
- Depois criamos o "schema", infelismente é preciso listar todas as propriedades novamente. Isso significa que sempre que modificar o "schema" terá que modificar a interface e vice-versa.
- Em seguida, estou definindo um método de instância. Nesse caso, eu tenho um método simples fullname() que retorna o primeiro nome concatenado com o sobrenome do usuário.
- Por fim, usando o UserSchema, criamos um novo modelo usando a função model () do mongoose.

## Conclusão

Vamos ver tudo funcionando. Vamos criar uma api REST para o usuário usando expressjs. Aqui o médodo get() foi roteado para /users/:id

```js
/**
 * Get a user
 *
 * @class UsersApi
 * @method get
 * @param req {Request} The express request object.
 * @param res {Response} The express response object.
 * @param next {NextFunction} The next function to continue.
 */
public get(req: Request, res: Response, next: NextFunction) {
  //verify the id parameter exists
  const PARAM_ID: string = "id";
  if (typeof req.params[PARAM_ID] === "undefined" || req.params[PARAM_ID] === null) {
    res.sendStatus(404);
    next();
    return;
  }

  //get the id
  var id = req.params[PARAM_ID];

  //get authorized user
  this.authorize(req, res, next).then((user: IUserModel) => {
    //make sure the user being deleted is the authorized user
    if (user._id !== id) {
      res.sendStatus(401);
      next();
      return;
    }

    //log
    console.log(`[UsersApi.get] Retrieving user: {id: ${req.params.id}}.`);

    //find user
    User.findById(id).then((user: IUserModel) => {
      //verify user was found
      if (user === null) {
        res.sendStatus(404);
        next();
        return;
      }

      //send json response
      res.json(user);
      next();
    }).catch(next);
  }).catch(next);
}
```
