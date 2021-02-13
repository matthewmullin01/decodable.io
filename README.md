# Decodable - Simple & Secure Base64 Decoder

Link - http://decodable.io/

![Decodable](https://i.imgur.com/coJhS9K.png)

Decodable is built to help developers quickly and securely decode base64 encoded strings.

All encoding and decoding is done locally on your machine so no data is ever sent to a server.

We have also added support for partial decoding as it is very common to have encoded data together with plain text, a la Kubernetes secrets. Give it a try - simply paste in partially encoded text and have a look at the output.

## Example

![Decodable Example](https://i.imgur.com/BQobGWk.png)


### Input
```
username: aGFycnkucG90dGVy
super-secret-password: SG9nd2FydHMxMDEh
```
### Output
```
username:  harry.potter 
super-secret-password:  Hogwarts101!
```

## Stack

This project was built using Vue. It is a side project that I did primarily to learn the basics of Vue. It has also proven to be an incredibly usefull application for me personally as I am decoding K8s secrets almost on a daily basis.

My design guidance was to focus on user experience by keeping things simple and understandabe.

No CSS frameworks/libraries were used.


## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
