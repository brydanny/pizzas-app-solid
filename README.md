# Presentación

Este es un proyecto desarrollado utilizando el framework NestJS está diseñado para pedir pizzas personalizadas y pizzas preestablecidas. El armado de pizzas sigue el patron de diseño “strategy”.

## Patrones de Diseño aplicados

- Se utilizo el patrón Strategy para crear pizzas predefinidas o personalizadas
- Se utilizo el patrón Strategy para aplicar los descuentos del delivery gratuito los días jueves
- Se utilizo el patrón Strategy para aplicar las promociones 2x1 los días martes y miércoles

## Host

`HOST: localhost:3000`

# Endpoint Pizzas

## Listar todas las Pizzas

### Request

| Método | URL            |
| ------ | -------------- |
| GET    | `{HOST}/pizza` |

##### Response

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 367
ETag: W/"16f-SD4hdEHNhqVyd85/5V3nTCiuqnA"
Date: Sun, 02 Jul 2023 13:32:29 GMT
Connection: close

[{
	"_id": "64a1862adbcec98746143438",
	"name": "Hawaina",
	"toppings": ["peperoni", "choclos"],
	"size": "pequena",
	"price": 25,
	"__v": 0
}, {
	"_id": "64a24145004c563cbd3524c9",
	"name": "Hawaina",
	"toppings": ["peperoni", "choclos"],
	"size": "pequena",
	"price": 25,
	"__v": 0
}, {
	"_id": "64a24148004c563cbd3524cb",
	"name": "Hawaina",
	"toppings": ["peperoni", "choclos"],
	"size": "pequena",
	"price": 25,
	"__v": 0
}]
```

## Crear Pizza

##### Request

| Método | URL            |
| ------ | -------------- |
| POST   | `{HOST}/pizza` |

- name.- descripcion
- toppings.- descripcion
- size.- descripcion
- price.- descripcion

##### Request

```http
POST /pizza HTTP/1.1
Content-Type: application/json; charset=utf-8
Host: localhost:3000
Connection: close
User-Agent: RapidAPI/4.2.0 (Macintosh; OS X/13.4.1) GCDHTTPRequest
Content-Length: 80

{
	"name": "Hawaina",
	"toppings": ["peperoni", "choclos"],
	"size": "pequena",
	"price": 25
}

```

##### Response

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 121
ETag: W/"79-SpSrhBEnZ6gk/lF53BbnkULQQuM"
Date: Sun, 02 Jul 2023 13:32:24 GMT
Connection: close

{
	"name": "Hawaina",
	"toppings": ["peperoni", "choclos"],
	"size": "pequena",
	"price": 25,
	"_id": "64a24148004c563cbd3524cb",
	"__v": 0
}
```

# Endpoint Pedidos

## Listar Pedidos

##### Request

| Método | URL            |
| ------ | -------------- |
| GET    | `{host}/order` |

##### Response

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1442
ETag: W/"5a2-ZJ6Jfiy0u2c97BrfAgYb7n2OJfI"
Date: Sun, 02 Jul 2023 10:27:29 GMT
Connection: close

