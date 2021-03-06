---
title: Responses
---

* [Apiato Response](#response)
* [Default Apiato Responses Payload](#default-response-payload)
* [Change the default Response payload](#change-default-response-payload)
* [Resource Keys](#resource-keys)
* [Error Responses formats](#error-response-formats)
* [Building a Responses from the Controller](#building-response-from-controller)

### Apiato Response {#response}

In Apiato you can define your own response payload or use one of the supported serializers.

Currently the supported serializers are (`ArraySerializer`, `DataArraySerializer` and `JsonApiSerializer`). As provided
by [Fractal](http://fractal.thephpleague.com/transformers/).

By default Apiato uses `DataArraySerializer`. Below is an example of the response payload.

### Default Apiato Responses Payload: {#default-response-payload}

`DataArraySerializer` pesponse payload look like this:

```json
{
  "data": [
    {
      "id": 100,
      ...
      "relation 1": {
        "data": [ // multiple data
          {
            "id": 11,
			  ...
          }
        ]
      },
      "relation 2": {
        "data": { // single data
          "id": 22,
          ...
          }
        }
      }
    },
    ...
  ],
  "meta": {
    "pagination": {
      "total": 999,
      "count": 999,
      "per_page": 999,
      "current_page": 999,
      "total_pages": 999,
      "links": {
        "next": "http://api.apiato.test/v1/accounts?page=999"
      }
    }
  },
  "include": [ // what can be included
    "xxx",
    "yyy"
  ],
  "custom": []
}
```

**Paginated response:**

When data is paginated the response payload will contain a `meta` description about the pagination.

```json
{
  "meta": {
    "pagination": {
      "total": 999,
      "count": 999,
      "per_page": 999,
      "current_page": 999,
      "total_pages": 999,
      "links": {
        "next": "http://api.apiato.test/v1/accounts?page=999"
      }
    }
  },
  "include": [ // what can be included
    "xxx",
    "yyy"
  ],
  "custom": []
}
```

**Includes:**

Informs the User about what relationships can be include in the response. Example: `?include=tags,user`

For more details read the `Relationships` section in the [Query Parameters]({{ site.baseurl }}{% link _docs/features/query-parameters.md %}) page.

### Change the default Response payload: {#change-default-response-payload}

The default response format (specification) is the `DataArray` Fractal Serializer (`League\Fractal\Serializer\DataArraySerializer`).

To change the default Fractal Serializer open the `app/Ship/Configs/fractal.php` file and change the

```text
'default_serializer' => League\Fractal\Serializer\DataArraySerializer::class,
```

The Supported Serializers are
* `ArraySerializer`
* `DataArraySerializer`
* `JsonApiSerializer`

More details can be found at [Fractal](http://fractal.thephpleague.com/transformers/) and
[Laravel Fractal Wrapper](https://github.com/spatie/laravel-fractal).

In case of returning JSON Data (`JsonApiSerializer`), you may wish to check some JSON response standards:

* [JSEND](https://labs.omniti.com/labs/jsend) (very basic)
* [JSON API](http://jsonapi.org/format/) (very popular and well documented)
* [HAL](http://stateless.co/hal_specification.html) (useful in case of hypermedia)

### Resource Keys {#resource-keys}

#### For JsonApiSerializer. {#resource-keys-for-json-api-serializer}

The transformer allows appending a `ResourceKey` to the transformed resource. You can set the `ResourceKey` in your
response payload in 2 ways:

1. Manually set it via the respective parameter in the `$this->transform()` call. Note that this will only set the
`top level` resource key and does not affect the resource keys from `included` resources!
2. Specify it on the respective `Model`. By overriding the the $resourceKey, (`protected $resourceKey = 'FooBar';`).
If no `$resourceKey` is defined at the `Model`, the `ShortClassName` is used as key. For example, the `ShortClassName` of
the `App\Containers\User\Models\User::class` is `User`.

#### For DataArraySerializer. {#resource-keys-for-data-array-serializer}

By default the `object` keyword is used as a resource key for each response, and it's set manually in each transformer,
*to be automated later*.

### Error Responses formats {#error-response-formats}

Visit each feature, example the Authentication and there you will see how an unauthenticated response looks like, same
for Authorization, Validation and so on.

## Building a Responses from the Controller: {#building-response-from-controller}

Checkout the [Controller response builder helper functions]({{ site.baseurl }}{% link _docs/components/controllers.md %}).
