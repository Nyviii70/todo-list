# Todo list 

## Intro


---

## Requisites

---

## ORM

https://sequelize.org/docs/v6/

## Database models


npx sequelize-cli model:generate --name Icons --attributes name:string
npx sequelize-cli model:generate --name Colors --attributes name:string
npx sequelize-cli model:generate --name Lists --attributes title:string,id_color:integer,id_icon:integer
npx sequelize-cli model:generate --name Todos --attributes id_list:integer,content:string

## Create new model

Création du model dans models/tag.js
npx sequelize-cli model:generate --name Tag --attributes name:string

Déploiement en base
npx sequelize-cli db:migrate


#### REST API