[{
	"_id": "64a1bfa91e87274e68f01e17",
	"type": "Personalizada",
	"size": "mediana",
	"crust": "original",
	"toppings": ["Cebolla", "Aceitunas", "Jamón", "Carne molida", "Salami", "Queso cheddar", "Salsa BBQ"],
	"quantity": 2,
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PENDIENTE",
	"totalPrice": 150,
	"__v": 0
}, {
	"_id": "64a201089245e418e6b6b59e",
	"type": "Personalizada",
	"size": "mediana",
	"crust": "original",
	"toppings": ["Cebolla", "Aceitunas", "Jamón", "Carne molida", "Salami", "Queso cheddar", "Salsa BBQ"],
	"quantity": 2,
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PENDIENTE",
	"totalPrice": 150,
	"__v": 0
}, {
	"_id": "64a201d5f65063ba03d3e4a3",
	"type": "Personalizada",
	"size": "mediana",
	"crust": "original",
	"toppings": ["Cebolla", "Aceitunas", "Jamón", "Carne molida", "Salami", "Queso cheddar", "Salsa BBQ"],
	"quantity": 2,
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PENDIENTE",
	"totalPrice": 150,
	"__v": 0
}, {
	"_id": "64a2158184726692c42fa07e",
	"type": "PERSONALIZADA",
	"size": "mediana",
	"crust": "original",
	"toppings": ["Cebolla", "Aceitunas", "Jamón", "Carne molida", "Salami", "Queso cheddar", "Salsa BBQ"],
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PREPARADO",
	"__v": 0
}, {
	"_id": "64a215cb84726692c42fa080",
	"type": "PERSONALIZADA",
	"size": "pequeña",
	"crust": "original",
	"toppings": ["Cebolla", "Aceitunas", "Jamón", "Carne molida", "Salami", "Queso cheddar", "Salsa BBQ"],
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PREPARADO",
	"__v": 0
}]
```

## Crear Pedido Predefinido

| Método | URL            |
| ------ | -------------- |
| POST   | `{host}/order` |

- name.- descripcion
- size.- descripcion
- quantity.- descripcion
- specialInstructions.- descripcion

##### Request

```http
POST /order HTTP/1.1
Content-Type: application/json; charset=utf-8
Host: localhost:3000
Connection: close
User-Agent: RapidAPI/4.2.0 (Macintosh; OS X/13.4.1) GCDHTTPRequest
Content-Length: 105

{
	"name": "Hawaiana",
	"size": "peque\u00f1a",
	"quantity": 1,
	"specialInstructions": "Mucho Queso , por favor !!"
}


```

- Como parte de los puntos a solucionar, cuando se aplique el delivery gratuito el campo deliveryPrice del Response sera igual a cero
- Además para los días 2x1, el detalle de pizzas ordenadas se duplicara, si quantity es 2 en el Response quantity será 4 manteniendo el precio del calculo para la cantidad original

##### Response

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 255
ETag: W/"ff-wL2GjiFd/4qyJJqLW9NQN6YiXJY"
Date: Sun, 02 Jul 2023 13:07:49 GMT
Connection: close

{
	"type": "PREESTABLECIDO",
	"size": "pequeña",
	"crust": "ORIGINAL",
	"toppings": ["Piña", "Jamón", "Queso Mozzarella", "Salsa de Tomate"],
	"quantity": 1,
	"specialInstructions": "Mucho Queso , por favor !!",
	"status": "PREPARADO",
	"_id": "64a23b842b95c7cdb7ff06d8",
	"__v": 0
}
```

## Crear Pedido Personalizada

| Método | URL            |
| ------ | -------------- |
| POST   | `{host}/order/custom` |

- campo 1.- descripcion
- campo 2.- descripcion

##### Request

```http
POST /order/custom HTTP/1.1
Content-Type: application/json; charset=utf-8
Host: localhost:3000
Connection: close
User-Agent: RapidAPI/4.2.0 (Macintosh; OS X/13.4.1) GCDHTTPRequest
Content-Length: 167

{
	"size": "pequeña",
	"crust": "original",
	"quantity": "2",
	"specialInstructions": "Extra Queso , por favor !!",
	"toppings": ["carne molida", "choclitos", "Queso Mozzarella"]
}


```

##### Response

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 246
ETag: W/"f6-nl6kj8IOlpzf91khYuE/7Vha3w0"
Date: Sun, 02 Jul 2023 13:07:59 GMT
Connection: close

{
	"type": "PERSONALIZADA",
	"size": "pequeña",
	"crust": "original",
	"toppings": ["carne molida", "choclitos", "Queso Mozzarella"],
	"quantity": 2,
	"specialInstructions": "Extra Queso , por favor !!",
	"status": "PREPARADO",
	"_id": "64a23b8f2b95c7cdb7ff06da",
	"__v": 0
}
```
