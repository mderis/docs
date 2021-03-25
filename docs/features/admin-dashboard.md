---
title: Admin Dashboard
slug: /admin-dashboard
---

- [The provided Admin route](#the-provided-admin-route)
- [How it works](#how-it-works)
- [Change default Admin credentials](#change-default-admin-credentials)

<br/>
<br/>


*Apiato does not recommend serving HTML pages. Instead you should build your own Frontend App completely isolated from the Backend code.*

<a name="the-provided-admin-route"></a>

## The provided Admin route

- http://admin.apiato.test/dashboard

- http://admin.apiato.test/login

- http://admin.apiato.test/logout

<a name="how-it-works"></a>

## How it works

Visiting [http://admin.apiato.test/dashboard](http://admin.apiato.test/dashboard) will redirect you to a login page for admins.

> the default credentials are:
>
> - email: **admin@admin.com**
>
> - password: **admin**


It is up to you to build and customize your admin dashboard however you prefer.

<a name="change-default-admin-credentials"></a>

## Change default Admin credentials

you can change these default values from the seeder class in the Authorization container: `app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php`.
