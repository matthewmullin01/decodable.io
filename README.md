# Decodable - Simple & Secure Base64 Decoder

Link - https://decodable.io/

![Decodable](https://i.imgur.com/coJhS9K.png)

Decodable is built to help developers quickly and securely decode base64 encoded strings.

All encoding and decoding is done locally on your machine so no data is ever sent to a server.

It also supports partial decoding - where the string has a mix of encoded and plain text data. For example Kubernetes secrets contain plain text keys with encoded values. 

Give it a try - simply paste in partially encoded text and have a look at the output.

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

This project was built using Vue. It is a side project that I did primarily to learn the basics of Vue. It has also proven to be an incredibly useful application for me personally as I am decoding K8s secrets almost on a daily basis.

I aimed to keep the user experience simple and understandable. 

No CSS frameworks or component libraries were used.


## Installation

```
yarn install
```

### Run locally

```
yarn serve
```

### Build

```
yarn build
```

### Linting

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
